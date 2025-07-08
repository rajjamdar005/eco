import { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  HeadphonesIcon, 
  Shield, 
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Pollution Certified",
    description: "Certified by National Pollution Control Board with all necessary environmental clearances.",
    stat: "ISO 14001",
    color: "text-yellow-500"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced engineers and environmental scientists with proven track record.",
    stat: "50+ Experts",
    color: "text-blue-500"
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Over a decade of successful environmental solutions across various industries.",
    stat: "Since 2014",
    color: "text-green-500"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support and emergency response services.",
    stat: "24/7 Available",
    color: "text-purple-500"
  },
  {
    icon: Shield,
    title: "Compliance Guaranteed",
    description: "100% regulatory compliance with money-back guarantee on all our solutions.",
    stat: "100% Success",
    color: "text-red-500"
  },
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Quick project execution with minimal downtime and maximum efficiency.",
    stat: "30% Faster",
    color: "text-orange-500"
  }
];

const WhyChooseUs = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.why-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Removed Floating Globes */}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-2 mb-6">
            <Star className="h-5 w-5 text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-reveal">
            Your Trusted Environmental Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-reveal">
            With over a decade of expertise and hundreds of successful projects, 
            we're committed to delivering sustainable solutions that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div 
                key={index}
                className={`why-item group transition-all duration-700 ${
                  isVisible ? 'fade-in-gentle visible' : 'fade-in-gentle'
                }`}
                data-index={index}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative p-6 rounded-2xl bg-card border border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-nature)] hover:-translate-y-1 h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {feature.stat}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Awards */}
        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/15 nature-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Certifications & Recognitions</h3>
            <p className="text-muted-foreground">
              Our commitment to excellence is reflected in our certifications and industry recognition.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "ISO 14001", description: "Environmental Management" },
              { name: "CPCB Certified", description: "Pollution Control Board" },
              { name: "Green Building", description: "IGBC Certified" },
              { name: "Industry Award", description: "Best Environmental Solution 2023" }
            ].map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium text-foreground">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;