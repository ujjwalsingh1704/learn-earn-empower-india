
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                SkillReward
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                How It Works
              </a>
              <a href="#impact" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                Impact
              </a>
              <a href="#donors" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                For Donors
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-blue-600">How It Works</a>
              <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Impact</a>
              <a href="#donors" className="block px-3 py-2 text-gray-700 hover:text-blue-600">For Donors</a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full text-blue-600 border-blue-600">Login</Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
