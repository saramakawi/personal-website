import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types/resume';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-700 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-white dark:text-gray-100">{project.name}</h3>
        <div className="flex gap-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
               aria-label="GitHub repository">
              <Github size={20} className="text-gray-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(91,209,196,0.4)] hover:border-teal-400/50" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
               aria-label="Live demo">
              <ExternalLink size={20} className="text-gray-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(91,209,196,0.4)] hover:border-teal-400/50" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-400 dark:text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 bg-teal-700 dark:bg-teal-500 text-teal-400 dark:text-teal-300 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}