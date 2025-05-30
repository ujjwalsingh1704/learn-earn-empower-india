
import { Card, CardContent } from '@/components/ui/card';
import { Clock, User, Bell, Check } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Milestone-Based Rewards",
    description: "Earn ₹500-1000 for verified learning achievements, course completions, and social projects",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: User,
    title: "AI-Driven Matching",
    description: "Machine learning algorithms match you with relevant tasks, donors, and opportunities",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Bell,
    title: "Instant UPI Payouts",
    description: "Get rewards directly in your bank account within minutes of verification",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Check,
    title: "Fraud-Free Verification",
    description: "AI + human moderation ensures authentic submissions and fair reward distribution",
    color: "from-orange-500 to-orange-600"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Democratizing education funding with cutting-edge technology and transparent processes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Gamified Learning Experience
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Leaderboards, badges, levels, and streaks make learning addictive. 
                Build your reputation while earning real money for your achievements.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-semibold">Achievements</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-semibold">Leaderboards</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold">Streaks</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold">Levels</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
