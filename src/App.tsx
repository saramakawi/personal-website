// This is the root component that composes all sections and renders the full page layout.

import Navbar from './components/navbar';
import Footer from './components/footer';
import Starfield from './components/starfield';
import Hero from './sections/hero';
import About from './sections/about';
import Experience from './sections/experience';
import Education from './sections/education';
import Skills from './sections/skills';
import Projects from './sections/projects.tsx';
import Contact from './sections/contact';
import Reveal from './components/reveal.tsx';

function App() {
  return (
    <div className="min-h-screen">
      <div className="celestial-bg" />
      <div className="fixed inset-0 z-[-15] theme-overlay" />
      <div className="grain-overlay" />
      <Starfield />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
