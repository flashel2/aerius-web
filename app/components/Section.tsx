export function Section({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      {title && (
        <h2 className="text-2xl font-medium text-white">{title}</h2>
      )}
      {subtitle && (
        <p className="text-[#9fb3c8]">{subtitle}</p>
      )}
      {children}
    </section>
  );
}
