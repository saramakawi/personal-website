import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        <span className="text-blue-600">03.</span> Education
      </h2>
      {education.map((edu, i) => (
        <div key={i} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900">
            {edu.degree} in {edu.field}
          </h3>
          <p className="text-blue-600 font-medium">
            {edu.institution} · {edu.location}
          </p>
          <p className="text-sm text-gray-500 mb-2">{edu.graduationDate}</p>
          {edu.details && (
            <ul className="list-disc ml-5 text-gray-600 space-y-1">
              {edu.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}