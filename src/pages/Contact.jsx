import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = `Contact Request from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        window.location.href = `mailto:contact.smarthealthusa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <Helmet>
                <title>Contact Us | Smart Health USA</title>
                <meta name="description" content="Get in touch with Smart Health USA team." />
            </Helmet>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-sm">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Get in Touch</h2>
                        <p className="text-slate-600 mb-8">
                            Have questions about our content or want to share your success story? We'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-brand-light p-3 rounded-full text-brand-dark">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Email</h3>
                                    <p className="text-slate-600 break-all">contact.smarthealthusa@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-brand-light p-3 rounded-full text-brand-dark">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Location</h3>
                                    <p className="text-slate-600">New York, NY, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors h-32"
                                    placeholder="How can we help?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-brand-teal hover:bg-brand-tealDark text-white font-bold py-3 rounded-lg transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
