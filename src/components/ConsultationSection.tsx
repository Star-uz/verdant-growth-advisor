import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronLeft, ChevronRight, CheckCircle, Calendar, Clock, Users } from 'lucide-react';

const ConsultationSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    // Step 2
    financialGoals: [],
    // Step 3
    annualIncome: '',
    investmentExperience: '',
    investmentTimeline: '',
    currentConcerns: '',
    // Step 4
    selectedDate: '',
    selectedTime: '',
    meetingType: 'video',
    specialRequests: ''
  });

  const totalSteps = 4;

  const goals = [
    'Retirement Planning & Security',
    'Investment Growth & Management',
    'Tax Minimization Strategies',
    'Estate Planning & Legacy',
    'Insurance & Risk Management',
    'Education Funding Planning',
    'Debt Management & Optimization',
    'Business Financial Planning'
  ];

  const incomeRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $200,000',
    '$200,000 - $500,000',
    '$500,000+'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      financialGoals: prev.financialGoals.includes(goal)
        ? prev.financialGoals.filter(g => g !== goal)
        : [...prev.financialGoals, goal]
    }));
  };

  const renderProgressBar = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
            step < currentStep 
              ? 'bg-primary-fresh-mint text-white' 
              : step === currentStep 
                ? 'bg-primary-fresh-mint text-white' 
                : 'bg-border-light text-warm-gray'
          }`}>
            {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 4 && (
            <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
              step < currentStep ? 'bg-primary-fresh-mint' : 'bg-border-light'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-charcoal mb-2">Let's Get Started</h3>
        <p className="text-warm-gray">Basic information to personalize your consultation</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            className="focus-ring"
            placeholder="John Smith"
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
          />
        </div>
        
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
          <Label>Preferred Contact Method</Label>
          <RadioGroup
            value={formData.preferredContact}
            onValueChange={(value) => setFormData(prev => ({ ...prev, preferredContact: value }))}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email-contact" />
              <Label htmlFor="email-contact">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="phone-contact" />
              <Label htmlFor="phone-contact">Phone</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-charcoal mb-2">What Are Your Financial Priorities?</h3>
        <p className="text-warm-gray">Select all that apply to customize our discussion</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {goals.map((goal) => (
          <div
            key={goal}
            className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
              formData.financialGoals.includes(goal)
                ? 'border-primary-fresh-mint bg-primary-fresh-mint/5'
                : 'border-border-light hover:border-primary-soft'
            }`}
            onClick={() => handleGoalToggle(goal)}
          >
            <Checkbox
              checked={formData.financialGoals.includes(goal)}
              onChange={() => handleGoalToggle(goal)}
            />
            <Label className="cursor-pointer font-medium">{goal}</Label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-charcoal mb-2">Help Us Understand Your Current Position</h3>
        <p className="text-warm-gray">This helps us prepare relevant insights for your consultation</p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Annual Income</Label>
          <RadioGroup
            value={formData.annualIncome}
            onValueChange={(value) => setFormData(prev => ({ ...prev, annualIncome: value }))}
          >
            {incomeRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <RadioGroupItem value={range} id={range} />
                <Label htmlFor={range}>{range}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label>Investment Experience</Label>
          <RadioGroup
            value={formData.investmentExperience}
            onValueChange={(value) => setFormData(prev => ({ ...prev, investmentExperience: value }))}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="beginner" id="beginner" />
              <Label htmlFor="beginner">Beginner (new to investing)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intermediate" id="intermediate" />
              <Label htmlFor="intermediate">Intermediate (some experience)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="advanced" id="advanced" />
              <Label htmlFor="advanced">Advanced (experienced investor)</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="concerns">Current Financial Challenges or Questions</Label>
          <Textarea
            id="concerns"
            value={formData.currentConcerns}
            onChange={(e) => setFormData(prev => ({ ...prev, currentConcerns: e.target.value }))}
            className="focus-ring min-h-[120px]"
            placeholder="What financial challenges or questions do you have?"
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-charcoal mb-2">Choose Your Preferred Time</h3>
        <p className="text-warm-gray">Select a convenient time for your complimentary consultation</p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Meeting Type</Label>
          <RadioGroup
            value={formData.meetingType}
            onValueChange={(value) => setFormData(prev => ({ ...prev, meetingType: value }))}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="video" id="video" />
              <Label htmlFor="video">Video Call (Zoom/Teams)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="phone-call" />
              <Label htmlFor="phone-call">Phone Consultation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="in-person" id="in-person" />
              <Label htmlFor="in-person">In-Person Meeting (if local)</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.selectedDate}
              onChange={(e) => setFormData(prev => ({ ...prev, selectedDate: e.target.value }))}
              className="focus-ring"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Preferred Time</Label>
            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, selectedTime: time }))}
                  className={`p-2 text-sm rounded-lg border-2 transition-all duration-300 ${
                    formData.selectedTime === time
                      ? 'border-primary-fresh-mint bg-primary-fresh-mint text-white'
                      : 'border-border-light hover:border-primary-soft'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="requests">Special Requests (Optional)</Label>
          <Textarea
            id="requests"
            value={formData.specialRequests}
            onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
            className="focus-ring"
            placeholder="Any specific topics or questions you'd like to discuss?"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section id="consultation" className="py-20 lg:py-32 bg-gradient-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-forest mb-6">
            Schedule Your Complimentary Financial Consultation
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed mb-4">
            Take the first step toward financial success with a free, no-obligation consultation
          </p>
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-primary-fresh-mint">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              30-minute session
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Personalized advice
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              No commitment required
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-premium">
          {renderProgressBar()}
          
          <form className="space-y-8">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}
            
            {/* Navigation */}
            <div className="flex justify-between pt-8">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  variant="hero"
                  onClick={nextStep}
                  className="flex items-center gap-2"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="consultation"
                  size="xl"
                  className="flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book My Consultation
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;