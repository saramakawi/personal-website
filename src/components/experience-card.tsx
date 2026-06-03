import type { Experience } from '../types/resume';

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="border-l-2 border-gray-200 pl-6 pb-10 relative">
      <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.75 top-1.5" />
      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
        <h3 className="text-xl font-semibold text-gray-900">
          {exp.role}
        </h3>
        <span className="text-sm text-gray-500">
          {exp.startDate} – {exp.endDate}
        </span>
      </div>
      <p className="text-blue-600 font-medium mb-3">
        {exp.company} · {exp.location}
      </p>
      <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 mb-3">
        {exp.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}