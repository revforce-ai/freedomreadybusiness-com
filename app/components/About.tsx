import { site } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function About() {
  return (
    <section className="bg-bg-elevated border-y border-border">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
            Who&apos;s behind it
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl leading-tight tracking-[-0.02em] text-ink"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            Created by Kurt Baker.
          </h2>
          <p className="mt-6 text-lg text-ink-muted leading-relaxed">
            Kurt Baker is a private wealth manager (CFP® · CEPA® · AIF®) who has
            spent his career helping successful small and middle-market business
            owners build value, protect what they&apos;ve earned, and prepare for
            what&apos;s next. Freedom Ready Business is the framework he uses to
            help owners turn their company into the asset that funds the life they
            want.
          </p>
          <a
            href={site.hubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-base font-medium text-ink transition-colors hover:text-accent"
          >
            More about Kurt
            <span aria-hidden>→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
