import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Approach from './pages/Approach';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      {/* Skip to main content — visually hidden until focused */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <main id="main-content" className="min-h-screen flex items-center justify-center pt-32">
              <div className="text-center px-6">
                <h1
                  className="text-8xl font-black text-amber-400 mb-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  404
                </h1>
                <p className="text-neutral-400 mb-8">This page doesn't exist yet.</p>
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-amber-400 text-black font-bold text-sm rounded-sm hover:bg-amber-300 transition-colors"
                >
                  Back to Home
                </a>
              </div>
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
