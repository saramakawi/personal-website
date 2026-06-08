import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24">
      <div className="glass-panel p-8 md:p-12">
        <h2 className="font-display text-3xl font-bold mb-8">
          <span className="accent">03.</span>Education
        </h2>
        {education.map((edu, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-xl font-semibold">
              {edu.degree} in {edu.field}
            </h3>
            <p className="accent font-medium">
              {edu.institution} · {edu.location}
            </p>
            <p className="text-sm mb-2">{edu.graduationDate}</p>
            {edu.details && (
              <ul className="list-disc ml-5 space-y-1">
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