import { skills } from '../data/resume';

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <div className="rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-8">
          <span className="text-teal-400">04.</span> Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-semibold text-white dark:text-gray-900 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-700 text-gray-300 dark:bg-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}