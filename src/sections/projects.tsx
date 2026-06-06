import { projects } from '../data/resume';
import ProjectCard from '../components/project-card';

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <div className="rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-8">
          <span className="text-teal-400">05.</span> Projects
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