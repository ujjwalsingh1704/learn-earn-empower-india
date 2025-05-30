
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Rahul Kumar",
    location: "Bihar",
    image: "👨‍🎓",
    quote: "I earned ₹8,500 in my first month by completing web development courses. This platform changed my life!",
    achievement: "Full-Stack Developer"
  },
  {
    name: "Sneha Patel", 
    location: "Gujarat",
    image: "👩‍💻",
    quote: "The AI matching system found perfect projects for my skills. Already earned enough to buy a laptop!",
    achievement: "UI/UX Designer"
  },
  {
    name: "Vikash Singh",
    location: "Uttar Pradesh", 
    image: "👨‍🔬",
    quote: "From a small village to earning through my science projects. The verification process is so transparent!",
    achievement: "Research Assistant"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stories of Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real students, real achievements, real rewards
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.image}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">
                    {testimonial.location}
                  </p>
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm px-3 py-1 rounded-full mt-2">
                    {testimonial.achievement}
                  </div>
                </div>
                
                <blockquote className="text-gray-600 text-center italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex justify-center mt-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join 50,000+ Students Already Earning
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              From rural villages to urban centers, students across India are monetizing their learning journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium">#SkillReward</div>
              <div className="bg-green-50 px-4 py-2 rounded-full text-green-700 font-medium">#LearnToEarn</div>
              <div className="bg-purple-50 px-4 py-2 rounded-full text-purple-700 font-medium">#FutureReady</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
