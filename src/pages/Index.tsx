
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import ImpactStats from '../components/ImpactStats';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ImpactStats />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
