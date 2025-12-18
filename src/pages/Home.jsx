import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
          <div className="container mx-auto px-4 text-center mt-8">
            <Link to="/blog" className="text-slate-900 font-bold hover:text-brand-teal transition-colors border-b-2 border-brand-teal pb-1">
              Read our latest health articles
            </Link>
          </div>
        </section>

        {/* PRODUCT / GUIDE */}
        <section className="w-full py-16">
          <SoftProductSection />
        </section>

        {/* TRUST & TRANSPARENCY */}
        <section className="w-full bg-slate-50 py-16">
          <TrustTransparency />
        </section>

        {/* SEO INTERNAL LINKS */}
        <section className="w-full py-4 bg-white text-center border-t border-slate-100">
          <div className="container mx-auto px-4 space-x-6 text-sm text-slate-500">
            <Link to="/blog" className="hover:text-slate-900 transition-colors">Read our health blog</Link>
            <Link to="/blog/low-metabolism" className="hover:text-slate-900 transition-colors">Low Metabolism Guide</Link>
          </div>
        </section>

      </main>
    </>
  );
}

