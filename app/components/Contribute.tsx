export function Contribute() {
  return (
    <section id="contribute" className="fade-in fade-delay-3 mt-20 scroll-mt-28 md:mt-28">
      <div className="rounded-xl border border-[#222] bg-[#0d0d0d] p-7 md:p-10">
        <h2 className="text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">Run a node. Shape the network.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#888] md:text-base">
          Contribute spare storage, test network behavior under real load, and help harden the edge layer before
          public rollout.
        </p>

        <div className="mt-8 rounded-md border border-[#2a2a2a] bg-[#0a0a0a] p-4">
          <p className="font-mono-geist text-xs tracking-wide text-[#555]">CLI</p>
          <pre className="font-mono-geist mt-2 overflow-x-auto text-sm leading-relaxed text-white">
            <code>npx nodio-node start --storage 20gb</code>
          </pre>
        </div>

        <a
          href="https://github.com/SanyamSuyal/Nodio"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-11 items-center rounded-md border border-[#2a2a2a] bg-[#151515] px-5 text-sm text-white transition-colors hover:bg-[#1a1a1a]"
        >
          Join as contributor
        </a>
      </div>
    </section>
  );
}
