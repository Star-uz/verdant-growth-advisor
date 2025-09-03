import { TrendingUp, PiggyBank, Calculator, Shield, BarChart3, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Wealth Management',
      description: 'Strategic portfolio management and investment planning to maximize your long-term wealth growth',
      features: [
        'Asset allocation optimization',
        'Risk management strategies',
        'Performance monitoring',
        'Portfolio rebalancing',
        'Market analysis'
      ]
    },
    {
      icon: PiggyBank,
      title: 'Retirement Planning',
      description: 'Comprehensive retirement strategies to ensure financial security in your golden years',
      features: [
        '401k optimization',
        'IRA management',
        'Social Security planning',
        'Income replacement strategies',
        'Healthcare cost planning'
      ]
    },
    {
      icon: Calculator,
      title: 'Tax Optimization',
      description: 'Smart tax strategies to minimize your tax burden and maximize after-tax returns',
      features: [
        'Tax-loss harvesting',
        'Deduction strategies',
        'Tax-efficient investing',
        'Year-end planning',
        'Estate tax planning'
      ]
    },
    {
      icon: Shield,
      title: 'Estate Planning',
      description: 'Protect and efficiently transfer your wealth to future generations',
      features: [
        'Will creation & updates',
        'Trust setup & management',
        'Beneficiary planning',
        'Legacy preservation',
        'Charitable giving strategies'
      ]
    },
    {
      icon: BarChart3,
      title: 'Investment Advisory',
      description: 'Professional investment guidance based on market research and proven strategies',
      features: [
        'Market analysis',
        'Investment selection',
        'Portfolio construction',
        'Risk assessment',
        'Alternative investments'
      ]
    },
    {
      icon: MapPin,
      title: 'Financial Planning',
      description: 'Comprehensive financial roadmaps tailored to your life goals and circumstances',
      features: [
        'Goal setting & tracking',
        'Cash flow planning',
        'Budget optimization',
        'Financial modeling',
        'Emergency fund planning'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-light-mint">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-forest mb-6">
            Complete Financial Services
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to maximize your financial growth and security through 
            personalized strategies and expert guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-premium group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-charcoal group-hover:text-primary-fresh-mint transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-warm-gray leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-primary-fresh-mint rounded-full flex-shrink-0" />
                      <span className="text-primary-forest font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4">
                  <Button variant="ghost" className="group/btn text-primary-fresh-mint hover:text-white hover:bg-primary-fresh-mint p-0 h-auto font-semibold">
                    Learn More
                    <svg 
                      className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-premium max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-warm-gray text-lg mb-8">
              Schedule a complimentary consultation to discuss your financial goals and how we can help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="xl">
                Download Our Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;