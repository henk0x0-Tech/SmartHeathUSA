import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Smart Health USA</h3>
                        <p className="text-sm leading-relaxed max-w-xs text-slate-400">
                            Empowering you with science-backed knowledge about metabolism, mitochondrial health, and sustainable weight management.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="hover:text-brand-teal transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-teal transition-colors text-sm">Contact Us</Link></li>
                            <li><Link to="/guide" className="hover:text-brand-teal transition-colors text-sm">Metabolism Guide</Link></li>
                            <li><Link to="/blog" className="hover:text-brand-teal transition-colors text-sm">Latest Articles</Link></li>
                            <li><Link to="/sitemap" className="hover:text-brand-teal transition-colors text-sm">Sitemap</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link to="/privacy" className="hover:text-brand-teal transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link to="/disclaimer" className="hover:text-brand-teal transition-colors text-sm">Disclaimer</Link></li>
                            <li><span className="text-xs text-slate-500 block mt-2">FTC Disclosure: This site contains affiliate links. We may earn a commission if you make a purchase through our links, at no extra cost to you.</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8 p-6 bg-slate-800 rounded-lg text-xs text-slate-400 text-center max-w-3xl mx-auto">
                    <h5 className="font-bold text-slate-300 mb-2 uppercase tracking-wide text-[10px]">Disclaimer</h5>
                    <p className="leading-relaxed">This website provides educational information only and does not offer medical advice. Results may vary. Always consult with a qualified healthcare professional before making changes to your diet or lifestyle.</p>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Smart Health USA. All rights reserved. Educational Content Only.</p>
                </div>
            </div>
        </footer>
    );
}
