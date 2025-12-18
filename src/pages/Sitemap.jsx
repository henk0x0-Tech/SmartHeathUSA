import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Sitemap() {
    return (
        <>
            <Helmet>
                <title>Sitemap - Smart Health USA</title>
                <meta name="description" content="HTML Sitemap for Smart Health USA - Quickly navigate to all our pages." />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <main className="container mx-auto px-4 py-16 max-w-2xl">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">Sitemap</h1>
                <ul className="space-y-4 list-disc pl-5">
                    <li>
                        <Link to="/" className="text-lg text-brand-teal hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="text-lg text-brand-teal hover:underline">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog/low-metabolism" className="text-lg text-brand-teal hover:underline">
                            Low Metabolism Guide
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-lg text-brand-teal hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-lg text-brand-teal hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    );
}
