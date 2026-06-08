import { faqs } from "@/app/data/site";

/**
 * JSON-LD structured data for SEO + GEO + AEO.
 *
 * The Person node shares the canonical @id (https://kurtisbaker.com/#kurt) used
 * across all three Baker sites so engines resolve one entity. The DefinedTermSet
 * explicitly names and attributes Kurt's proprietary IP — R.E.A.D.Y. Framework™,
 * APEX Method™, Freedom Ready Business — to counter the "R.E.A.D.Y." / "Freedom
 * Framework" name collisions that currently misattribute the framework. FAQPage
 * mirrors the on-page accordion (see Faq + data/site faqs).
 */
export function JsonLd() {
  const personId = "https://kurtisbaker.com/#kurt";
  const termSetId = "https://freedomreadybusiness.com/#ready-framework";

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://freedomreadybusiness.com/#website",
        url: "https://freedomreadybusiness.com",
        name: "Freedom Ready Business",
        description:
          "A framework for building a business that creates significant value, runs without you, and is ready to scale, sell, or pass on — on your terms.",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Kurtis 'Kurt' Baker",
        givenName: "Kurtis",
        familyName: "Baker",
        alternateName: ["Kurt Baker", "Kurtis Baker"],
        url: "https://kurtisbaker.com",
        jobTitle: "Private Wealth Manager",
        description:
          "Princeton, NJ private wealth manager (CFP® · CEPA® · AIF®) who created the R.E.A.D.Y. Framework™ to help business owners build a Freedom Ready Business. Host of the Master Your Finances radio show.",
        sameAs: [
          "https://kurtisbaker.com",
          "https://www.linkedin.com/in/kurtisbaker/",
        ],
        knowsAbout: [
          "Exit Planning",
          "Business Value Acceleration",
          "Freedom Ready Business",
          "R.E.A.D.Y. Framework",
          "Financial Planning",
        ],
      },
      {
        // Names + attributes the proprietary IP. DefinedTerm is how you tell
        // engines "this is a specific named thing, and Kurt owns it" — the
        // direct counter to the in-niche name collisions.
        "@type": "DefinedTermSet",
        "@id": termSetId,
        name: "The R.E.A.D.Y. Framework™",
        description:
          "Kurt Baker's five-pillar framework for building a Freedom Ready Business: Revenue Resilience, Enterprise Value, Autonomy, De-Risked & Diversified, and Your Exit (Your Terms).",
        creator: { "@id": personId },
        hasDefinedTerm: [
          {
            "@type": "DefinedTerm",
            name: "Freedom Ready Business",
            inDefinedTermSet: termSetId,
            description:
              "A business — created using Kurt Baker's R.E.A.D.Y. Framework™ — that produces significant value, runs without the owner, and is ready to scale, sell, or pass on, on the owner's terms.",
          },
          {
            "@type": "DefinedTerm",
            name: "R.E.A.D.Y. Framework",
            inDefinedTermSet: termSetId,
            description:
              "Five pillars of an exit-ready business: Revenue Resilience, Enterprise Value, Autonomy, De-Risked & Diversified, Your Exit (Your Terms). Built on a CEPA foundation, integrated with CFP® and AIF® planning.",
          },
          {
            "@type": "DefinedTerm",
            name: "APEX Method",
            inDefinedTermSet: termSetId,
            description:
              "The four-step delivery process for the R.E.A.D.Y. Framework™: Assess, Protect, Elevate, eXit-Ready.",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Freedom Ready Business — The R.E.A.D.Y. Framework",
        serviceType: "Exit planning and business value acceleration framework",
        provider: { "@id": personId },
        areaServed: { "@type": "Country", name: "United States" },
        isRelatedTo: { "@id": termSetId },
        description:
          "The R.E.A.D.Y. Framework (Revenue Resilience, Enterprise Value, Autonomy, De-Risked & Diversified, Your Exit) — built on a CEPA foundation and delivered through the APEX Method (Assess, Protect, Elevate, eXit-Ready) — helps small and middle-market business owners build a Freedom Ready Business.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://freedomreadybusiness.com/#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
