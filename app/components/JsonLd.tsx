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
        name: "Freedom Ready Business",
        serviceType: "Exit planning and business value acceleration framework",
        provider: { "@id": "https://kurtisbaker.com/#kurt" },
        areaServed: { "@type": "Country", name: "United States" },
        description:
          "The Freedom Ready Business framework helps small and middle-market business owners build significant value, owner independence, exit optionality, and personal freedom.",
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
