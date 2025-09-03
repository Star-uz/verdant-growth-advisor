import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Calendar, Award } from 'lucide-react';
import heroImage from '@/assets/hero-advisor.jpg';

const HeroSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger counter animations
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach((counter, index) => {
              setTimeout(() => {
                counter.classList.add('animate-fade-in-up');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trustElements = [
    { icon: CheckCircle, text: 'Licensed Advisor' },
    { icon: Users, text: '15+ Years Experience' },
    { icon: Award, text: '1000+ Happy Clients' },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-section pt-24 lg:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-mint/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Area */}
          <div className="space-y-8">
            {/* Pre-headline */}
            <div className="fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-success-bright/10 text-success-bright font-semibold text-sm uppercase tracking-wider rounded-full">
                <CheckCircle className="w-4 h-4" />
                Trusted by 1000+ Clients
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-charcoal leading-tight fade-in-up delay-200">
                Grow Your{' '}
                <span className="text-gradient">Wealth</span>{' '}
                with Expert Financial Guidance
              </h1>
              
              <p className="text-lg lg:text-xl text-warm-gray leading-relaxed max-w-lg fade-in-up delay-400">
                Professional financial planning and investment strategies tailored to your unique goals. 
                Let us help you secure your financial future with confidence.
              </p>
            </div>

            {/* Trust Building Elements */}
            <div ref={statsRef} className="flex flex-wrap gap-6 fade-in-up delay-600">
              {trustElements.map((element, index) => (
                <div 
                  key={element.text}
                  className={`flex items-center gap-2 text-primary-forest font-medium counter delay-${(index + 1) * 100}`}
                >
                  <element.icon className="w-5 h-5 text-primary-fresh-mint" />
                  <span className="text-sm lg:text-base">{element.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 fade-in-up delay-800">
              <Button variant="hero" size="xl" className="group">
                Start Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                View Our Services
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 fade-in-up delay-1000">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-fresh-mint counter">
                  $150M+
                </div>
                <div className="text-sm text-warm-gray">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-fresh-mint counter">
                  1000+
                </div>
                <div className="text-sm text-warm-gray">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-fresh-mint counter">
                  15+
                </div>
                <div className="text-sm text-warm-gray">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:order-last">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-premium">
                <img
                  src={heroImage}
                  alt="Professional financial advisor in modern office setting"
                  className="w-full h-[500px] lg:h-[600px] object-cover float-gentle"
                />
                
                {/* Overlay Graphics */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success-bright rounded-full animate-pulse" />
                    <div>
                      <div className="text-xs text-warm-gray">Portfolio Growth</div>
                      <div className="text-lg font-bold text-success-bright">+24.7%</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-fresh-mint" />
                    <div>
                      <div className="text-xs text-warm-gray">Next Meeting</div>
                      <div className="text-sm font-semibold text-charcoal">Schedule Today</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-hero rounded-full opacity-20 float-gentle" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-success rounded-full opacity-20 float-gentle" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;