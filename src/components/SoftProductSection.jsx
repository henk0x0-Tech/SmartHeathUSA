import { CheckCircle } from 'lucide-react';
import AffiliateButton from './AffiliateButton';

export default function SoftProductSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-light/20 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-3xl border border-brand-light/50 p-8 md:p-14 text-center shadow-lg">
                    <span className="inline-block bg-brand-light text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        Sponsored Recommendation
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                        Supporting Metabolism the Smart Way
                    </h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        While lifestyle changes are key, certain nutrients can help support mitochondrial function. We recommend exploring <strong className="text-brand-dark">Mitolyn</strong>, a supplement designed to support healthy metabolic activity using natural ingredients.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 max-w-lg mx-auto mb-12 text-left bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        {[
                            "Supports mitochondrial health",
                            "Natural ingredients",
                            "Manufactured in the USA",
                            "GMP Certified Facility"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle size={20} className="text-brand-teal flex-shrink-0" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <AffiliateButton
                        hopLink="https://627fegpgqjsezmzjyiui5h5xbk.hop.clickbank.net/?&traffic_source=blog&traffic_type=seo&campaign=homepage&creative=cta"
                    />

                    <p className="mt-6 text-xs text-slate-400 max-w-md mx-auto">
                        *Individual results may vary. Always consult with a physician before starting any new supplement. This link is an affiliate link.
                    </p>
                </div>
            </div>
        </section>
    );
}
