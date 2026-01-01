import React from "react";

export function Section({
  title,
  subtitle,
  children,
  className = "space-y-6",
  headerClassName = "space-y-2",
  titleClassName = "text-3xl font-semibold tracking-tight text-[#eab308]",
  subtitleClassName = "text-[#9fb3c8]",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  return (
    <section className={className}>
      <header className={headerClassName}>
        <h2 className={titleClassName}>{title}</h2>
        {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
      </header>

      {children}
    </section>
  );
}
