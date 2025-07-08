import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
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
          <WhyChooseUs />
        </div>
        <div id="about" className="animate-section">
          <About />
        </div>
        <div className="animate-section">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
