import { Contribute } from "@/app/components/Contribute";
import { DemoVideo } from "@/app/components/DemoVideo";
import { FeaturesGrid } from "@/app/components/FeaturesGrid";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { Navbar } from "@/app/components/Navbar";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main className="min-h-screen pt-20 md:pt-24">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8 lg:px-12">
          <Hero />

          <div className="mt-8 divide-y divide-[#1f1f1f] border-y border-[#1f1f1f] md:mt-12">
            <DemoVideo />
            <HowItWorks />
            <FeaturesGrid />
            <Contribute />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
