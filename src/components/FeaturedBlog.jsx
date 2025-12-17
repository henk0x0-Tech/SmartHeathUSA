import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FeaturedBlog() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row border border-slate-100">
                    <div className="md:w-1/2 min-h-[300px] md:h-auto bg-gradient-to-br from-brand-dark to-brand-teal relative flex items-center justify-center p-8 text-white">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-tr-full"></div>

                        <div className="text-center relative z-10">
                            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                <h3 className="text-3xl font-bold mb-2">Metabolism Insight</h3>
                                <p className="opacity-90 font-medium">The Science of Fat Loss</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-brand-teal font-bold uppercase tracking-wider text-xs mb-3">Featured Article</span>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 leading-tight">Low Metabolism? Here’s Why You’re Not Losing Weight</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            You’re eating right and exercising, but the scale won't budge. The culprit might be hidden deep within your cells. Learn about the 'sleeping' metabolism phenomenon.
                        </p>
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-teal transition-colors group text-lg"
                        >
                            Read Full Article
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
