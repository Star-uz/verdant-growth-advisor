import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Shield, Award, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false
  });

  const subjects = [
    'General Information',
    'Investment Consultation',
    'Retirement Planning',
    'Tax Planning Inquiry',
    'Estate Planning',
    'Insurance Review',
    'Other (please specify)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-forest mb-6">
            Get In Touch
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
            Ready to start your financial journey? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-light-mint rounded-3xl p-8 lg:p-10 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="focus-ring"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="focus-ring"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="focus-ring"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full h-12 px-4 rounded-lg border-2 border-border-light focus:border-primary-fresh-mint focus:ring-4 focus:ring-primary-fresh-mint/30 bg-white transition-all duration-200"
                      required
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="focus-ring min-h-[150px]"
                    placeholder="Tell us about your financial goals and how we can help..."
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.target.checked }))}
                    className="w-4 h-4 text-primary-fresh-mint bg-white border-border-light rounded focus:ring-primary-fresh-mint focus:ring-2"
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    I'd like to receive financial insights and market updates via email
                  </Label>
                </div>
                
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Information */}
            <div className="bg-gradient-card rounded-3xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-primary-forest mb-6">Visit Our Office</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-fresh-mint mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">123 Financial District</p>
                    <p className="text-warm-gray">Suite 500</p>
                    <p className="text-warm-gray">New York, NY 10004</p>
                    <button className="text-primary-fresh-mint hover:text-primary-sage text-sm font-medium mt-1 flex items-center gap-1">
                      Get Directions <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-fresh-mint flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">(555) 123-4567</p>
                    <p className="text-sm text-warm-gray">Main Line</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-fresh-mint flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">info@financialgrowthexperts.com</p>
                    <p className="text-sm text-warm-gray">General Inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 pt-2">
                  <Clock className="w-5 h-5 text-primary-fresh-mint mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal mb-1">Business Hours</p>
                    <div className="text-sm text-warm-gray space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 3:00 PM</p>
                      <p className="text-xs">(By Appointment Only)</p>
                      <p>Sunday: Closed</p>
                      <p className="text-xs italic">Emergency support available for existing clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Credentials */}
            <div className="bg-gradient-card rounded-3xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-primary-forest mb-6">Professional Credentials</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gold-accent flex-shrink-0" />
                  <span className="text-charcoal font-medium">CFP® Certified</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gold-accent flex-shrink-0" />
                  <span className="text-charcoal font-medium">CFA Charterholder</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-bright flex-shrink-0" />
                  <span className="text-charcoal font-medium">SIPC Protected</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-bright flex-shrink-0" />
                  <span className="text-charcoal font-medium">Fiduciary Standard</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary-fresh-mint flex-shrink-0" />
                  <span className="text-charcoal font-medium">BBB A+ Rating</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-card rounded-3xl p-2 shadow-card">
              <div className="bg-warm-gray/10 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-fresh-mint mx-auto mb-2" />
                  <p className="text-warm-gray font-medium">Interactive Map</p>
                  <p className="text-sm text-warm-gray">123 Financial District, NYC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;