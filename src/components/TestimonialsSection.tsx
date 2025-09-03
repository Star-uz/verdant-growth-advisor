import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Marketing Director',
      quote: 'Working with Michael completely transformed our financial outlook. His personalized investment strategy helped us achieve a 35% portfolio growth in just two years.',
      result: '35% Portfolio Growth',
      rating: 5,
      photo: '/api/placeholder/80/80'
    },
    {
      name: 'Robert Martinez',
      title: 'Business Owner',
      quote: 'The retirement planning guidance was exceptional. I now feel confident about my future, knowing I have a solid plan that adapts to my changing needs.',
      result: 'Retirement Ready at 55',
      rating: 5,
      photo: '/api/placeholder/80/80'
    },
    {
      name: 'Jennifer Thompson',
      title: 'Teacher',
      quote: 'As a single mother, I was overwhelmed by financial decisions. Michael\'s clear guidance helped me build a 6-month emergency fund and start investing for my daughter\'s education.',
      result: 'Built Emergency Fund + Education Savings',
      rating: 5,
      photo: '/api/placeholder/80/80'
    },
    {
      name: 'David Park',
      title: 'Engineer',
      quote: 'The tax optimization strategies saved us over $12,000 last year. Michael\'s expertise in tax planning is truly remarkable and has made a huge difference.',
      result: 'Saved $12,000 in Taxes',
      rating: 5,
      photo: '/api/placeholder/80/80'
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Nurse',
      quote: 'Thanks to Michael\'s guidance, we were able to pay off our mortgage 8 years early while maintaining our investment goals. Life-changing advice!',
      result: 'Mortgage-Free 8 Years Early',
      rating: 5,
      photo: '/api/placeholder/80/80'
    },
    {
      name: 'James Wilson',
      title: 'Consultant',
      quote: 'The estate planning services gave us peace of mind knowing our family\'s future is protected. Thorough, professional, and caring service.',
      result: 'Complete Estate Plan',
      rating: 5,
      photo: '/api/placeholder/80/80'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-light-mint">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-forest mb-6">
            Client Success Stories
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Real results from real clients who trusted us with their financial future
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${currentSlide}-${index}`}
                  className="bg-white rounded-3xl p-8 shadow-card hover:shadow-premium transition-all duration-500 group"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-primary-soft" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-warm-gray leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-warm-gray">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-success-bright/10 text-success-bright font-semibold text-sm rounded-full">
                    {testimonial.result}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border-2 border-primary-sage rounded-full flex items-center justify-center hover:bg-primary-sage hover:text-white transition-all duration-300 hover:scale-110 shadow-card"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary-fresh-mint scale-125'
                      : 'bg-warm-gray/30 hover:bg-warm-gray/60'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border-2 border-primary-sage rounded-full flex items-center justify-center hover:bg-primary-sage hover:text-white transition-all duration-300 hover:scale-110 shadow-card"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-premium">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-fresh-mint mb-2">
                  98%
                </div>
                <div className="text-warm-gray font-medium">
                  Client Satisfaction Rate
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-success-bright mb-2">
                  $50M+
                </div>
                <div className="text-warm-gray font-medium">
                  Client Wealth Created
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gold-accent mb-2">
                  4.9★
                </div>
                <div className="text-warm-gray font-medium">
                  Average Review Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;