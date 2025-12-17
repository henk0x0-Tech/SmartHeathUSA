import { Helmet } from 'react-helmet-async';
import SoftProductSection from '../components/SoftProductSection';

export default function MetabolismGuide() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Metabolism Guide – Smart Health USA</title>
                <meta name="description" content="A beginner-friendly guide explaining metabolism and how to support it naturally." />
                <link rel="canonical" href="https://smarthealthusa.netlify.app/metabolism-guide" />
            </Helmet>

            <div className="bg-brand-light/30 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Metabolism 101: The Ultimate Guide</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Understanding the engine that powers your life.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <article className="prose prose-lg prose-slate mx-auto">
                    <h2>What is Metabolism?</h2>
                    <p>
                        Metabolism isn't just about weight loss. It's the sum of every chemical reaction in your body that keeps you alive.
                        From breathing to repairing cells and digesting food, these processes require energy.
                    </p>

                    <h3>The Role of Mitochondria</h3>
                    <p>
                        Often called the "powerhouse of the cell," mitochondria are responsible for creating energy from the food we eat.
                        When they function efficiently, you feel energetic and burn fat easily. When they struggle, you might feel sluggish
                        and find it hard to manage your weight.
                    </p>

                    <h3>Why Does It Slow Down?</h3>
                    <p>
                        As we age, mitochondrial efficiency naturally declines. Factors like stress, lack of sleep, and processed foods
                        can accelerate this decline. This leads to what many call a "slow metabolism."
                    </p>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8 not-prose">
                        <h4 className="font-bold text-blue-900 mb-2">Did You Know?</h4>
                        <p className="text-blue-800">
                            Muscle tissue burns more calories at rest than fat tissue. Strength training is one of the most effective ways
                            to support metabolic health long-term.
                        </p>
                    </div>

                    <h3>3 Simple Ways to Support Your Metabolism</h3>
                    <ul>
                        <li><strong>Prioritize Protein:</strong> It has a high thermic effect, meaning your body burns more calories digesting it.</li>
                        <li><strong>Get Enough Sleep:</strong> Sleep deprivation can disrupt hormones that regulate hunger and metabolism.</li>
                        <li><strong>Stay Hydrated:</strong> Water is essential for burning calories. Even mild dehydration can slow down metabolism.</li>
                    </ul>
                </article>
            </div>

            <SoftProductSection />
        </div>
    );
}
