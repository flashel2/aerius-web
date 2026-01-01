export function Step({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="text-cyan-400 font-mono">{index.toString().padStart(2, "0")}</div>
      <div>
        <h4 className="text-white">{title}</h4>
        <p className="text-[#9fb3c8] text-sm">{children}</p>
      </div>
    </div>
  );
}
