import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './sections/hero';
import About from './sections/about';
import Experience from './sections/experience';
import Education from './sections/education';
import Skills from './sections/skills';
import Projects from './sections/projects.tsx';
import Contact from './sections/contact';

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
