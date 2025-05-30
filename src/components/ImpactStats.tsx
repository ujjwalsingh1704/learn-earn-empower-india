
import { useState, useEffect } from 'react';

const stats = [
  { number: 50000, label: "Students Registered", suffix: "+", prefix: "" },
  { number: 1250000, label: "Total Rewards Distributed", suffix: "+", prefix: "₹" },
  { number: 850, label: "Partner Organizations", suffix: "+", prefix: "" },
  { number: 95, label: "Verification Accuracy", suffix: "%", prefix: "" }
];

const ImpactStats = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('impact-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ targetNumber, prefix = "", suffix = "" }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (!animated) return;

      const duration = 2000;
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCurrentNumber(targetNumber);
          clearInterval(timer);
        } else {
          setCurrentNumber(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [animated, targetNumber]);

    const formatNumber = (num) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
      }
      return num.toString();
    };

    return (
      <span>
        {prefix}{formatNumber(currentNumber)}{suffix}
      </span>
    );
  };

  return (
    <section id="impact" className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Impact, Real Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how we're transforming lives and democratizing education across India
          </p>
        </div>
        
        <div id="impact-stats" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedNumber 
                    targetNumber={stat.number} 
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-blue-100 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Success Stories</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-white font-medium">Arjun from Rajasthan</div>
                <div className="text-blue-100 text-sm">Earned ₹15,000 through coding milestones, now working at a tech startup</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-white font-medium">Priya from Kerala</div>
                <div className="text-blue-100 text-sm">Funded her graphic design course through community project rewards</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Donor Impact</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Corporate CSR Funds</span>
                <span className="text-white font-bold">60%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-3/5"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Individual Donors</span>
                <span className="text-white font-bold">25%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-1/4"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Alumni Contributions</span>
                <span className="text-white font-bold">15%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-36"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
