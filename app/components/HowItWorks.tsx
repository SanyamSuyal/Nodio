const steps = [
  {
    id: "01",
    title: "People share extra storage",
    description: "Anyone with spare space on a laptop or phone can join the network and earn.",
  },
  {
    id: "02",
    title: "You upload like normal",
    description: "Drop in your files and Nodio handles encryption and splitting behind the scenes.",
  },
  {
    id: "03",
    title: "Your data is spread safely",
    description: "Pieces are stored across many devices, so one offline device does not break your file.",
  },
  {
    id: "04",
    title: "Get files back fast",
    description: "When you need a file, Nodio pulls the pieces together and delivers it quickly.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="reveal-on-scroll scroll-mt-28 pt-14 pb-24 md:pt-16 md:pb-28">
      <h2 className="text-center text-3xl font-medium leading-tight tracking-[-0.025em] text-white md:text-5xl">Simple flow. Built on trust.</h2>

      <div className="mt-10 flex flex-col gap-6 md:mt-12 md:grid md:grid-cols-4 md:gap-5">
        {steps.map((step, index) => (
          <article key={step.id} className="relative border border-[#2b2b2b] p-6">
            <div className="mb-4 flex items-center gap-3">
              <p className="eyebrow text-[#63a7ff]">Step {step.id}</p>
              <span className="h-px flex-1 bg-[#1f1f1f] md:hidden" aria-hidden="true" />
            </div>

            <h3 className="text-lg font-medium text-white md:text-xl">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b5b5b5] md:text-base">{step.description}</p>

            {index < steps.length - 1 ? (
              <span
                className="absolute -right-[10px] top-1/2 hidden h-px w-[20px] -translate-y-1/2 bg-[#2b2b2b] md:block"
                aria-hidden="true"
              />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
