const stats = [
  { value: "30+", label: "Projects Completed" },
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

const StatsBar = () => (
  <section className="py-12">
    <div className="container mx-auto px-6">
      <div className="glass-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
