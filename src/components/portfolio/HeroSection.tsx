const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                Available for freelance
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="text-gradient">Rida Mouden</span>,
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/80 mt-2">
                Full Stack Developer.
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg animate-fade-up animate-fade-up-delay-1">
              I craft scalable, high-performance web applications with clean code
              and pixel-perfect interfaces. Turning complex problems into elegant
              digital solutions.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-fade-up-delay-2">
              <a
                href="#contact"
                className="btn-primary-gradient px-8 py-3.5 rounded-2xl font-semibold text-sm"
              >
                Hire Me
              </a>
              <a
                href="/files/Rida_Mouden_CV.pdf"
                download="Rida_Mouden_CV.pdf"
                className="px-8 py-3.5 rounded-2xl font-semibold text-sm border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
               >
                Download CV
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5 pt-4 animate-fade-up animate-fade-up-delay-3">
              {[
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", href: "https://www.linkedin.com/in/rida-mouden-009aa433a" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Hero visual */}
          <div className="hidden lg:flex justify-center items-center animate-fade-up animate-fade-up-delay-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center glow-accent" style={{ animation: "float 6s ease-in-out infinite" }}>
                <div className="w-60 h-60 rounded-2xl glass-card overflow-hidden">
                    <img 
                      src="dist/images/profile.jpeg" 
                      alt="Rida Mouden"
                      className="w-full h-full object-cover"
                    />
                  </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20" style={{ animation: "float 4s ease-in-out infinite 1s" }} />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl bg-primary/15 border border-primary/25" style={{ animation: "float 5s ease-in-out infinite 0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
