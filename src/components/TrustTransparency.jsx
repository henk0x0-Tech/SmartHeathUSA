import { ShieldCheck, Info, FileText } from 'lucide-react';

export default function TrustTransparency() {
    return (
        <section className="py-16 bg-brand-bg text-center border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-3 rounded-full shadow-sm mb-4 text-brand-teal">
                            <Info size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Educational Purpose Only</h3>
                        <p className="text-sm text-slate-600">
                            This website is for informational purposes and does not substitute professional medical advice.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-3 rounded-full shadow-sm mb-4 text-brand-teal">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Results May Vary</h3>
                        <p className="text-sm text-slate-600">
                            Individual results from supplements or lifestyle changes can vary. Consistency is key.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-3 rounded-full shadow-sm mb-4 text-brand-teal">
                            <FileText size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">FTC Disclosure</h3>
                        <p className="text-sm text-slate-600">
                            We may receive a commission if you purchase through our links, supporting our free content.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
