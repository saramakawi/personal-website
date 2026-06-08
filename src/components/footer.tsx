import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/resume';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className= "icon-hover" />
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="icon-hover" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail className="icon-hover" />
          </a>
        </div>
        <p className="text-sm">
          Sara Makawi · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}