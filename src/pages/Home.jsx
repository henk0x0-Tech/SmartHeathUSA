import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Smart Health USA – Science-Based Wellness</title>
        <meta
          name="description"
          content="Smart Health USA provides evidence-based wellness, metabolism, fitness, and health education for USA readers."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://smarthealthusa.netlify.app/" />
      </Helmet>

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Smart Health USA
          </h1>

          <h2 className="text-2xl font-semibold text-slate-700 mb-6">
            Welcome to Smart Health USA
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl">
            Empowering you with science-backed knowledge about metabolism,
            mitochondrial health, and sustainable weight management.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-8">
            <a
              href="/start-here"
              className="inline-block px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition"
            >
              Start Your Health Journey
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
