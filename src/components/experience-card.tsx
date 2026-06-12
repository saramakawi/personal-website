import type { Experience } from '../types/resume';

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
      <div
        className="pl-6 pb-10 relative"
        style={{ borderLeft: '2px solid rgb(var(--border-soft) / 0.25)' }}
      >
      <div
        className="absolute w-3 h-3 rounded-full -left-1.75 top-1.5 bg-(--accent)"
      />
      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
        <h3 className="text-xl font-semibold">
          {exp.role}
        </h3>
        <span className="text-sm">
          {exp.startDate} – {exp.endDate}
        </span>
      </div>
      <p className="accent font-medium mb-3">
        {exp.company} · {exp.location}
      </p>
      <ul className="text-soft list-disc list-outside ml-5 space-y-2 mb-3">
        {exp.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="tech-pill"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}