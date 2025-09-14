import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Founder', href: '/founder-says' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Water Treatment',
    'Air Pollution Control',
    'Industrial Solutions',
    'Waste Management',
    'Environmental Consulting',
    'Compliance Monitoring'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-3">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Eco Essentia</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leading environmental consulting firm providing sustainable solutions 
              for businesses worldwide. Engineering a greener future, one project at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 rounded-full hover:bg-primary/10 hover:text-primary"
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      if (link.isRoute) {
                        window.location.href = link.href;
                      } else {
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      if (link.href.startsWith('/')) {
                        window.location.href = link.href;
                      } else {
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Shop No.7, Minche Complex<br />
                  Opp. Rajpallu Mangal karyalaya<br />
                  Unchgaon, Kolhapur - 416 005
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+917249515117" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 7249 5151 17
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:naiksamarjeet64@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  naiksamarjeet64@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Eco Essentia. All rights reserved. 
            </p>
            <div className="flex items-center space-x-6">
              <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-[var(--shadow-nature)] z-50 nature-pulse gentle-float"
        onClick={() => window.open('https://wa.me/917249515117', '_blank')}
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">WhatsApp</span>
      </Button>
    </footer>
  );
};

export default Footer;