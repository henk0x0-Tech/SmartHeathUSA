import { useEffect, useState } from 'react';

export default function AdSenseLoader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Function to load the script
        const loadAdSense = () => {
            if (document.getElementById('adsense-script')) return;

            const script = document.createElement('script');
            script.id = 'adsense-script';
            script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6088779625105897";
            script.async = true;
            script.crossOrigin = "anonymous";

            script.onload = () => {
                setLoaded(true);
            };

            document.head.appendChild(script);
        };

        // Delay loading by 3.5 seconds to ensure LCP/TTI are not affected
        const timer = setTimeout(() => {
            // Also check for idle time if supported, otherwise just run
            if ('requestIdleCallback' in window) {
                requestIdleCallback(() => loadAdSense());
            } else {
                loadAdSense();
            }
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return null; // This component renders nothing visual
}
