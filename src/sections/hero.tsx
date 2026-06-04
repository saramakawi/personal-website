import { Github } from 'lucide-react';
import { profile } from '../data/resume';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6"
    >
      <p className="text-blue-600 font-medium mb-4">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
        {profile.name}
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mb-6">
        {profile.title}
      </h2>
      <p className="max-w-xl text-lg text-gray-600 mb-8">
        {profile.tagline}
      </p>

      <div className="flex gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Get in touch
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center gap-2"
        >
          <Github size={20} /> GitHub
        </a>
      </div>
    </section>
  );
}