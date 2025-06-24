interface ChipProps {
  children: React.ReactNode;
}

export function Chip({ children }: ChipProps) {
  return (
    <span className="inline-block rounded-3xl bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}
