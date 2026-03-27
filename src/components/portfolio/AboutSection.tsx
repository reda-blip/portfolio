const skills = ["React", "Laravel", "Angular", "Node.js","Spring Boot", "TypeScript", "MySQL", "REST APIs", "MongoDB", "Tailwind CSS"];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left visual */}
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-primary/15 to-secondary flex items-center justify-center relative">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl glass-card flex items-center justify-center">
  <div className="w-60 h-60 rounded-2xl glass-card overflow-hidden">
                    <img 
                      src="dist/images/profile2.jpeg" 
                      alt="Rida Mouden"
                      className="w-full h-full object-cover"
                    />
                  </div>
            </div>
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-primary/60" />
          </div>
        </div>

        {/* Right text */}
        <div className="space-y-6">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Passionate Developer,<br />
              <span className="text-gradient">Based in Morocco</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I'm a Full Stack Developer with a deep passion for building modern, scalable web applications.
            I specialize in crafting seamless user experiences backed by robust server-side architectures.
            Every line of code I write is driven by performance, maintainability, and attention to detail.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From SaaS platforms to e-commerce solutions, I bring ideas to life with clean code
            and thoughtful design. I believe in continuous learning and delivering real value to every project.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-xl text-xs font-medium bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
