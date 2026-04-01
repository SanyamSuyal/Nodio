import Link from "next/link";
import { seoPages } from "@/lib/seo-pages";

export function SeoGuides() {
  return (
    <section id="seo-guides" className="reveal-on-scroll py-14 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Knowledge Center</p>
          <h2 className="mt-3 text-3xl font-medium leading-tight tracking-[-0.025em] text-white md:text-5xl">
            Deep guides on edge storage
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-[#b5b5b5] md:text-base">
          We publish practical, technical explainers for teams evaluating distributed storage, encryption strategy,
          and developer workflows.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {seoPages.map((page) => (
          <article key={page.slug} className="border border-[#2b2b2b] p-6 transition-colors hover:border-[#63a7ff]">
            <p className="eyebrow text-[#63a7ff]">{page.heroLabel}</p>
            <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-white">{page.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b5b5b5] md:text-base">{page.description}</p>
            <Link href={`/${page.slug}`} className="outlined-button mt-5 inline-flex px-4 py-2 text-sm">
              Read guide
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}