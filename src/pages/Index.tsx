import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import StatsBar from "@/components/portfolio/StatsBar";
import AboutSection from "@/components/portfolio/AboutSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
