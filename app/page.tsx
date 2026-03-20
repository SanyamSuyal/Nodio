import { Contribute } from "@/app/components/Contribute";
import { DemoVideo } from "@/app/components/DemoVideo";
import { FeaturesGrid } from "@/app/components/FeaturesGrid";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { Navbar } from "@/app/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8 lg:px-12">
          <Hero />
          <DemoVideo />
          <HowItWorks />
          <FeaturesGrid />
          <Contribute />
        </div>
      </main>
      <Footer />
    </>
  );
}
