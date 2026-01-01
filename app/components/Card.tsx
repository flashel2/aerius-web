export function Card({
  icon,
  title,
  children,
}: {
  icon?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-cyan-400/20 bg-[#111824] p-6 space-y-3">
      <div className="flex items-center gap-3">
        {icon && <span className="text-xl">{icon}</span>}
        <h3 className="text-lg text-white">{title}</h3>
      </div>
      <div className="text-[#cfd8e3] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
