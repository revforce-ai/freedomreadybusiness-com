import { site } from "@/app/data/site";
import { MeshBackground } from "@/app/components/MeshBackground";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <MeshBackground />
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-24 md:pt-36 md:pb-32 text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-6">
            A framework by Kurt Baker, CFP® · CEPA® · AIF®
          </p>
          <h1
            className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.98] tracking-[-0.025em] text-ink mx-auto max-w-4xl"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 30' }}
          >
            Build a business that gives you{" "}
            <span className="italic text-accent">freedom.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl mx-auto">
            Most owners don&apos;t own a business — they own a job that owns them.
            A <strong className="text-ink font-semibold">Freedom Ready Business</strong>{" "}
            creates significant value, runs without you, and is ready to scale,
            sell, or pass on — on your terms.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-bg shadow-[0_4px_14px_rgba(15,26,46,0.18)] transition-all hover:bg-accent hover:-translate-y-0.5"
            >
              Book a strategy call
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#framework"
              className="inline-flex items-center justify-center rounded-full border border-border bg-bg-elevated/70 backdrop-blur px-6 py-3 text-base font-medium text-ink transition-all hover:border-ink hover:-translate-y-0.5"
            >
              See the framework
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
