import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[+]?[(]?[\d\s\-()]{10,}$/;
    return phone === '' || phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Please correct the highlighted fields and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours. Check your email for confirmation.",
      });
      
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setErrors({});
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Shop No.7, Minche Complex, Opp. Rajpallu Mangal karyalaya,\nUnchgaon, Kolhapur - 416 005",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Mr. P. S. Naik",
      content: "+91 7249 5151 17",
      action: "Call Now"
    },
    {
      icon: Phone,
      title: "Mr. S. S. Chougule", 
      content: "+91 9923 05 2606",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email - Mr. P. S. Naik",
      content: "naiksamarjeet64@gmail.com",
      action: "Send Email"
    },
    {
      icon: Mail,
      title: "Email - Mr. S. S. Chougule",
      content: "sandipchougule2441@gmail.com", 
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 10:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
      action: ""
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-2 mb-6">
            <MessageSquare className="h-5 w-5 text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's Create Something Sustainable Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your environmental transformation? Get in touch with our experts 
            for a free consultation and discover how we can help your business thrive sustainably.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
            
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="nature-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        <p className="text-muted-foreground text-sm whitespace-pre-line mb-3">
                          {info.content}
                        </p>
                        {info.action && (
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto">
                            {info.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* WhatsApp Button */}
            <Card className="nature-card bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">WhatsApp Support</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Get instant replies on WhatsApp for quick queries and support.
                </p>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open('https://wa.me/917249515117', '_blank')}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="nature-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className={`bg-background ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        {errors.name && (
                          <div className="flex items-center mt-1 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.name}
                          </div>
                        )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                          className={`bg-background ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        {errors.email && (
                          <div className="flex items-center mt-1 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.email}
                          </div>
                        )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          className={`bg-background ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        {errors.phone && (
                          <div className="flex items-center mt-1 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.phone}
                          </div>
                        )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Interest
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="water-treatment">Water Treatment</SelectItem>
                          <SelectItem value="air-pollution">Air Pollution Control</SelectItem>
                          <SelectItem value="industrial">Industrial Solutions</SelectItem>
                          <SelectItem value="waste-management">Waste Management</SelectItem>
                          <SelectItem value="consulting">Environmental Consulting</SelectItem>
                          <SelectItem value="compliance">Compliance & Monitoring</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project requirements, challenges, or questions..."
                        className={`bg-background min-h-[120px] ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                        required
                      />
                      {errors.message && (
                        <div className="flex items-center mt-1 text-sm text-red-600">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.message}
                        </div>
                      )}
                      <div className="text-xs text-muted-foreground mt-1">
                        {formData.message.length}/500 characters
                      </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full nature-button-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="nature-card overflow-hidden">
            <CardContent className="p-0">
              {/* Google Maps Embed */}
              <div className="relative h-80 bg-muted/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.0234!2d74.2297!3d16.7046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzE2LjYiTiA3NMKwMTMnNDYuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-xl"
                ></iframe>
                
                {/* Overlay with office info */}
                <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border/50 max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">Our Office</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Shop No.7, Minche Complex<br />
                        Opp. Rajpallu Mangal karyalaya<br />
                        Unchgaon, Kolhapur - 416 005
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="mt-2 text-xs h-7"
                        onClick={() => window.open('https://maps.google.com/?q=16.7046,74.2297', '_blank')}
                      >
                        <MapPin className="h-3 w-3 mr-1" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;