import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Privacy Policy | Smart Health USA</title>
                <meta name="description" content="Privacy Policy for Smart Health USA. Learn how we collect, use, and protect your data." />
                <link rel="canonical" href="https://smarthealthusa.netlify.app/privacy" />
            </Helmet>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

                <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">1. Introduction</h2>
                    <p>
                        Welcome to Smart Health USA. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. Data Collection and Cookies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track the activity on our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                    </p>
                    <p>
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">3. Third-Party Advertisements</h2>
                    <p>
                        We may use third-party Service Providers to show advertisements to you to help support and maintain our Service.
                    </p>
                    <p>
                        <strong>Google AdSense & DoubleClick Cookie:</strong> Google, as a third-party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet. You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">4. Analytics</h2>
                    <p>
                        We may use third-party Service providers to monitor and analyze the use of our Service, such as Google Analytics. Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">5. Affiliate Disclosure</h2>
                    <p>
                        This site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include ClickBank and others.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, you can contact us by email: contact.smarthealthusa@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
}
