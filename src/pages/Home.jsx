import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import EducationSection from "../components/EducationSection";
import FeaturedBlog from "../components/FeaturedBlog";
import SoftProductSection from "../components/SoftProductSection";
import TrustTransparency from "../components/TrustTransparency";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Smart Health USA – Unlock Your Metabolic Power Naturally</title>
        <meta
          name="description"
          content="Smart Health USA helps you improve metabolism, mitochondrial health, and energy naturally with science-based education — no extreme dieting."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://smarthealthusa.netlify.app/"
        />
      </Helmet>

      {/* MAIN PAGE WRAPPER */}
      <main className="min-h-screen bg-white">

        {/* HERO */}
        <section className="w-full">
          <Hero />
        </section>

        {/* EDUCATION */}
        <section className="w-full py-16">
          <EducationSection />
        </section>

        {/* FEATURED BLOG */}
        <section className="w-full bg-slate-50 py-16">
          <FeaturedBlog />
        </section>

        {/* PRODUCT / GUIDE */}
        <section className="w-full py-16">
          <SoftProductSection />
        </section>

        {/* TRUST & TRANSPARENCY */}
        <section className="w-full bg-slate-50 py-16">
          <TrustTransparency />
        </section>

      </main>
    </>
  );
}

