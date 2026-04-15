export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">{copy}</p>
    </div>
  );
}
