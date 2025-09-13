import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Phone number - replace with actual business WhatsApp number
  const phoneNumber = '+917249515117';
  
  // Pre-defined messages for quick access
  const quickMessages = [
    {
      title: "Water Treatment Inquiry",
      message: "Hi! I'm interested in your water treatment solutions. Could you please provide more information?"
    },
    {
      title: "Air Pollution Control",
      message: "Hello! I need help with air pollution control systems. Can we discuss our requirements?"
    },
    {
      title: "Environmental Compliance",
      message: "Hi! We need assistance with environmental compliance and auditing. Please contact me."
    },
    {
      title: "General Inquiry",
      message: "Hello! I'd like to know more about your environmental solutions and services."
    }
  ];

  useEffect(() => {
    // Show the button after a small delay when the page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = (message?: string) => {
    const defaultMessage = "Hi! I'm interested in your environmental solutions. Could you please help me?";
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        {isOpen && (
          <Card className="mb-4 w-80 max-w-[calc(100vw-3rem)] nature-card shadow-2xl border-2 border-green-500/20 animate-in slide-in-from-bottom-5 duration-300">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-green-500 text-white p-4 rounded-t-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Eco Essentia Support</h3>
                    <p className="text-xs opacity-90">Typically replies instantly</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-4">
                  <div className="bg-muted/50 rounded-lg p-3 mb-3">
                    <p className="text-sm text-muted-foreground">
                      👋 Hello! How can we help you with your environmental needs today?
                    </p>
                  </div>
                </div>

                {/* Quick Message Options */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Choose a topic:</p>
                  {quickMessages.map((msg, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => openWhatsApp(msg.message)}
                      className="w-full justify-start text-left h-auto p-3 hover:bg-green-50 hover:border-green-200 hover:text-green-700"
                    >
                      <div>
                        <div className="font-medium text-xs">{msg.title}</div>
                        <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {msg.message}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => openWhatsApp()}
                    className="bg-green-500 hover:bg-green-600 text-white text-xs"
                    size="sm"
                  >
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Chat Now
                  </Button>
                  <Button
                    onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                    variant="outline"
                    size="sm"
                    className="text-xs hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    Call Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Floating Button */}
        <Button
          onClick={toggleChat}
          className={`
            h-14 w-14 rounded-full shadow-2xl transition-all duration-300 transform
            ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} 
            text-white border-0 hover:scale-110 active:scale-95
            ${isVisible ? 'animate-in zoom-in-50 duration-500' : ''}
          `}
          size="sm"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6 animate-pulse" />
          )}
        </Button>

        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-[8px] text-white font-bold">1</span>
          </div>
        )}
      </div>

      {/* Initial Greeting Tooltip (shows once) */}
      {isVisible && !isOpen && (
        <div className="fixed bottom-24 right-6 z-40 animate-in slide-in-from-right-5 duration-500 delay-1000">
          <Card className="nature-card shadow-xl border-2 border-green-500/20 max-w-64">
            <CardContent className="p-3">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-foreground">Need help?</p>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Chat with us for instant environmental solutions!
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVisible(false)}
                  className="h-6 w-6 p-0 hover:bg-muted"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              {/* Arrow pointing to button */}
              <div className="absolute bottom-0 right-4 transform translate-y-1">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;
