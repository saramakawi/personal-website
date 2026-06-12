// This is the Skills section displaying technology categories as pill badges.

import { skills } from '../data/resume';

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <div className="glass-panel p-8 md:p-12">
        <h2 className="section-heading">
          <span className="accent">04.</span> Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-semibold mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="skill-pill"
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