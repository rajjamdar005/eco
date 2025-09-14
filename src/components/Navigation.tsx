import { useState, useEffect } from 'react';
import { Menu, X, Leaf, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/80 backdrop-blur-md shadow-lg border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 nature-gradient rounded-xl flex items-center justify-center shadow-[var(--shadow-card)] leaf-sway">
              <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold text-foreground tracking-tight truncate">
              Eco Essentia
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('tel:+917249515117', '_self')}
              className="text-foreground hover:text-primary"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button
              size="sm"
              className="nature-button-primary text-sm"
              onClick={() => scrollToSection('#contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden flex-shrink-0 ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/20">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    window.open('tel:+917249515117', '_self');
                    setIsOpen(false);
                  }}
                  className="justify-start text-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  size="sm"
                  className="nature-button-primary text-sm"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;