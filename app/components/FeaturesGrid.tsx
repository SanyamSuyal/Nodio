const features = [
  "AES-256 encryption",
  "Auto rebalancing",
  "Fallback storage",
  "Simple CLI",
];

export function FeaturesGrid() {
  return (
    <section className="fade-in fade-delay-2 mt-20 md:mt-28">
      <h2 className="text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">Built for resilient storage</h2>
      <div className="mt-8 grid grid-cols-1 border border-[#222] sm:grid-cols-2">
        {features.map((feature, index) => (
          <article
            key={feature}
            className={`px-6 py-7 ${index % 2 === 0 ? "sm:border-r sm:border-[#222]" : ""} ${
              index < 2 ? "border-b border-[#222]" : ""
            }`}
          >
            <p className="font-mono-geist text-xs uppercase tracking-wider text-[#555]">Feature</p>
            <h3 className="mt-3 text-lg font-medium text-white">{feature}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
