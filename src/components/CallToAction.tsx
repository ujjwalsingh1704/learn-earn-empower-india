
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CallToAction = () => {
  return (
    <section id="donors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join the revolution that's democratizing learning opportunities for millions of Indian students. 
              Whether you're a learner or a donor, be part of the change.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">Zero paperwork, instant verification</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">AI-powered fraud detection</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">Real-time impact tracking</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-blue-600 border-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Students</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Complete courses and earn ₹500-1000 per milestone
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Get personalized task recommendations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Build your reputation and skill portfolio
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Access exclusive mentorship opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Donors</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Track your impact with transparent reporting
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Support verified, merit-based achievements
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Fulfill CSR requirements effectively
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Connect directly with talented students
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
