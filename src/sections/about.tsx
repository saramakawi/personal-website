export default function About() {
    return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <div className="glass-panel p-8 md:p-12">
        <h2 className="font-display text-3xl font-bold mb-8">
          <span className="accent">01.</span> About Me
        </h2>
        <div className="max-w-3xl accent text-lg space-y-4">
          <p>
            I'm a software engineer at M&amp;T Bank with three years in tech,
            working across data engineering and enterprise platform development
            on ServiceNow.
          </p>
          <p>
            That breadth — from building data pipelines to automating enterprise
            workflows — gives me a systems-level view of how software delivers
            value. I'm now focused on full-stack and frontend development,
            bringing that same engineering rigor to building polished,
            user-facing products.
          </p>
          <p>
            This site is built with React, TypeScript, Tailwind CSS, and a
            Node/Express backend — a demonstration as much as a description.
          </p>
        </div>
      </div>
    </section>
    );
  }