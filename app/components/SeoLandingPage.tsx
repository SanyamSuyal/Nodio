import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import Link from "next/link";
import { seoPages, type SeoPageContent } from "@/lib/seo-pages";

type SeoLandingPageProps = {
  page: SeoPageContent;
};

export function SeoLandingPage({ page }: SeoLandingPageProps) {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    "https://nodio.me"
  ).replace(/\/+$/, "");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    mainEntityOfPage: `${siteUrl}/${page.slug}`,
    about: page.keyword,
    publisher: {
      "@type": "Organization",
      name: "Nodio",
      url: siteUrl,
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ...page.faqs,
      {
        question: `Why choose Nodio for ${page.keyword}?`,
        answer:
          "Nodio combines client-side encryption, distributed node architecture, auto rebalancing, and S3-compatible integration paths so teams improve resilience without redesigning their entire stack.",
      },
    ].map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const nodioSection = {
    heading: `How Nodio approaches ${page.keyword}`,
    body: "Nodio is designed for teams that need secure and resilient object storage without central point-of-failure risk. Files are encrypted client-side, split into chunks, and distributed across contributor nodes with policy-driven replication and repair. This lets engineering teams improve durability, reduce regional dependency, and keep API integration practical as workloads scale.",
  };

  const nodioBullets = [
    "Nodio keeps encryption close to users with client-side controls.",
    "Nodio distributes chunk replicas across nodes for outage isolation.",
    "Nodio supports S3-compatible workflows for gradual migration.",
    "Nodio uses auto rebalancing to maintain reliability during node churn.",
  ];

  const displayFaqs = [
    ...page.faqs,
    {
      question: `Why choose Nodio for ${page.keyword}?`,
      answer:
        "Nodio combines encryption-first storage, distributed resilience, and migration-friendly integration so teams can improve performance and reliability while keeping operations manageable.",
    },
  ];

  const relatedPages = seoPages
    .filter((candidate) => candidate.slug !== page.slug)
    .sort((a, b) => {
      const aScore = Number(a.heroLabel === page.heroLabel);
      const bScore = Number(b.heroLabel === page.heroLabel);
      return bScore - aScore;
    })
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 md:pt-24">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8 lg:px-12">
          <section id="top" className="border-b border-[#1f1f1f] pt-8 pb-12 md:pt-12 md:pb-16">
            <p className="eyebrow inline-flex border border-[#1f1f1f] px-4 py-2">{page.heroLabel}</p>
            <h1 className="mt-8 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#b5b5b5] md:text-lg">{page.intro}</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#9fc6ff] md:text-lg">
              This guide also maps the topic to how Nodio builds secure, distributed storage in production so you can evaluate practical adoption paths.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="outlined-button inline-flex px-4 py-2 text-sm">
                Back to homepage
              </Link>
              <Link href="/blogs" className="outlined-button inline-flex px-4 py-2 text-sm">
                Browse all guides
              </Link>
            </div>
          </section>

          <section className="grid gap-8 border-b border-[#1f1f1f] py-12 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:py-16">
            <div className="space-y-8">
              {[nodioSection, ...page.sections].map((section) => (
                <article key={section.heading}>
                  <h2 className="text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#b5b5b5] md:text-base">{section.body}</p>
                </article>
              ))}
            </div>

            <aside className="h-fit border border-[#2b2b2b] p-6">
              <p className="eyebrow text-[#63a7ff]">Actionable Summary</p>
              <ul className="mt-4 space-y-3">
                {page.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-[#b5b5b5] md:text-base">
                    • {bullet}
                  </li>
                ))}
                {nodioBullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-[#9fc6ff] md:text-base">
                    • {bullet}
                  </li>
                ))}
              </ul>

              <a href="/#waitlist" className="outlined-button mt-6 inline-flex px-4 py-2 text-sm">
                Join waitlist
              </a>
            </aside>
          </section>

          <section className="py-12 md:py-16">
            <h2 className="text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-[#1f1f1f] border-y border-[#1f1f1f]">
              {displayFaqs.map((faq) => (
                <article key={faq.question} className="py-6 md:py-8">
                  <h3 className="text-lg font-medium text-white md:text-xl">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#b5b5b5] md:text-base">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-[#1f1f1f] py-12 md:py-16">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Related Guides</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
                  Continue exploring distributed storage topics
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[#b5b5b5] md:text-base">
                These related guides are internally linked to help you compare approaches and build a stronger storage strategy.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {relatedPages.map((relatedPage) => (
                <article key={relatedPage.slug} className="border border-[#2b2b2b] p-6 transition-colors hover:border-[#63a7ff]">
                  <p className="eyebrow text-[#63a7ff]">{relatedPage.heroLabel}</p>
                  <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-white">{relatedPage.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#b5b5b5] md:text-base">{relatedPage.description}</p>
                  <Link href={`/${relatedPage.slug}`} className="outlined-button mt-5 inline-flex px-4 py-2 text-sm">
                    Read related guide
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    </>
  );
}