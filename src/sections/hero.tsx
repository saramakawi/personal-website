import { Github } from 'lucide-react';
import { profile } from '../data/resume';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6"
    >
      <p className="accent font-medium mb-4">Hi, my name is</p>
      <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
        {profile.name}
      </h1>
      <h2 className="text-soft font-display text-3xl md:text-5xl font-bold mb-6">
        {profile.title}
      </h2>
      <p className="max-w-xl text-lg mb-8">
        {profile.tagline}
      </p>

      <div className="flex gap-4">
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg font-medium transition-all hover:opacity-80"
          style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
        >
          Get in touch
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 glass-panel font-medium transition-all icon-hover flex items-center gap-2"
          style={{ borderRadius: '0.5rem' }}
        >
          <Github size={20} /> GitHub
        </a>
      </div>
    </section>
  );
}