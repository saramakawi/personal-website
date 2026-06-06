import { Github } from 'lucide-react';
import { profile } from '../data/resume';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6"
    >
      <p className="text-teal-400 dark:text-teal-500 font-medium mb-4">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white dark:text-gray-100 mb-4">
        {profile.name}
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-300 dark:text-gray-400 mb-6">
        {profile.title}
      </h2>
      <p className="max-w-xl text-lg text-gray-300 dark:text-gray-400 mb-8">
        {profile.tagline}
      </p>

      <div className="flex gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-teal-400 dark:bg-teal-500 text-gray-900 dark:text-gray-900 rounded-lg font-medium hover:bg-teal-500 dark:hover:bg-teal-600 transition-colors"
        >
          Get in touch
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-200 dark:text-gray-200 rounded-lg font-medium hover:border-teal-500 hover:text-teal-500 transition-colors flex items-center gap-2"
        >
          <Github size={20} /> GitHub
        </a>
      </div>
    </section>
  );
}