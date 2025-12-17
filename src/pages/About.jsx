import { Helmet } from 'react-helmet-async';

export default function About() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>About Us | Smart Health USA</title>
                <meta name="description" content="Learn about Smart Health USA and our mission to educate about metabolic health." />
            </Helmet>

            <div className="container mx-auto px-4 py-20 max-w-3xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">About Smart Health USA</h1>
                <article className="prose prose-lg prose-slate mx-auto">
                    <p>
                        Welcome to Smart Health USA. We are dedicated to providing clear, science-backed information about one of the most misunderstood aspects of health: <strong>your metabolism</strong>.
                    </p>
                    <p>
                        In a world filled with crash diets and "magic pills," we believe in a different approach. We focus on the root cause of energy depletion and weight struggles—mitochondrial health.
                    </p>
                    <h2>Our Mission</h2>
                    <p>
                        To empower 1 million Americans to take control of their metabolic health through education, lifestyle changes, and smart nutritional support.
                    </p>
                    <h2>Why Trust Us?</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Research-Backed:</strong> We prioritize science over trends.</li>
                        <li><strong>Transparency:</strong> We are clear about affiliate relationships and results.</li>
                        <li><strong>Holistic View:</strong> We believe true health comes from a balance of diet, sleep, stress management, and nutrient support.</li>
                    </ul>
                </article>
            </div>
        </div>
    );
}
