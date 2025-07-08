import { useState, useEffect, useRef } from 'react';
import { Target, Eye, Heart, Users, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Users className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pioneering Sustainable Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2014, Eco Essentia has been at the forefront of environmental 
            innovation, helping businesses achieve their sustainability goals while 
            maintaining operational excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className={`space-y-6 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What started as a small team of passionate environmental engineers has grown 
                into a leading environmental consulting firm. Our journey began with a simple 
                belief: that environmental responsibility and business success can go hand in hand.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the years, we've helped hundreds of clients navigate complex environmental 
                challenges, from small businesses implementing their first waste management 
                system to large corporations achieving carbon neutrality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to be recognized as industry leaders in sustainable 
                environmental solutions, but our mission remains the same: creating a 
                cleaner, healthier planet for future generations.
              </p>
            </div>
          </div>

          {/* Right Column - Founder Image Placeholder */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Our Leadership Team</h4>
                <p className="text-muted-foreground">
                  Led by experienced environmental engineers and business leaders 
                  with over 50 years of combined industry experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To provide innovative, sustainable environmental solutions that help businesses thrive while protecting our planet for future generations.",
              color: "text-primary"
            },
            {
              icon: Eye,
              title: "Our Vision",
              description: "To be the global leader in environmental consulting, setting the standard for sustainable business practices worldwide.",
              color: "text-secondary"
            },
            {
              icon: Heart,
              title: "Our Values",
              description: "Integrity, sustainability, innovation, and excellence guide everything we do. We believe in building lasting partnerships with our clients.",
              color: "text-green-500"
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`text-center fade-in-up ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center`}>
                  <Icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Company Stats */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Impact in Numbers</h3>
            <p className="text-muted-foreground">
              Measurable results that demonstrate our commitment to environmental excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "60+", label: "Projects Completed", icon: Lightbulb },
              { number: "50+", label: "Team Members", icon: Users },
              { number: "30+", label: "Industries Served", icon: Globe },
              { number: "99%", label: "Client Satisfaction", icon: Heart }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;