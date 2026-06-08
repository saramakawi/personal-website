import { experiences } from '../data/resume';
import ExperienceCard from '../components/experience-card';

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <div className="glass-panel p-8 md:p-12">
        <h2 className="font-display text-3xl font-bold mb-8">
          <span className="accent">02.</span> Experience
        </h2>
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}