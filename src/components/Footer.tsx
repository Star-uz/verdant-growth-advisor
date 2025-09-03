import { TrendingUp, Linkedin, Twitter, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Wealth Management',
    'Retirement Planning',
    'Tax Optimization',
    'Estate Planning',
    'Investment Advisory',
    'Financial Planning'
  ];

  const resources = [
    'Financial Blog',
    'Market Insights',
    'Planning Tools',
    'Investment Guides',
    'Tax Calendar',
    'Client Portal Login'
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'ADV Disclosure',
    'FINRA BrokerCheck',
    'SIPC Information'
  ];

  return (
    <footer className="bg-primary-forest text-white">
      {/* Main Footer Content */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Financial Growth Experts</h3>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed">
                Your partner in financial growth and security. We provide comprehensive financial planning 
                and investment management services to help you achieve your long-term goals.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-fresh-mint" />
                  <span className="text-white/90">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-fresh-mint" />
                  <span className="text-white/90">info@financialgrowthexperts.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary-fresh-mint mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">123 Financial District, Suite 500<br />New York, NY 10004</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="text-white/70 hover:text-white hover:text-primary-fresh-mint transition-colors duration-300 relative group"
                    >
                      {service}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-fresh-mint transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white hover:text-primary-fresh-mint transition-colors duration-300 relative group"
                    >
                      {resource}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-fresh-mint transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect & Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Stay Connected</h4>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="text-white/80 text-sm">
                  Get weekly financial insights and market updates delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary-fresh-mint"
                  />
                  <Button variant="hero" size="sm">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-white/60">
                  No spam. Unsubscribe anytime.
                </p>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <p className="text-sm font-medium">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-fresh-mint hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-fresh-mint hover:scale-110 transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-white/80">
                © {currentYear} Financial Growth Experts. All rights reserved.
              </p>
              <p className="text-sm text-white/60 mt-1">
                Securities offered through licensed representatives. Investment advisory services 
                offered through Financial Growth Experts, a registered investment advisor.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  {link}
                  {index < 2 && <ExternalLink className="w-3 h-3" />}
                </a>
              ))}
            </div>
          </div>

          {/* Compliance Disclaimers */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-xs text-white/60 space-y-2">
              <p>
                <strong>Important Disclosure:</strong> Financial Growth Experts is a registered investment advisor. 
                All investment advisory services are offered through Financial Growth Experts. 
                Securities are offered through licensed representatives.
              </p>
              <p>
                <strong>SIPC Protection:</strong> Securities are protected by SIPC up to $500,000 including $250,000 in cash. 
                For more information about SIPC protection, visit www.sipc.org.
              </p>
              <p>
                <strong>Fiduciary Standard:</strong> As a registered investment advisor, we have a fiduciary duty to act 
                in your best interest at all times. This website is for informational purposes only and does not 
                constitute investment advice or an offer to sell securities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;