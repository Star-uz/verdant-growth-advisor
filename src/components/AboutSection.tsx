import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const credentials = [
    'Certified Financial Planner (CFP®)',
    'Chartered Financial Analyst (CFA)',
    'Series 7 & 66 Securities Licensed',
    'Fiduciary Standard Commitment',
    'Financial Planning Association Member'
  ];

  const achievements = [
    {
      icon: TrendingUp,
      number: '$150M+',
      label: 'Assets Under Management',
      color: 'text-primary-fresh-mint'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Satisfied Clients',
      color: 'text-success-bright'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      color: 'text-gold-accent'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Area */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary-forest">
                Your Trusted Financial Partner
              </h2>
              
              <h3 className="text-xl lg:text-2xl font-semibold text-charcoal">
                Michael Johnson, CFP®, CFA
              </h3>
              
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p className="text-lg">
                  With over 15 years of experience in financial planning and wealth management, 
                  I've helped hundreds of families and individuals achieve their financial goals 
                  through personalized strategies and expert guidance.
                </p>
                
                <p className="text-base italic">
                  "My approach combines deep market knowledge with personalized attention, ensuring 
                  every recommendation aligns with your unique circumstances and objectives."
                </p>
              </div>
            </div>

            {/* Professional Certifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary-forest">
                Professional Certifications
              </h4>
              <div className="space-y-3">
                {credentials.map((credential) => (
                  <div key={credential} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-fresh-mint flex-shrink-0" />
                    <span className="text-warm-gray font-medium">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Statistics */}
            <div className="bg-gradient-card rounded-2xl p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <div key={achievement.label} className="text-center">
                    <div className="flex justify-center mb-2">
                      <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                    </div>
                    <div className={`text-2xl lg:text-3xl font-bold ${achievement.color} counter`}>
                      {achievement.number}
                    </div>
                    <div className="text-sm text-warm-gray font-medium">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Photo Section */}
          <div className="relative lg:order-last">
            <div className="relative">
              {/* Professional Image Placeholder */}
              <div className="relative overflow-hidden rounded-3xl shadow-premium">
                <div className="w-full h-[500px] lg:h-[600px] bg-gradient-card flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-charcoal">Michael Johnson</h3>
                      <p className="text-warm-gray">CFP®, CFA</p>
                      <p className="text-sm text-primary-fresh-mint font-semibold">Licensed Financial Advisor</p>
                    </div>
                  </div>
                </div>
                
                {/* Professional Badges */}
                <div className="absolute top-6 right-6 space-y-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-card">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-gold-accent" />
                      <span className="text-sm font-semibold text-charcoal">CFP® Certified</span>
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-card">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-success-bright" />
                      <span className="text-sm font-semibold text-charcoal">Fiduciary Standard</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-success rounded-full opacity-20 float-gentle" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-hero rounded-full opacity-20 float-gentle" style={{ animationDelay: '3s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;