const SITE_URL = "https://conztra-landing-kmmuneer773-5966s-projects.vercel.app";
const LOGO_URL = `${SITE_URL}/logo.png`;

export function welcomeEmailHtml(email: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to CONZTRA</title>
  </head>
  <body style="margin:0;padding:0;background-color:#030a14;font-family:Arial,Helvetica,sans-serif;color:#e4e4e7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#030a14;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#040f21;border:1px solid rgba(212,160,23,0.25);border-radius:12px;overflow:hidden;">
            <tr>
              <td align="center" style="padding:40px 32px 24px 32px;">
                <img src="${LOGO_URL}" alt="CONZTRA" width="140" style="display:block;width:140px;max-width:140px;height:auto;border:0;" />
                <p style="margin:12px 0 0 0;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:#d4a017;">Enterprise Solutions</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px;">
                <div style="width:64px;height:3px;background-color:#d4a017;border-radius:2px;margin:0 auto;"></div>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:32px 40px 8px 40px;">
                <h1 style="margin:0;font-size:26px;font-weight:bold;color:#ffffff;letter-spacing:0.5px;">Welcome aboard</h1>
                <p style="margin:16px 0 0 0;font-size:15px;line-height:1.7;color:#a1a1aa;">Thank you for subscribing to the CONZTRA corporate bulletin. You will receive curated updates on our equipment, materials, and services across the UAE &amp; GCC.</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:24px 40px 8px 40px;">
                <a href="${SITE_URL}" style="display:inline-block;background-color:#d4a017;color:#040f21;text-decoration:none;font-size:14px;font-weight:bold;padding:14px 32px;border-radius:8px;">Explore Our Solutions</a>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 40px 40px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid rgba(255,255,255,0.08);">
                  <tr>
                    <td style="padding-top:24px;">
                      <p style="margin:0 0 8px 0;font-size:13px;color:#a1a1aa;">CONZTRA — Premium industrial solutions across the UAE &amp; GCC.</p>
                      <p style="margin:0 0 4px 0;font-size:13px;color:#71717a;">Al Messaned, Al Bataeh, Sharjah, United Arab Emirates</p>
                      <p style="margin:0 0 4px 0;font-size:13px;color:#71717a;"><a href="mailto:info@conztra.com" style="color:#d4a017;text-decoration:none;">info@conztra.com</a> · <a href="tel:+97141234567" style="color:#d4a017;text-decoration:none;">+971 4 123 4567</a></p>
                      <p style="margin:16px 0 0 0;font-size:12px;color:#52525b;">You received this because ${email} subscribed to the CONZTRA corporate bulletin. If this wasn't you, simply ignore this email.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
