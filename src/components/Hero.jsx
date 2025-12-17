import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative bg-brand-light/30 py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                    Unlock Your <span className="text-brand-teal border-b-4 border-brand-teal/20 pb-1">
                        Metabolic Power
                    </span> Naturally
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Burn more calories, boost energy, and feel better — without extreme dieting or exhaustion. Discover the science of mitochondrial health today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        to="/guide"
                        className="inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-tealDark text-white text-lg font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl shadow-brand-teal/20"
                    >
                        Learn How Metabolism Works
                        <ArrowRight size={20} />
                    </Link>
                    <Link
                        to="/blog"
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-lg font-semibold px-8 py-4 rounded-full transition-all hover:shadow-md"
                    >
                        Read the Blog
                    </Link>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium">
                    <span>Science-based information</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>No extreme diets</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>Educational content only</span>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-light rounded-full blur-3xl mix-blend-multiply filter animate-blob"></div>
                <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-40 left-20 w-[400px] h-[400px] bg-sky-100 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-4000"></div>
            </div>
        </section>
    );
}
