const features = [
  {
    title: "AES-256 encryption",
    description:
      "Data is encrypted client-side with per-object keys before sharding, so raw payloads never appear in plaintext on edge nodes.",
  },
  {
    title: "Auto rebalancing",
    description:
      "Placement is continuously recalculated as nodes join, leave, or saturate, keeping replica distribution healthy without operator intervention.",
  },
  {
    title: "Fallback storage",
    description:
      "When an edge replica degrades, retrieval falls back to verified secondary shards and self-heals missing segments in the background.",
  },
  {
    title: "Simple CLI",
    description:
      "Provision, upload, inspect, and restore through a single command surface with predictable flags and script-friendly output.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="reveal-on-scroll pt-14 pb-24 md:pt-16 md:pb-28">
      <h2 className="text-center text-3xl font-medium leading-tight tracking-[-0.025em] text-white md:text-5xl">
        Built for resilient edge storage
      </h2>

      <div className="mt-10 border-y border-[#2b2b2b] md:mt-12">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="grid gap-4 border-b border-[#2b2b2b] py-7 transition-colors last:border-b-0 md:grid-cols-[minmax(220px,1fr)_2fr] md:gap-8 md:py-8"
          >
            <div className="pr-4">
              <p className="eyebrow text-[#63a7ff]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-2xl font-medium leading-tight text-white">{feature.title}</h3>
            </div>

            <p className="text-sm leading-relaxed text-[#b5b5b5] md:text-base">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
