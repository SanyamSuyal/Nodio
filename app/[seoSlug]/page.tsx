import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/app/components/SeoLandingPage";
import { getSeoPageBySlug, seoPages } from "@/lib/seo-pages";

type SeoPageProps = {
  params: {
    seoSlug: string;
  };
};

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://nodio.me"
).replace(/\/+$/, "");

export function generateStaticParams() {
  return seoPages.map((page) => ({ seoSlug: page.slug }));
}

export function generateMetadata({ params }: SeoPageProps): Metadata {
  const page = getSeoPageBySlug(params.seoSlug);

  if (!page) {
    return {
      title: "Nodio",
    };
  }

  const url = `${siteUrl}/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: [
      page.keyword,
      "distributed storage",
      "edge storage",
      "encrypted cloud storage",
      "nodio",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "Nodio",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default function SeoPage({ params }: SeoPageProps) {
  const page = getSeoPageBySlug(params.seoSlug);

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}