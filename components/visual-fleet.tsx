'use client';

import { useState } from 'react';
import Image from 'next/image';
import { COMPANY, VISUALS } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/animated';
import { ImageLightbox } from '@/components/image-lightbox';

export function VisualFleet() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="The Fleet"
        title="The Safari Freeway range in pictures."
        copy="Shuttles, cargo vans, refrigerated trucks, and tricycles from the current Safari Freeway lineup."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {VISUALS.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <div className="group h-full overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] shadow-2xl shadow-black/20">
              <button
                type="button"
                className="relative block h-64 w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left outline-none transition focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[rgba(207,52,57,0.55)]"
                onClick={() => setLightbox({ src: item.image, alt: item.title })}
                aria-label={`View ${item.title} image larger`}
              >
                <Image src={item.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-105" aria-hidden />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-lg font-semibold text-white">{item.title}</div>
                  <div className="mt-1 text-sm text-white/70">{item.subtitle}</div>
                </div>
              </button>
            </div>
          </Reveal>
        ))}
      </div>
      <ImageLightbox
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
        src={lightbox?.src ?? ''}
        alt={lightbox?.alt ?? ''}
      />
    </section>
  );
}
