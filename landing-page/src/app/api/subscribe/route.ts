import { NextResponse } from "next/server";
import { welcomeEmailHtml } from "@/lib/emailTemplate";

export async function POST(req: Request) {
  let email: string;
  try {
    const body = await req.json();
    email = String(body?.email || "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const brevoKey = process.env.BREVO_API_KEY;

  if (brevoKey) {
    const brevoList = process.env.BREVO_LIST_ID;
    const brevoSender = process.env.BREVO_SENDER_EMAIL || "kmmuneer773@gmail.com";

    try {
      let already = false;
      try {
        const lookup = await fetch(
          `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
          { headers: { "api-key": brevoKey } }
        );
        if (lookup.ok) already = true;
      } catch {
        // network error → treat as new subscriber
      }

      if (!already && brevoList) {
        await fetch("https://api.brevo.com/v3/contacts", {
          method: "POST",
          headers: {
            "api-key": brevoKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            listIds: [Number(brevoList)],
            updateEnabled: true,
          }),
        });
      }

      if (already) {
        return NextResponse.json({ ok: true, already: true, channel: "brevo" });
      }

      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": brevoKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "CONZTRA", email: brevoSender },
          to: [{ email }],
          subject: "Welcome to the CONZTRA Bulletin",
          htmlContent: welcomeEmailHtml(email),
          textContent:
            "Welcome aboard! Thank you for subscribing to the CONZTRA corporate bulletin.\n\nYou will receive curated updates on our equipment, materials, and services across the UAE & GCC.\n\nCONZTRA — Premium industrial solutions across the UAE & GCC.\nAl Messaned, Al Bataeh, Sharjah, United Arab Emirates\ninfo@conztra.com | +971 4 123 4567",
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        return NextResponse.json(
          { error: "Brevo send failed", detail: errText.slice(0, 300) },
          { status: 502 }
        );
      }
      return NextResponse.json({ ok: true, channel: "brevo" });
    } catch {
      // fall through to Mailchimp / Web3Forms
    }
  }

  const mailchimpKey = process.env.MAILCHIMP_API_KEY;
  const mailchimpList = process.env.MAILCHIMP_LIST_ID;
  const mailchimpServer = process.env.MAILCHIMP_SERVER_PREFIX;

  if (mailchimpKey && mailchimpList && mailchimpServer) {
    try {
      const res = await fetch(
        `https://${mailchimpServer}.api.mailchimp.com/3.0/lists/${mailchimpList}/members`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${Buffer.from(`anystring:${mailchimpKey}`).toString("base64")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_address: email, status: "pending" }),
        }
      );
      if (!res.ok) {
        const text = await res.text();
        try {
          const err = JSON.parse(text);
          if (err?.title === "Member Exists" || (err?.status === 400 && /exists/i.test(err?.detail || ""))) {
            return NextResponse.json({ ok: true, already: true, channel: "mailchimp" });
          }
        } catch {
          // ignore parse failure
        }
        return NextResponse.json({ error: "Mailchimp failed" }, { status: 502 });
      }
      return NextResponse.json({ ok: true, channel: "mailchimp" });
    } catch {
      return NextResponse.json({ error: "Mailchimp error" }, { status: 502 });
    }
  }

  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (web3formsKey) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          email,
          subject: "Corporate Bulletin Subscription",
          from_name: email,
          message: `Please add ${email} to the CONZTRA corporate bulletin mailing list.`,
        }),
      });
      if (!res.ok) {
        return NextResponse.json({ error: "Web3Forms failed" }, { status: 502 });
      }
      return NextResponse.json({ ok: true, channel: "web3forms" });
    } catch {
      return NextResponse.json({ error: "Web3Forms error" }, { status: 502 });
    }
  }

  return NextResponse.json(
    { error: "No subscription service configured", configured: false },
    { status: 501 }
  );
}
