const services = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites and web apps with modern frontend and backend technologies.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "API Development",
    description: "Designing and implementing RESTful and GraphQL APIs that are secure, scalable, and well-documented.",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2",
  },
  {
    title: "SaaS Solutions",
    description: "End-to-end development of Software-as-a-Service platforms with subscription management and multi-tenancy.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "UI/UX Implementation",
    description: "Transforming designs into pixel-perfect, accessible interfaces with smooth animations and interactions.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">What I Do</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">My Expertise</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div
            key={service.title}
            className={`glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300 animate-fade-up animate-fade-up-delay-${i + 1}`}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d={service.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
