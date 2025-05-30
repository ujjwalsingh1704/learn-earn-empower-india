
import { Button } from '@/components/ui/button';
import { ArrowDown, User, Bell } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Earn While You</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Learn & Grow
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                India's first UPI-powered micro-scholarship platform. Get instant rewards for completing 
                learning milestones, social projects, and skill development goals.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
                >
                  Start Earning Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
                >
                  Become a Donor
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">₹500-1000</div>
                  <div className="text-sm text-gray-600">Per Milestone</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Instant</div>
                  <div className="text-sm text-gray-600">UPI Payouts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">AI-Verified</div>
                  <div className="text-sm text-gray-600">Fraud-Free</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Priya Sharma</div>
                      <div className="text-sm text-gray-500">Level 3 Learner</div>
                    </div>
                  </div>
                  <Bell className="w-5 h-5 text-green-600" />
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-green-800">Course Completed!</div>
                        <div className="text-sm text-green-600">Web Development Basics</div>
                      </div>
                      <div className="text-lg font-bold text-green-600">+₹750</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-blue-800">Project Submitted</div>
                        <div className="text-sm text-blue-600">Community Garden Initiative</div>
                      </div>
                      <div className="text-lg font-bold text-blue-600">+₹500</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-4 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">₹2,340</div>
                      <div className="text-blue-100">Total Earned This Month</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
