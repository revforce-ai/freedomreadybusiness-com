import { pillars } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function Framework() {
  return (
    <section id="framework" className="bg-bg">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="max-w-2xl mb-4">
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
              The framework
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              The R.E.A.D.Y. Framework
              <sup className="text-[0.4em] -top-4 relative ml-0.5">™</sup>
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Five pillars, built on a Certified Exit Planning foundation, that
              turn a job you own into an asset that sets you free. Each letter is
              a pillar — together they spell the goal.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.letter} delay={0.06 * i}>
              <div className="grid grid-cols-[64px_1fr] md:grid-cols-[120px_1fr] gap-5 md:gap-10 py-8 md:py-10 group">
                <div
                  className="font-serif text-6xl md:text-8xl text-accent leading-none transition-transform group-hover:scale-105"
                  style={{ fontVariationSettings: '"opsz" 96' }}
                  aria-hidden
                >
                  {p.letter}
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-2xl">
                    {p.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
