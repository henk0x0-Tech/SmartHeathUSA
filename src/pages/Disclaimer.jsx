import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Disclaimer | Smart Health USA</title>
                <meta name="description" content="Medical disclaimer and earnings disclaimer for Smart Health USA." />
                <link rel="canonical" href="https://smarthealthusa.netlify.app/disclaimer" />
            </Helmet>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Disclaimer</h1>

                <div className="prose prose-slate max-w-none">
                    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Medical Disclaimer</h2>
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
                        <p className="font-bold text-red-700 m-0">
                            This website provides educational information only and does not offer medical advice.
                        </p>
                    </div>
                    <p>
                        The information, including but not limited to, text, graphics, images and other material contained on this website are for informational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of your physician or other qualified health care provider with any questions you may have regarding a medical condition or treatment and before undertaking a new health care regimen, and never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Affiliate Disclaimer</h2>
                    <p>
                        This website contains endorsement, recommendation, or testimonial information, and links to other websites (affiliate links) in which Smart Health USA may receive a small commission or other compensation for the sale of products or services. This comes at no extra cost to you.
                    </p>
                    <p>
                        We only recommend products or services that we believe will add value to our readers. However, it is your responsibility to verify any claims, statistics, or other representation about a product or service with the manufacturer or provider.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Earnings Disclaimer</h2>
                    <p>
                        Every effort has been made to accurately represent the products and their potential. However, there is no guarantee that you will earn any money using the techniques and ideas in these materials. Examples in these materials are not to be interpreted as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using our product, ideas and techniques.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Content Validity</h2>
                    <p>
                        The content on this website is dynamic and may change over time. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                    </p>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <Link to="/" className="text-brand-teal font-bold hover:underline">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
