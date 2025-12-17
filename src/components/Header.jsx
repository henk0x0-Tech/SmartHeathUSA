import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'Metabolism Guide', path: '/guide' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-brand-dark flex items-center gap-2 tracking-tight">
                    <span>Smart Health USA</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-slate-600 hover:text-brand-teal font-medium transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/guide"
                        className="bg-brand-teal hover:bg-brand-tealDark text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md hover:shadow-lg transform active:scale-95 duration-200"
                    >
                        Start Here
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-slate-600 hover:text-brand-teal font-medium p-2 block border-b border-slate-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/guide"
                            className="bg-brand-teal text-white px-4 py-3 rounded-md font-medium text-center mt-2 shadow-sm"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Start Here
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
