import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';

export default function Blog() {
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const posts = [
        {
            id: 1,
            slug: "low-metabolism",
            title: "Low Metabolism? Here’s Why You’re Not Losing Weight",
            excerpt: "You’re eating right and exercising, but the scale won't budge. Discover the hidden cellular reasons behind weight loss resistance.",
            category: "Weight Loss",
            date: currentDate,
            author: "Smart Health USA",
            readTime: "6 min read",
            isFeatured: true
        },
        {
            id: 2,
            slug: "mitochondrial-health",
            title: "5 Foods That Naturally Support Mitochondrial Health",
            excerpt: "Add these nutrient-dense foods to your diet to help your cells produce cleaner, more efficient energy.",
            category: "Nutrition",
            date: currentDate,
            author: "Smart Health USA",
            readTime: "5 min read",
            isFeatured: false
        },
        {
            id: 3,
            slug: "intermittent-fasting",
            title: "The Truth About Intermittent Fasting and Energy",
            excerpt: "Is skipping breakfast actually good for your energy levels? Science suggests it might be beneficial for some.",
            category: "Lifestyle",
            date: currentDate,
            author: "Dr. Sarah Mitchell",
            readTime: "7 min read",
            isFeatured: false
        },
        {
            id: 4,
            slug: "stress-metabolism",
            title: "Stress and Metabolism: The Cortisol Connection",
            excerpt: "Chronic stress doesn't just feel bad—it can physically alter how your body processes and stores fat.",
            category: "Health",
            date: currentDate,
            author: "Smart Health USA",
            readTime: "4 min read",
            isFeatured: false
        }
    ];

    const featuredPost = posts.find(p => p.isFeatured);
    const regularPosts = posts.filter(p => !p.isFeatured);

    return (
        <div className="bg-slate-50 min-h-screen">
            <Helmet>
                <title>Health & Wellness Blog | Smart Health USA</title>
                <meta name="description" content="Read our latest articles on metabolism, mitochondrial health, and sustainable weight management tips." />
            </Helmet>

            {/* Header */}
            <div className="bg-white py-16 shadow-sm mb-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Smart Health Blog</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Latest insights on living a healthier, more energetic life through metabolic science.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-20 max-w-6xl">

                {/* Featured Post Section */}
                {featuredPost && (
                    <div className="mb-12">
                        <Link to={`/blog/${featuredPost.slug}`} className="group block h-full">
                            <article className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col md:flex-row h-full transform hover:-translate-y-1">
                                <div className="md:w-2/5 bg-gradient-to-br from-brand-dark to-brand-teal p-10 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-white/10 w-64 h-64 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                    <div className="relative z-10 text-white text-center">
                                        <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block border border-white/20">
                                            Editor's Choice
                                        </span>
                                        <h3 className="text-2xl font-bold opacity-90">Featured Insight</h3>
                                    </div>
                                </div>
                                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-medium">
                                        <span className="bg-brand-light text-brand-dark px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wide">{featuredPost.category}</span>
                                        <span>{featuredPost.date}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-brand-teal transition-colors leading-tight">{featuredPost.title}</h2>
                                    <p className="text-slate-600 mb-6 text-lg leading-relaxed line-clamp-3">{featuredPost.excerpt}</p>

                                    <div className="flex items-center justify-between mt-auto border-t border-slate-100 pt-6">
                                        <div className="flex items-center gap-4 text-sm text-slate-500">
                                            <span className="flex items-center gap-2"><User size={14} className="text-brand-teal" /> {featuredPost.author}</span>
                                            <span className="flex items-center gap-2"><Clock size={14} className="text-brand-teal" /> {featuredPost.readTime}</span>
                                        </div>
                                        <span className="text-brand-dark font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                            Read Article <ArrowRight size={18} />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </div>
                )}

                {/* Regular Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map(post => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="group block h-full">
                            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col h-full transform hover:-translate-y-1">
                                <div className="flex items-center justify-between text-sm text-slate-500 mb-5">
                                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wide group-hover:bg-brand-light group-hover:text-brand-dark transition-colors">{post.category}</span>
                                    <span>{post.date}</span>
                                </div>

                                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-teal transition-colors leading-snug">{post.title}</h2>
                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed line-clamp-3">{post.excerpt}</p>

                                <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto text-sm text-slate-500">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-medium text-slate-900 flex items-center gap-1.5"><User size={12} className="text-brand-teal" /> {post.author}</span>
                                        <span className="text-[#64748b] flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                                    </div>
                                    <span className="text-brand-teal font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                        Read <ArrowRight size={16} />
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
