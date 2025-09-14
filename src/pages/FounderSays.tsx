import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useState, useEffect } from 'react';
import { Quote, Award, Users, Target, Leaf, MapPin, Mail, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LazyImage from '@/components/LazyImage';

const FounderSays = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 mb-8">
                <Quote className="h-6 w-6 text-primary mr-3" />
                <span className="text-base font-semibold text-primary">Message from Leadership</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
                What Our Founder Says
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the vision, values, and passion that drive Eco Essentia's 
                commitment to environmental excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Main Founder Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Founder Images */}
              <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
                <div className="space-y-8">
                  {/* Primary Founder */}
                  <Card className="nature-card overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <LazyImage
                            src="/eco4.png"
                            alt="Mr. P. S. Naik - Founder"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                            <h4 className="text-xl font-semibold text-white mb-1">Mr. P. S. Naik</h4>
                            <p className="text-green-300 text-sm font-medium">Founder & Managing Director</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Founder Content */}
              <div className={`space-y-10 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
                {/* Main Quotes */}
                <div className="space-y-6">
                  <div className="relative">
                    <Quote className="absolute -top-6 -left-4 h-16 w-16 text-primary/20" />
                    <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed pl-8 italic border-l-4 border-primary">
                      "Environmental sustainability isn't just our business—it's our responsibility 
                      to future generations. Every project we undertake is a step toward a cleaner, 
                      healthier planet."
                    </blockquote>
                    <p className="text-sm text-muted-foreground mt-4 pl-8">— Mr. P. S. Naik</p>
                  </div>

                  

                {/* Founder Details */}
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 nature-gradient rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-foreground">Leadership Excellence</h2>
                  </div>
                  <p className="text-primary font-semibold text-lg mb-6">Together Building a Sustainable Future</p>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Mr. P. S. Naik and Mr. S. S. Chougule founded Eco Essentia in 2014 with a shared vision: 
                      to make environmental compliance accessible and effective for businesses of all sizes. 
                      Their combined expertise spans over 20 years in environmental engineering and consulting.
                    </p>
                    <p>
                      Both founders witnessed firsthand the challenges businesses face in balancing 
                      operational needs with environmental responsibilities. This experience sparked 
                      their passion for creating innovative solutions that benefit both business and the environment.
                    </p>
                    <p>
                      Under their joint leadership, Eco Essentia has grown from a small consultancy to a 
                      recognized leader in environmental solutions, helping over 60 businesses 
                      achieve their sustainability goals while maintaining operational excellence.
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      <span>+91 7249 5151 17 (Mr.Samarjeet Naik)</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <span>naiksamarjeet64@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 text-secondary" />
                      <span>+91 9923 05 2606 (Mr. S. S. Chougule)</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2 text-secondary" />
                      <span>sandipchougule2441@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Vision & Values Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Our Leadership Principles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The core values that guide our founder's vision and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Innovation",
                  description: "Leading with cutting-edge environmental technologies and forward-thinking solutions.",
                  color: "text-blue-500"
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "Delivering superior results with uncompromising quality and attention to detail.",
                  color: "text-green-500"
                },
                {
                  icon: Users,
                  title: "Partnership",
                  description: "Building lasting relationships based on trust, transparency, and mutual success.",
                  color: "text-primary"
                },
                {
                  icon: Leaf,
                  title: "Sustainability",
                  description: "Ensuring every solution contributes to a healthier planet for future generations.",
                  color: "text-secondary"
                }
              ].map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:shadow-lg">
                      <Icon className={`h-10 w-10 ${principle.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Environmental Impact?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our founder and team to discuss how we can help your business 
              achieve its sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg"
                className="nature-button-primary px-8 py-4 text-lg"
                onClick={() => {
                  window.location.href = '/#contact';
                }}
              >
                Schedule a Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => {
                  window.open('tel:+917249515117', '_self');
                }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default FounderSays;
