import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24">
      <div className="rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-8">
          <span className="text-teal-400">03.</span>Education
        </h2>
        {education.map((edu, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-xl font-semibold text-white dark:text-gray-100">
              {edu.degree} in {edu.field}
            </h3>
            <p className="text-teal-400 dark:text-teal-500 font-medium">
              {edu.institution} · {edu.location}
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-2">{edu.graduationDate}</p>
            {edu.details && (
              <ul className="list-disc ml-5 text-gray-400 dark:text-gray-400 space-y-1">
                {edu.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}