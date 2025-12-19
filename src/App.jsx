import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import MetabolicHealthGuide from './pages/MetabolicHealthGuide';
import MetabolismGuide from './pages/MetabolismGuide';
import About from './pages/About';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import ScrollToTop from './components/ScrollToTop';

import AdSenseLoader from './components/AdSenseLoader';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AdSenseLoader />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/metabolic-health-guide" element={<MetabolicHealthGuide />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/guide" element={<MetabolismGuide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
