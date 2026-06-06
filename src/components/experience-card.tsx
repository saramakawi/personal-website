import type { Experience } from '../types/resume';

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="border-l-2 border-gray-700 dark:border-gray-700 pl-6 pb-10 relative">
      <div className="absolute w-3 h-3 bg-teal-400 dark:bg-teal-500 rounded-full -left-1.75 top-1.5" />
      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
        <h3 className="text-xl font-semibold text-white dark:text-gray-100">
          {exp.role}
        </h3>
        <span className="text-sm text-gray-400 dark:text-gray-400">
          {exp.startDate} – {exp.endDate}
        </span>
      </div>
      <p className="text-teal-400 dark:text-teal-500 font-medium mb-3">
        {exp.company} · {exp.location}
      </p>
      <ul className="list-disc list-outside ml-5 space-y-2 text-gray-400 dark:text-gray-400 mb-3">
        {exp.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-teal-700 dark:bg-teal-500 text-teal-400 dark:text-teal-300 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}