import { experiences } from '../data/resume';
import ExperienceCard from '../components/experience-card';

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12">
        <span className="text-blue-600 dark:text-blue-400">02.</span> Experience
      </h2>
      <div>
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </div>
    </section>
  );
}