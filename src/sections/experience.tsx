// This is the Experience section that renders a timeline of past roles.

import { experiences } from '../data/resume';
import ExperienceCard from '../components/experience-card';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="glass-panel p-8 md:p-12">
        <h2 className="section-heading">
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