import { Zap, Activity, Scale } from 'lucide-react';

export default function EducationSection() {
    const cards = [
        {
            icon: <Zap size={32} className="text-brand-dark" />,
            title: "Low Energy Levels",
            description: "Feeling tired despite sleeping well? Your mitochondria might be struggling to produce enough ATP energy."
        },
        {
            icon: <Scale size={32} className="text-brand-teal" />,
            title: "Unexplained Weight Gain",
            description: "A slow metabolism makes it harder to burn fat, leading to gradual weight gain even with a steady diet."
        },
        {
            icon: <Activity size={32} className="text-blue-500" />,
            title: "Slow Fat Burn",
            description: "Metabolic flexibility decreases with age, making your body reliant on sugar instead of burning stored fat."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why Does Metabolism Slow Down?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        It’s not just about age. It’s about your <span className="text-brand-dark font-medium">cells</span>. The mitochondria are the "power plants" of your cells, and when their efficiency drops, so does your metabolic rate.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-brand-bg hover:bg-white border border-transparent hover:border-brand-light transition-all duration-300 hover:shadow-xl group cursor-default">
                            <div className="mb-6 p-4 bg-white rounded-2xl inline-block shadow-sm group-hover:scale-110 group-hover:shadow-md transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
