const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">Rida Mouden</span>. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["GitHub", "LinkedIn"].map((s) => (
          <a key={s} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
