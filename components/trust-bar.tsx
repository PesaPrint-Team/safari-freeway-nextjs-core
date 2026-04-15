import { CheckCircle2 } from 'lucide-react';
import { TRUST } from '@/lib/company';

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {TRUST.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white/75" />
            <p className="text-sm leading-6 text-white/65">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
