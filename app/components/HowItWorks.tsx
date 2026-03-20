const steps = [
  {
    id: "01",
    title: "Encrypt before distribution",
    description:
      "Files are encrypted client-side and split into secure shards before they ever leave your environment.",
  },
  {
    id: "02",
    title: "Spread shards across edge nodes",
    description:
      "Each shard is distributed across independent nodes, reducing single-point risk and improving locality.",
  },
  {
    id: "03",
    title: "Continuously rebalance capacity",
    description:
      "The network reassigns storage in real time as availability shifts, keeping replicas healthy and durable.",
  },
  {
    id: "04",
    title: "Recover instantly on request",
    description:
      "Requested files are reconstructed from available shards with integrity checks built into retrieval.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="fade-in fade-delay-1 mt-20 scroll-mt-28 md:mt-28">
      <h2 className="text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">How it works</h2>

      <div className="mt-10 divide-y divide-[#222] border-y border-[#222]">
        {steps.map((step) => (
          <article key={step.id} className="grid gap-4 py-7 md:grid-cols-[88px_1fr] md:gap-6">
            <p className="font-mono-geist text-xs tracking-wider text-[#555]">{step.id}</p>
            <div>
              <h3 className="text-lg font-medium text-white">{step.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#888] md:text-base">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
