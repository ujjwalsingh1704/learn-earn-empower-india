
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    number: "01",
    title: "Register & Verify",
    description: "Create your profile and verify your identity to start your learning journey",
    icon: "👤"
  },
  {
    number: "02", 
    title: "Discover Tasks",
    description: "AI suggests personalized milestones based on your interests and skill level",
    icon: "🎯"
  },
  {
    number: "03",
    title: "Complete & Submit",
    description: "Finish learning tasks, projects, or courses and submit proof of completion",
    icon: "📚"
  },
  {
    number: "04",
    title: "Get Verified",
    description: "Our AI and expert reviewers verify your submission for authenticity",
    icon: "✅"
  },
  {
    number: "05",
    title: "Receive Rewards",
    description: "Get instant UPI payouts directly to your bank account upon verification",
    icon: "💰"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent process from learning to earning in just 5 steps
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-blue-200"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-gray-100">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  
                  <div className="mt-8 mb-6">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Built for India's 300M+ Students
            </h3>
            <p className="text-gray-600 text-lg">
              Whether you're in a metro city or rural village, our platform ensures equal access to 
              learning opportunities and financial rewards. No paperwork, no bureaucracy - just pure meritocracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
