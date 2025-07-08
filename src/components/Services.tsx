import { useState, useEffect, useRef } from 'react';
import { 
  Droplets, 
  Wind, 
  Recycle, 
  Factory, 
  Leaf, 
  ShieldCheck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Leaf,
    title: "Pollution control board services",
    description: "Expert assistance with pollution control board compliance and regulatory requirements.",
    features: ["MPCB Compliance", "License Applications", "Environmental Clearances", "Regulatory Support"],
    color: "text-primary"
  },
  {
    icon: Recycle,
    title: "Environment Related services",
    description: "Comprehensive services related to environmental protection and sustainability.",
    features: ["Environmental Impact Assessment", "Waste Management", "Sustainability Consulting", "Green Initiatives"],
    color: "text-green-500"
  },
  {
    icon: Factory,
    title: "Environmental Engineering services",
    description: "Professional environmental engineering services for sustainable industrial operations.",
    features: ["Environmental Impact Assessment", "Engineering Design", "Process Optimization", "Regulatory Compliance"],
    color: "text-orange-500"
  },
  {
    icon: Droplets,
    title: "Water treatment and engineering",
    description: "Advanced water treatment solutions and engineering services for industrial and municipal applications.",
    features: ["Water Treatment Systems", "Engineering Solutions", "Process Design", "System Maintenance"],
    color: "text-blue-500"
  },
  {
    icon: ShieldCheck,
    title: "Health and safety (Fire prevention and Life safety)",
    description: "Fire prevention and life safety solutions to protect your facility and personnel.",
    features: ["Fire Prevention Systems", "Life Safety Solutions", "Safety Audits", "Emergency Planning"],
    color: "text-red-500"
  },
  {
    icon: Wind,
    title: "Air Pollution control, monitoring and equipment design.",
    description: "Comprehensive air pollution control systems, monitoring solutions and equipment design.",
    features: ["Pollution Control Systems", "Air Quality Monitoring", "Equipment Design", "Compliance Solutions"],
    color: "text-green-500"
  },
  {
    icon: CheckCircle,
    title: "Shop act, Food license, Udyam Registration",
    description: "Complete support for Shop Act, Food License, and Udyam Registration processes.",
    features: ["Shop Act Registration", "Food License", "Udyam Registration", "Documentation Support"],
    color: "text-purple-500"
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.service-card');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Removed Floating Globes */}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Leaf className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-reveal">
            Comprehensive Environmental Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-reveal">
            From water treatment to air pollution control, we provide end-to-end environmental 
            solutions tailored to your specific needs and industry requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <Card 
                key={index}
                className={`service-card nature-card group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'fade-in-gentle visible' : 'fade-in-gentle'
                }`}
                data-index={index}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-primary/5"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/15 max-w-2xl mx-auto nature-card">
            <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Every environmental challenge is unique. Let our experts design a tailored solution for your specific requirements.
            </p>
            <Button 
              className="nature-button-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;