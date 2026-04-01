import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import { seoPages } from "@/lib/seo-pages";

type BlogCategory =
  | "Architecture"
  | "Security"
  | "Competitive"
  | "Pricing"
  | "Developer"
  | "Operations"
  | "AI and Data"
  | "Gaming"
  | "Web and Media"
  | "Business";

const categoryOrder: BlogCategory[] = [
  "Architecture",
  "Security",
  "Competitive",
  "Pricing",
  "Developer",
  "Operations",
  "AI and Data",
  "Gaming",
  "Web and Media",
  "Business",
];

function getCategory(page: (typeof seoPages)[number]): BlogCategory {
  const keyword = page.keyword.toLowerCase();
  const label = page.heroLabel.toLowerCase();

  if (keyword.includes("encryption") || keyword.includes("secure") || keyword.includes("immutable")) {
    return "Security";
  }

  if (
    keyword.includes("vs ") ||
    keyword.includes("alternative") ||
    label.includes("competitive")
  ) {
    return "Competitive";
  }

  if (
    keyword.includes("free storage") ||
    keyword.includes("cheap") ||
    keyword.includes("affordable") ||
    keyword.includes("low cost") ||
    label.includes("pricing")
  ) {
    return "Pricing";
  }

  if (keyword.includes("ai dataset") || label.includes("ai")) {
    return "AI and Data";
  }

  if (
    keyword.includes("game") ||
    keyword.includes("gaming") ||
    keyword.includes("minecraft") ||
    keyword.includes("unity") ||
    keyword.includes("unreal") ||
    label.includes("gaming")
  ) {
    return "Gaming";
  }

  if (keyword.includes("website assets") || keyword.includes("media files") || label.includes("media") || label.includes("web")) {
    return "Web and Media";
  }

  if (keyword.includes("small business") || label.includes("business")) {
    return "Business";
  }

  if (
    keyword.includes("ci") ||
    keyword.includes("backup") ||
    keyword.includes("disaster recovery") ||
    keyword.includes("auto rebalancing") ||
    keyword.includes("storage node") ||
    label.includes("devops") ||
    label.includes("continuity") ||
    label.includes("startup")
  ) {
    return "Operations";
  }

  if (keyword.includes("s3") || label.includes("developer")) {
    return "Developer";
  }

  return "Architecture";
}

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://nodio.me"
).replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Nodio Blogs | Edge Storage Guides and Technical Articles",
  description:
    "Explore Nodio blogs on edge storage architecture, encryption, auto rebalancing, CI artifact pipelines, and decentralized storage strategy.",
  alternates: {
    canonical: `${siteUrl}/blogs`,
  },
  openGraph: {
    title: "Nodio Blogs | Edge Storage Guides and Technical Articles",
    description:
      "Explore practical Nodio guides for distributed storage strategy, reliability, security, and developer workflows.",
    type: "website",
    url: `${siteUrl}/blogs`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nodio Blogs | Edge Storage Guides and Technical Articles",
    description:
      "High quality storage guides covering encryption, distributed architecture, reliability, and CI workflows.",
  },
};

type BlogsPageProps = {
  searchParams?: {
    q?: string | string[];
  };
};

export default function BlogsPage({ searchParams }: BlogsPageProps) {
  const rawQuery = searchParams?.q;
  const queryValue = Array.isArray(rawQuery) ? rawQuery[0] ?? "" : rawQuery ?? "";
  const searchQuery = queryValue.trim().toLowerCase();

  const filteredPages = seoPages.filter((page) => {
    if (!searchQuery) return true;

    const category = getCategory(page);
    const searchable = [
      page.title,
      page.description,
      page.keyword,
      page.heroLabel,
      page.intro,
      category,
      ...page.sections.map((section) => `${section.heading} ${section.body}`),
      ...page.bullets,
      ...page.faqs.map((faq) => `${faq.question} ${faq.answer}`),
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(searchQuery);
  });

  const categorizedPages = categoryOrder
    .map((category) => ({
      category,
      pages: filteredPages.filter((page) => getCategory(page) === category),
    }))
    .filter((entry) => entry.pages.length > 0);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 md:pt-24">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8 lg:px-12">
          <section className="border-b border-[#1f1f1f] pt-8 pb-12 md:pt-12 md:pb-16">
            <p className="eyebrow inline-flex border border-[#1f1f1f] px-4 py-2">Knowledge Center</p>
            <h1 className="mt-8 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
              Nodio blogs and technical guides
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#b5b5b5] md:text-lg">
              Read in-depth articles on distributed edge storage, encryption-first architecture, reliability engineering,
              and practical implementation strategies for modern teams.
            </p>

            <form action="/blogs" method="get" className="mt-8 max-w-3xl">
              <label htmlFor="blog-search" className="eyebrow mb-3 block text-[#9a9a9a]">
                Search guides
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="blog-search"
                  name="q"
                  type="search"
                  defaultValue={queryValue}
                  placeholder="Search by keyword, category, or topic"
                  className="w-full border border-[#2b2b2b] bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#6f6f6f] focus:border-[#63a7ff]"
                />
                <button type="submit" className="outlined-button inline-flex items-center justify-center px-5 py-3 text-sm">
                  Search
                </button>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#7d7d7d]">
                {filteredPages.length} guide{filteredPages.length === 1 ? "" : "s"} found
                {searchQuery ? ` for \"${queryValue.trim()}\"` : ""}
              </p>
            </form>
          </section>

          <section className="py-12 md:py-16">
            {categorizedPages.length === 0 ? (
              <div className="border border-[#2b2b2b] p-8 md:p-10">
                <h2 className="text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">No guides found</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#b5b5b5] md:text-base">
                  Try a broader phrase like &quot;cloud storage&quot;, &quot;security&quot;, &quot;pricing&quot;, or &quot;S3&quot; to explore more Nodio guides.
                </p>
              </div>
            ) : (
              <>
                <div className="flex flex-wrap gap-2 border-b border-[#1f1f1f] pb-8">
                  {categorizedPages.map(({ category, pages }) => (
                    <a
                      key={category}
                      href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="eyebrow inline-flex border border-[#2b2b2b] px-3 py-1.5 text-[#b5b5b5] transition-colors hover:border-[#63a7ff] hover:text-white"
                    >
                      {category} ({pages.length})
                    </a>
                  ))}
                </div>

                <div className="mt-10 space-y-10 md:space-y-12">
                  {categorizedPages.map(({ category, pages }) => (
                    <section
                      key={category}
                      id={category.toLowerCase().replace(/\s+/g, "-")}
                      className="border border-[#2b2b2b] p-6 md:p-8"
                    >
                      <div className="mb-6 flex flex-col gap-3 border-b border-[#1f1f1f] pb-5 md:flex-row md:items-end md:justify-between">
                        <h2 className="text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">{category}</h2>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#7d7d7d]">{pages.length} guides</p>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        {pages.map((page) => (
                          <article
                            key={page.slug}
                            className="border border-[#2b2b2b] p-6 transition-colors hover:border-[#63a7ff]"
                          >
                            <p className="eyebrow text-[#63a7ff]">{page.heroLabel}</p>
                            <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-white">{page.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-[#b5b5b5] md:text-base">{page.description}</p>
                            <div className="mt-5 flex items-center gap-3 overflow-hidden">
                              <Link href={`/${page.slug}`} className="outlined-button inline-flex shrink-0 px-4 py-2 text-sm">
                                Read guide
                              </Link>
                              <span className="min-w-0 truncate text-xs uppercase tracking-[0.18em] text-[#7d7d7d]" title={page.keyword}>
                                {page.keyword}
                              </span>
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
