import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import FounderMessage from '@/components/FounderMessage';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

const Index = () => {
  useGSAPAnimations();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div className="animate-section">
          <Services />
        </div>
        <div className="animate-section">
          <Portfolio />
        </div>
        <div className="animate-section">
          <Testimonials />
        </div>
        <div className="animate-section">
          <WhyChooseUs />
        </div>
        <div className="animate-section">
          <FounderMessage />
        </div>
        <div id="about" className="animate-section">
          <About />
        </div>
        <div className="animate-section">
          <FounderMessage />
        </div>
        <div className="animate-section">
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
