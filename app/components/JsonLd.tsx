export function JsonLd() {
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
        publisher: { "@id": "https://kurtisbaker.com/#kurt" },
      },
      {
        "@type": "Person",
        "@id": "https://kurtisbaker.com/#kurt",
        name: "Kurt Baker",
        url: "https://kurtisbaker.com",
        jobTitle: "Private Wealth Manager",
        sameAs: ["https://kurtisbaker.com", "https://www.linkedin.com/in/kurtisbaker/"],
      },
      {
        "@type": "Service",
        name: "Freedom Ready Business — The R.E.A.D.Y. Framework",
        serviceType: "Exit planning and business value acceleration framework",
        provider: { "@id": "https://kurtisbaker.com/#kurt" },
        areaServed: { "@type": "Country", name: "United States" },
        description:
          "The R.E.A.D.Y. Framework (Revenue Resilience, Enterprise Value, Autonomy, De-Risked & Diversified, Your Exit) — built on a CEPA foundation and delivered through the APEX Method (Assess, Protect, Elevate, eXit-Ready) — helps small and middle-market business owners build a Freedom Ready Business.",
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
