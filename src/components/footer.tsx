import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/resume';

export default function Footer() {
  return (
    <footer className="border-t border-gray-400 dark:border-gray-700 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="text-gray-400 hover:text-teal-500" />
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="text-gray-400 hover:text-teal-500" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail className="text-gray-400 hover:text-teal-500" />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          Built with React, TypeScript &amp; Tailwind · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}