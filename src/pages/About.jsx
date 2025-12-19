import { Helmet } from 'react-helmet-async';

export default function About() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>About Smart Health USA – Our Mission</title>
                <meta name="description" content="Learn about Smart Health USA and our mission to provide science-based wellness education." />
                <link rel="canonical" href="https://smarthealthusa.netlify.app/about" />
            </Helmet>

            <div className="container mx-auto px-4 py-20 max-w-3xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">About Smart Health USA</h1>
                <article className="prose prose-lg prose-slate mx-auto">
                    <p>
                        Welcome to Smart Health USA.
                    </p>
                    <p>
                        We are an independent educational website focused on providing clear, research-informed information about one of the most misunderstood aspects of health: metabolism.
                    </p>
                    <p>
                        In a world filled with crash diets, extreme routines, and quick-fix claims, we believe people deserve calm, balanced explanations they can actually understand. Our content explores how everyday factors like nutrition, sleep, stress, and lifestyle habits influence metabolic and energy health, with a special focus on mitochondrial function.
                    </p>

                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to help readers better understand their bodies so they can make more informed, sustainable health decisions over time.
                        We focus on education first — not trends, fear, or unrealistic promises.
                    </p>

                    <h2>Why Trust Smart Health USA?</h2>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <strong>Research-Focused</strong><br />
                            We prioritize evidence-based information and established scientific understanding over viral trends.
                        </li>
                        <li>
                            <strong>Transparency</strong><br />
                            Some pages may include references to external resources or affiliate partnerships. These never influence our educational content, and readers are always free to make their own choices.
                        </li>
                        <li>
                            <strong>Balanced Perspective</strong><br />
                            We believe long-term health is supported by consistency, realistic habits, and understanding — not extremes.
                        </li>
                    </ul>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-8 not-prose">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Important Note</h3>
                        <p className="text-slate-600 mb-4">
                            Smart Health USA is an educational resource.
                        </p>
                        <p className="text-slate-600">
                            We do not provide medical advice, diagnosis, or treatment.
                            Information shared on this site is intended for general knowledge only.
                            For personal health concerns, readers should consult a qualified health professional.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
}
