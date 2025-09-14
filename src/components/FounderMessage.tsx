import { useState, useEffect, useRef } from 'react';
import { Quote, Award, Users, Target, Heart, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LazyImage from '@/components/LazyImage';

const FounderMessage = () => {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Quote className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">What Our Founders Say</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            A Message from Our Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders behind Eco Essentia's mission to create 
            a sustainable future through innovative environmental solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Founders */}
          <div className={`space-y-8 fade-in-up ${isVisible ? 'visible' : ''}`}>
            {/* Founder 1 */}
            <Card className="nature-card overflow-hidden">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <div className="aspect-square relative overflow-hidden">
                      <LazyImage
                        src="/eco4.png"
                        alt="Mr. P. S. Naik - Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Mr. P. S. Naik</h3>
                    <p className="text-primary text-sm font-medium mb-3">Founder & Managing Director</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      "Environmental sustainability isn't just our business—it's our responsibility 
                      to future generations. Every project we undertake is a step towards a cleaner, 
                      healthier planet."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right Column - Message Content */}
          <div className={`space-y-6 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary/20" />
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Our Vision for Tomorrow</h3>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    When we founded Eco Essentia in 2014, we had a simple yet ambitious vision: 
                    to prove that environmental responsibility and business success are not just 
                    compatible, but mutually reinforcing.
                  </p>
                  <p className="mb-4">
                    Today, as we look at the environmental challenges facing our world, we're more 
                    committed than ever to our mission. Every water treatment system we install, 
                    every air pollution control solution we implement, and every environmental 
                    compliance strategy we develop represents our dedication to this vision.
                  </p>
                  <p className="mb-6">
                    We believe that sustainable business practices are not just the right thing 
                    to do—they're the smart thing to do. Our clients don't just meet regulatory 
                    requirements; they become leaders in their industries, setting new standards 
                    for environmental excellence.
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 pt-6 border-t border-border/50">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary border-2 border-background flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Together for a Sustainable Future</p>
                    <p className="text-xs text-muted-foreground">Mr. P. S. Naik & Mr. S. S. Chougule</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Industry Recognition",
              description: "Leading environmental consulting firm with proven track record"
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "50+ skilled professionals dedicated to environmental excellence"
            },
            {
              icon: Target,
              title: "Mission-Driven",
              description: "Committed to creating sustainable solutions for future generations"
            }
          ].map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className={`text-center fade-in-up ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
