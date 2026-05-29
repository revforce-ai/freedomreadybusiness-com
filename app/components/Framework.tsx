import { pillars } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function Framework() {
  return (
    <section id="framework" className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
              The framework
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              The four pillars of a Freedom Ready Business.
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Each pillar builds on the last. Together they turn a job you own
              into an asset that sets you free.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.num} delay={0.07 * i}>
              <div className="h-full rounded-2xl border border-border bg-bg-elevated p-8 transition-all hover:border-accent hover:-translate-y-1 hover:shadow-[0_22px_40px_-20px_rgba(15,26,46,0.25)]">
                <span className="font-serif text-4xl text-accent/80 leading-none">
                  {p.num}
                </span>
                <h3 className="font-serif text-2xl text-ink leading-tight mt-4 mb-2">
                  {p.title}
                </h3>
                <p className="text-base text-ink-muted leading-relaxed">
                  {p.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
