const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS", "Redux", "Stripe API", "Docker", "Node.js"],
    color: "from-primary/20 to-primary/5",
    image: "dist/images/project1.png", 
  },
  {
    title: "Online Medical Appointment Platform",
    description: "A user-friendly platform for booking and managing medical appointments online, exploring doctors’ profiles, and finding nearby hospitals with ease.",
    tech: ["Node.js", "Angular", "Spring Boot", "MongoDB", "Bootstrap", "Docker"],
    color: "from-primary/10 to-primary/20",
    image: "dist/images/project2.png",
  },
  {
    title: "Email Marketing Campaign Management (Freelance)",
    description: "Gestion complète de campagnes d’email marketing en collaboration avec des sponsors : création de templates HTML responsives, préparation et nettoyage des bases de données, envoi via SMTP et optimisation de la délivrabilité. Analyse des performances (open rate, click rate) pour améliorer l’engagement et réduire le spam.",
    tech: ["SMTP", "Thunderbird", "HTML/CSS", "Data Cleaning", "Email Testing Tools"],
    color: "from-primary/15 to-secondary",
    image: "dist/images/project3.png",

  },
  
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">My Work</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
