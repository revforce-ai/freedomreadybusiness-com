import { apexSteps } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function ApexMethod() {
  return (
    <section id="method" className="bg-ink text-bg overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
              How we get you there
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              The APEX Method
              <sup className="text-[0.4em] -top-4 relative ml-0.5">™</sup>
            </h2>
            <p className="mt-5 text-lg text-bg/80 leading-relaxed">
              A disciplined four-step process — grounded in the Certified Exit
              Planning value-acceleration method — that takes you from where you
              are to the summit: a business at its peak, and you free to leave it.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {apexSteps.map((s, i) => (
            <ScrollReveal key={s.letter} delay={0.08 * i}>
              <div className="relative h-full rounded-2xl border border-bg/15 bg-bg/[0.03] p-7">
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className="font-serif text-5xl text-accent leading-none"
                    style={{ fontVariationSettings: '"opsz" 96' }}
                  >
                    {s.letter}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-bg/50">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl leading-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-bg/75 leading-relaxed">{s.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
