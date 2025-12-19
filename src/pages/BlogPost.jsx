import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import AffiliateButton from '../components/AffiliateButton';

const blogContent = {
    "low-metabolism": {
        title: "Low Metabolism? Here’s Why You’re Not Losing Weight",
        author: "Smart Health USA",
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: "6 min read",
        category: "Weight Loss",
        excerpt: "You’re eating right and exercising, but the scale won't budge. Discover the hidden cellular reasons behind weight loss resistance.",
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">You’re eating right and exercising, but the scale won't budge. Discover the hidden cellular reasons why your metabolism might be stuck in neutral.</p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The "Sleeping" Metabolism</h2>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    It's a frustrating common scenario: you cut calories, you hit the gym, but the weight stays put. Often, the culprit isn't your willpower—it's your mitochondria. These tiny power plants within your cells are responsible for converting food into energy. When they aren't functioning optimally, your body stores fuel as fat instead of burning it.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Signs of Metabolic Slowdown</h2>
                <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
                    <li>Cold hands and feet</li>
                    <li>Afternoon energy crashes</li>
                    <li>Difficulty concentrating (brain fog)</li>
                    <li>Stubborn belly fat</li>
                </ul>

                <div className="bg-brand-light/30 p-8 rounded-2xl my-10 border border-brand-teal/20">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Want to jumpstart your metabolism?</h3>
                    <p className="mb-6 text-slate-600">Discover the natural way to support your mitochondrial health.</p>
                    <AffiliateButton hopLink="https://627fegpgqjsezmzjyiui5h5xbk.hop.clickbank.net/?&traffic_source=blog&traffic_type=seo&campaign=native_ad&creative=in_post" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">How to Wake It Up</h2>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    The good news is that you can support your metabolic health through lifestyle changes. Prioritizing sleep, managing stress to lower cortisol, and eating nutrient-dense foods rich in antioxidants are key steps.
                </p>
            </>
        )
    },
    "mitochondrial-health": {
        title: "5 Foods That Naturally Support Mitochondrial Health",
        author: "Smart Health USA",
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: "5 min read",
        category: "Nutrition",
        excerpt: "Add these nutrient-dense foods to your diet to help your cells produce cleaner, more efficient energy.",
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">Your cells are hungry for the right fuel. Add these nutrient-dense foods to your diet to help them produce cleaner, more efficient energy.</p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">1. Avocados</h2>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    Rich in healthy fats, avocados support the structural integrity of the mitochondrial membrane, which is crucial for energy production.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">2. Blueberries</h2>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    Packed with antioxidants, blueberries help neutralize the free radicals that are naturally produced during energy creation, protecting your cells from damage.
                </p>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-brand-teal my-8">
                    <p className="italic text-slate-700">"Food is information for your cells. Choose the message you want to send."</p>
                </div>

                <p className="mb-6 text-slate-600 leading-relaxed">
                    Incorporating these foods into your daily routine is a simple, delicious way to tell your body it's safe to burn energy.
                </p>
                <div className="mt-8">
                    <AffiliateButton hopLink="https://627fegpgqjsezmzjyiui5h5xbk.hop.clickbank.net/?&traffic_source=blog&traffic_type=seo&campaign=native_ad&creative=in_post" />
                </div>
            </>
        )
    },
    "intermittent-fasting": {
        title: "The Truth About Intermittent Fasting and Energy",
        author: "Dr. Sarah Mitchell",
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: "7 min read",
        category: "Lifestyle",
        excerpt: "Is skipping breakfast actually good for your energy levels? Science suggests it might be beneficial for some.",
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">Is skipping breakfast actually good for your energy levels? Science suggests it might be beneficial for metabolic flexibility.</p>
                <p className="mb-6 text-slate-600 leading-relaxed">Intermittent fasting isn't just about cutting calories; it's about giving your digestive system a rest and allowing your body to switch from burning sugar to burning stored fat.</p>
                {/* Placeholder for future affiliate link or ad placement */}
            </>
        )
    },
    "stress-metabolism": {
        title: "Stress and Metabolism: The Cortisol Connection",
        author: "Smart Health USA",
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: "4 min read",
        category: "Health",
        excerpt: "Chronic stress doesn't just feel bad—it can physically alter how your body processes and stores fat.",
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">Chronic stress doesn't just feel bad—it can physically alter how your body processes and stores fat.</p>
                <p className="mb-6 text-slate-600 leading-relaxed">When cortisol levels are chronically high, your body enters 'survival mode,' holding onto fat stores, particularly around the midsection. Managing stress is a metabolic necessity.</p>
                {/* Placeholder for future affiliate link or ad placement */}
            </>
        )
    },
    "slow-metabolism-signs": {
        title: "Why Do I Feel So Tired? 5 Hidden Signs of Slow Metabolism",
        author: "Smart Health USA",
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: "8 min read",
        category: "Metabolic Health",
        excerpt: "Fatigue, weight gain, and brain fog aren't just 'normal aging.' They could be signs your metabolic engine needs a tune-up.",
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">
                    You wake up tired. You struggle through the afternoon slump. And despite "eating healthy," the scale numbers refuse to drop. If this sounds like your daily reality, you are not alone—and it might not be all in your head.
                </p>

                <p className="mb-6 text-slate-600 leading-relaxed">
                    Many of us blame our lack of willpower or "getting older" for these symptoms. But often, the real culprit is a hidden slowdown in your <strong>metabolism</strong>. The good news? It’s not a life sentence. Understanding the signs is the first step toward fixing them.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">What Metabolism Really Means</h2>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    Metabolism isn't just about weight loss. It is the sum of every chemical reaction in your body that keeps you alive. Think of it as your body's internal engine.
                </p>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    When your engine is running smoothly, it efficiently converts food (fuel) into energy (motion and heat). when it's sluggish, that fuel sits in the tank—or worse, gets stored as fat—while your engine sputters, leaving you exhausted.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Why Metabolism Slows Down</h2>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    It’s true that metabolism naturally dips slightly as we age, largely due to muscle loss. However, lifestyle factors often play a much bigger role than age itself.
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
                    <li><strong>Yo-yo dieting:</strong> Drastic calorie restriction teaches your body to hoard energy.</li>
                    <li><strong>Sedentary lifestyle:</strong> Sitting for long periods tells your body it doesn't need to produce much energy.</li>
                    <li><strong>Poor sleep:</strong> Lack of rest disrupts hormones that regulate hunger and energy.</li>
                    <li><strong>Chronic stress:</strong> High cortisol levels can signal your body to store fat "just in case."</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">5 Common Signs of Slow Metabolism</h2>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    How do you know if your metabolic engine is struggling? Here are the most common red flags.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mb-2">1. Persistent Fatigue</h3>
                <p className="mb-4 text-slate-600 leading-relaxed">
                    If you feel tired even after a full night's sleep, your cells might be struggling to produce ATP (energy).
                </p>

                <h3 className="text-xl font-bold text-slate-800 mb-2">2. Unexplained Weight Gain</h3>
                <p className="mb-4 text-slate-600 leading-relaxed">
                    Gaining weight without changing your diet is a classic sign that your body is burning fewer calories at rest.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mb-2">3. Cold Hands and Feet</h3>
                <p className="mb-4 text-slate-600 leading-relaxed">
                    Heat is a byproduct of metabolism. If your body temperature runs low, your engine might be idling too slow.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mb-2">4. Sugar Cravings</h3>
                <p className="mb-4 text-slate-600 leading-relaxed">
                    When your body can't efficiently access stored fat for energy, it screams for quick fuel: sugar and carbs.
                </p>

                <h3 className="text-xl font-bold text-slate-800 mb-2">5. Brain Fog</h3>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    Your brain is an energy hog. If metabolic supply drops, you may experience difficulty focusing or memory slips.
                </p>

                <div className="bg-brand-light/30 p-8 rounded-2xl my-10 border border-brand-teal/20">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Does this sound familiar?</h3>
                    <p className="mb-6 text-slate-600">You don't have to accept fatigue as your "new normal." There are natural ways to support your body's energy production.</p>
                    <AffiliateButton hopLink="https://627fegpgqjsezmzjyiui5h5xbk.hop.clickbank.net/?&traffic_source=blog&traffic_type=seo&campaign=native_ad&creative=in_post" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">What Science Says</h2>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    Research suggests that the health of your <strong>mitochondria</strong> is central to your metabolic rate. These components of your cells are responsible for energy production. When mitochondria are damaged by oxidative stress (from poor diet or toxins), metabolic function declines.
                </p>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    The goal isn't just to "speed up" metabolism, but to make it more <em>flexible</em>—meaning your body can easily switch between burning food and burning stored fat.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Simple Daily Habits That Support Metabolism</h2>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    You don't need extreme measures. Small, consistent changes often yield the best results over time.
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
                    <li><strong>Prioritize Protein:</strong> Protein requires more energy to digest than fats or carbs, giving your metabolism a small boost.</li>
                    <li><strong>Move Often:</strong> Non-exercise activity (like walking or standing) adds up significantly.</li>
                    <li><strong>Hydrate:</strong> Even mild dehydration can stall metabolic processes.</li>
                    <li><strong>Sleep Well:</strong> Aim for 7-8 hours of quality sleep to regulate metabolic hormones.</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Common Myths You Might Believe</h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                    <strong>Myth:</strong> "Eating small frequent meals boosts metabolism."<br />
                    <strong>Fact:</strong> Total food quality and quantity matter more than frequency. Constant snacking can actually keep insulin levels high, blocking fat burn.
                </p>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    <strong>Myth:</strong> "You can't change your metabolism."<br />
                    <strong>Fact:</strong> While genetics play a role, your lifestyle choices have a powerful influence on how your genes express themselves.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Final Thoughts</h2>
                <p className="mb-6 text-slate-600 leading-relaxed">
                    If you recognize the signs of a slow metabolism, take a deep breath. Your body is resilient. By nourishing it with the right foods, rest, and movement, you can help reignite your internal engine. Be patient with yourself—sustainable health is a marathon, not a sprint.
                </p>

                <hr className="my-8 border-slate-200" />
                <p className="text-sm text-slate-500 italic">
                    <strong>Disclaimer:</strong> This article is for educational purposes only and does not provide medical advice. Individual results may vary. Always consult with a healthcare provider before making significant changes to your diet or lifestyle.
                </p>
            </>
        )
    }
};

export default function BlogPost() {
    const { slug } = useParams();
    const post = blogContent[slug];

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <article className="bg-white min-h-screen pb-20">
            <Helmet>
                <title>{post.title} | Smart Health USA</title>
                <meta name="description" content={post.excerpt || `Read about ${post.title} on Smart Health USA. Learn more about metabolic health and natural wellness.`} />
                <link rel="canonical" href={`https://smarthealthusa.netlify.app/blog/${slug}`} />
            </Helmet>

            {/* Header */}
            <div className="bg-slate-50 py-16 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-teal mb-8 transition-colors font-medium">
                        <ArrowLeft size={20} /> Back to Blog
                    </Link>

                    <div className="flex items-center gap-4 text-sm mb-6">
                        <span className="bg-brand-light text-brand-dark px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wide">
                            {post.category}
                        </span>
                        <span className="text-slate-500 flex items-center gap-1.5">
                            <Calendar size={14} /> {post.date}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-slate-500 text-sm font-medium border-t border-slate-200 pt-6">
                        <span className="flex items-center gap-2">
                            <div className="bg-brand-teal text-white p-1 rounded-full">
                                <User size={12} />
                            </div>
                            {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={16} />
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <div className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-brand-teal mx-auto">
                    {post.content}
                </div>

                <div className="mt-16 pt-8 border-t border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4">Share this article</h4>
                    <div className="flex gap-4">
                        <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Facebook</button>
                        <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Twitter</button>
                        <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Pinterest</button>
                    </div>
                </div>
            </div>
        </article>
    );
}
