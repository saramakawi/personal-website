// This is the About section with a brief personal bio.

export default function About() {
    return (
    <section id="about" className="section-wrapper">
      <div className="glass-panel p-8 md:p-12">
        <h2 className="section-heading">
          <span className="accent">01.</span> About Me
        </h2>
        <div className="text-soft max-w-3xl text-lg space-y-4">
          <p>
            I’m a mathematician, software engineer, and artist who 
            loves combining creativity and logic to solve problems and build amazing 
            things. With a background in Applied and Computational Mathematics from 
            USC, I’ve always been fascinated by how math and technology can shape 
            the world—and I enjoy finding creative and artistic ways to bring those 
            ideas to life.
          </p>
          <p>
            When I’m not coding, you’ll find me designing creative projects, creating 
            art, or exploring opportunities to innovate and grow. I love connecting 
            with others who share my curiosity and drive to make an impact—let’s chat 
            and collaborate!
          </p>
        </div>
      </div>
    </section>
    );
  }