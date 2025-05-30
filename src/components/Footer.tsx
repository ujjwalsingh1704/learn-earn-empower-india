
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
              SkillReward
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Democratizing education funding through AI-powered micro-scholarships for India's students.
            </p>
            <div className="mt-6 flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">For Students</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Available Tasks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Verification Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">For Donors</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Corporate CSR</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Individual Giving</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impact Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alumni Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NGO Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 SkillReward. All rights reserved. Empowering India's future.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <span className="text-gray-400">🇮🇳 Made in India</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Secured by</span>
                <div className="bg-green-600 px-2 py-1 rounded text-xs font-bold">UPI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
