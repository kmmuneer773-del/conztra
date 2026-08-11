export default function KenBurnsBg({
  src,
  alt,
  reverse = false,
  className = "",
}: {
  src: string;
  alt: string;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={
        "kenburns " +
        (reverse ? "kenburns-reverse " : "") +
        "absolute inset-0 bg-cover bg-center " +
        className
      }
      style={{ backgroundImage: `url('${src}')` }}
    />
  );
}
