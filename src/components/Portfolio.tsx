import { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  Calendar, 
  MapPin, 
  CheckCircle,
  Award,
  Droplets,
  Wind,
  Recycle,
  Factory
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Industrial Water Treatment Plant",
    location: "Mumbai, Maharashtra",
    date: "2023",
    category: "Water Treatment",
    icon: Droplets,
    description: "Complete design and installation of water treatment facility for textile manufacturing unit with 50,000L/day capacity.",
    features: ["Zero liquid discharge", "Cost reduction by 40%", "Compliance achieved"],
    image: "/placeholder-project1.jpg",
    status: "Completed",
    client: "Textile Manufacturing Co.",
    results: {
      waterSaved: "18,000L/day",
      costSaving: "₹2.5L annually",
      complianceImprovement: "100%"
    }
  },
  {
    title: "Air Pollution Control System",
    location: "Pune, Maharashtra",
    date: "2024",
    category: "Air Quality",
    icon: Wind,
    description: "Implementation of advanced air pollution control systems for chemical processing plant meeting MPCB standards.",
    features: ["Real-time monitoring", "Automated controls", "MPCB compliance"],
    image: "/placeholder-project2.jpg",
    status: "Completed",
    client: "Chemical Industries Ltd.",
    results: {
      pollutionReduction: "85%",
      energySaving: "30%",
      complianceScore: "A+"
    }
  },
  {
    title: "Waste Management Solution",
    location: "Nashik, Maharashtra",
    date: "2024",
    category: "Waste Management",
    icon: Recycle,
    description: "Comprehensive waste management and recycling system for pharmaceutical manufacturing facility.",
    features: ["Waste segregation", "Recycling optimization", "Cost effective"],
    image: "/placeholder-project3.jpg",
    status: "In Progress",
    client: "Pharma Solutions Pvt Ltd",
    results: {
      wasteReduced: "70%",
      recyclingRate: "90%",
      costSaving: "₹1.8L annually"
    }
  },
  {
    title: "Environmental Compliance Audit",
    location: "Aurangabad, Maharashtra",
    date: "2023",
    category: "Compliance",
    icon: Award,
    description: "Complete environmental compliance audit and system upgrade for steel manufacturing plant.",
    features: ["Regulatory compliance", "System optimization", "Documentation"],
    image: "/placeholder-project4.jpg",
    status: "Completed",
    client: "Steel Works Ltd.",
    results: {
      complianceRate: "100%",
      fineReduction: "₹5L saved",
      efficiency: "95%"
    }
  }
];

const Portfolio = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const categories = ['All', 'Water Treatment', 'Air Quality', 'Waste Management', 'Compliance'];

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
    const elements = document.querySelectorAll('.portfolio-card');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });
  }, [selectedCategory]);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Award className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Our Projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Proven Environmental Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our successful environmental projects across various industries. 
            Each solution is tailored to meet specific regulatory requirements and sustainability goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? 'nature-button-primary' 
                  : 'hover:bg-primary/10 hover:border-primary/50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <Card 
                key={index}
                className={`portfolio-card nature-card group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'fade-in-gentle visible' : 'fade-in-gentle'
                }`}
                data-index={index}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-green-500 hover:bg-green-600' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Project Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Results */}
                  <div className="bg-muted/30 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-sm mb-3">Project Results</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(project.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="flex justify-between text-sm">
                          <span className="text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                          </span>
                          <span className="font-medium text-primary">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-primary/5"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Similar Solution
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/15 max-w-2xl mx-auto nature-card">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let our experts design a custom environmental solution tailored to your specific needs and industry requirements.
            </p>
            <Button 
              className="nature-button-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discuss Your Project
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
