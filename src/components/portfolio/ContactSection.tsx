import { useState } from "react";
import emailjs from "@emailjs/browser"; // <-- Ajouter EmailJS

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(""); // Pour feedback utilisateur

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Remplacer ces valeurs par celles fournies par EmailJS
    const SERVICE_ID = "service_oj6zn4b";
    const TEMPLATE_ID = "template_b4dwgcm";
    const PUBLIC_KEY = "bNf6Jkbvath9ICyUO";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset formulaire
      })
      .catch((err) => {
        console.error(err);
        setStatus("Failed to send message. Try again later.");
      });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm";

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Get in Touch</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out.
              I'm always open to discussing new opportunities.
            </p>
            {[
              { label: "Email", value: " mrmoudenrida@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { label: "Location", value: "Morocco", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
              { label: "LinkedIn", value: "linkedin.com/in/rida-mouden-009aa433a", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d={item.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={inputClass} required />
              <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={inputClass} required />
            </div>
            <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className={inputClass} required />
            <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} required />
            <button type="submit" className="btn-primary-gradient w-full py-3.5 rounded-xl font-semibold text-sm">
              Send Message
            </button>
            {status && <p className="mt-2 text-center text-sm">{status}</p>} {/* Affiche le feedback */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;