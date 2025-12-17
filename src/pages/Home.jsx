import Hero from '../components/Hero';
import EducationSection from '../components/EducationSection';
import FeaturedBlog from '../components/FeaturedBlog';
import SoftProductSection from '../components/SoftProductSection';
import TrustTransparency from '../components/TrustTransparency';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Smart Health USA | Unlock Your Metabolic Power Naturally</title>
                <meta name="description" content="Discover how to burn more calories and boost energy naturally. Learn about mitochondrial health and metabolic flexibility without extreme dieting." />
            </Helmet>
            <Hero />
            <EducationSection />
            <FeaturedBlog />
            <SoftProductSection />
            <TrustTransparency />
        </>
    );
}
