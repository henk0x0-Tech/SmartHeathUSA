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
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">Is skipping breakfast actually good for your energy levels? Science suggests it might be beneficial for metabolic flexibility.</p>
                <p className="mb-6 text-slate-600 leading-relaxed">Intermittent fasting isn't just about cutting calories; it's about giving your digestive system a rest and allowing your body to switch from burning sugar to burning stored fat.</p>
            </>
        )
    },
    "stress-metabolism": {
        title: "Stress and Metabolism: The Cortisol Connection",
        author: "Smart Health USA",
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: "4 min read",
        category: "Health",
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">Chronic stress doesn't just feel bad—it can physically alter how your body processes and stores fat.</p>
                <p className="mb-6 text-slate-600 leading-relaxed">When cortisol levels are chronically high, your body enters 'survival mode,' holding onto fat stores, particularly around the midsection. Managing stress is a metabolic necessity.</p>
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
                <meta name="description" content={`Read about ${post.title} on Smart Health USA.`} />
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
