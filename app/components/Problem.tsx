import { ScrollReveal } from "@/app/components/ScrollReveal";

export function Problem() {
  return (
    <section id="what" className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
            What it is
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] text-ink"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            You built the business. It shouldn&apos;t cost you your freedom.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-ink-muted leading-relaxed text-left">
            <p>
              You started your company for freedom — time, money, choices. But
              somewhere along the way the business became dependent on you for
              everything. Take a week off and revenue wobbles. Think about
              selling and you realize there&apos;s not much to sell without you
              in the chair.
            </p>
            <p>
              <strong className="text-ink font-semibold">
                Freedom Ready Business
              </strong>{" "}
              is a framework for changing that — turning an owner-dependent
              company into a valuable asset that funds the life you actually
              want, and gives you real options for whatever comes next.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
