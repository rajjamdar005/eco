import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "Environmental Manager",
    company: "Tata Steel Limited",
    location: "Mumbai, Maharashtra",
    avatar: "/placeholder-avatar1.jpg",
    companyLogo: "/placeholder-company1.png",
    rating: 5,
    testimonial: "Eco Essentia's water treatment solution reduced our operational costs by 40% while ensuring 100% MPCB compliance. Their team's expertise and dedication to environmental sustainability is unmatched.",
    project: "Industrial Water Treatment Plant",
    results: ["40% cost reduction", "100% MPCB compliance", "Zero liquid discharge"]
  },
  {
    name: "Dr. Priya Patel",
    position: "Operations Director",
    company: "Cipla Pharmaceuticals",
    location: "Pune, Maharashtra",
    avatar: "/placeholder-avatar2.jpg",
    companyLogo: "/placeholder-company2.png",
    rating: 5,
    testimonial: "Working with Eco Essentia was a game-changer for our pharmaceutical facility. Their waste management system achieved 90% recycling rate and significantly reduced our environmental footprint.",
    project: "Waste Management Solution",
    results: ["90% recycling rate", "70% waste reduction", "₹1.8L annual savings"]
  },
  {
    name: "Amit Kumar",
    position: "Plant Manager",
    company: "Reliance Industries",
    location: "Nashik, Maharashtra",
    avatar: "/placeholder-avatar3.jpg",
    companyLogo: "/placeholder-company3.png",
    rating: 5,
    testimonial: "The air pollution control system installed by Eco Essentia exceeded our expectations. We achieved 85% pollution reduction and received A+ compliance rating from MPCB.",
    project: "Air Pollution Control System",
    results: ["85% pollution reduction", "A+ compliance rating", "30% energy savings"]
  },
  {
    name: "Sunita Desai",
    position: "Sustainability Head",
    company: "Mahindra Group",
    location: "Aurangabad, Maharashtra",
    avatar: "/placeholder-avatar4.jpg",
    companyLogo: "/placeholder-company4.png",
    rating: 5,
    testimonial: "Eco Essentia's comprehensive environmental audit helped us save ₹5L in potential fines and achieve 100% regulatory compliance. Highly recommend their professional services.",
    project: "Environmental Compliance Audit",
    results: ["100% compliance rate", "₹5L fine savings", "95% efficiency improvement"]
  },
  {
    name: "Vikram Singh",
    position: "Technical Director",
    company: "L&T Construction",
    location: "Mumbai, Maharashtra",
    avatar: "/placeholder-avatar5.jpg",
    companyLogo: "/placeholder-company5.png",
    rating: 5,
    testimonial: "Their fire prevention and safety systems are top-notch. Professional installation, thorough documentation, and excellent ongoing support. Peace of mind for our entire facility.",
    project: "Fire Prevention & Life Safety",
    results: ["100% safety compliance", "24/7 monitoring", "Emergency response ready"]
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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

    const elements = document.querySelectorAll('.testimonial-card');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoplay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoplay(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Quote className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from industry leaders who have transformed 
            their environmental compliance and sustainability with our solutions.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="nature-card overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar and Company Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="relative mb-4">
                    <Avatar className="h-20 w-20 mx-auto md:mx-0 border-4 border-primary/20">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-1">
                      <Quote className="h-3 w-3" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {testimonials[currentIndex].position}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {testimonials[currentIndex].company}
                    </span>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].testimonial}"
                  </blockquote>
                  
                  {/* Project Results */}
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-sm text-primary mb-3">
                      Project: {testimonials[currentIndex].project}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {testimonials[currentIndex].results.map((result, index) => (
                        <div key={index} className="text-sm text-center md:text-left">
                          <div className="font-medium text-foreground">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleCards.includes(index);
            
            return (
              <Card
                key={index}
                className={`testimonial-card nature-card transition-all duration-500 ${
                  isVisible ? 'fade-in-gentle visible' : 'fade-in-gentle'
                } ${index === currentIndex ? 'ring-2 ring-primary/20' : ''}`}
                data-index={index}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <blockquote className="text-sm text-muted-foreground italic line-clamp-3 mb-3">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => goToTestimonial(index)}
                    className="text-xs text-primary hover:bg-primary/10 p-2 h-auto"
                  >
                    Read Full Review
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/15 max-w-2xl mx-auto nature-card">
            <h3 className="text-2xl font-semibold mb-4">Join Our Satisfied Clients</h3>
            <p className="text-muted-foreground mb-6">
              Experience the same level of excellence and environmental solutions that have 
              made our clients industry leaders in sustainability.
            </p>
            <Button 
              className="nature-button-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Success Story
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
