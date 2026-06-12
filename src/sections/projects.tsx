// This is the Projects section showcasing portfolio work in a card grid.

import { projects } from '../data/resume';
import ProjectCard from '../components/project-card';

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <div className="glass-panel p-8 md:p-12">
        <h2 className="section-heading">
          <span className="accent">05.</span> Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}