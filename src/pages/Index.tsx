import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FounderSection from '@/components/FounderSection';
import PartnershipsSection from '@/components/PartnershipsSection';
import BlumeInfographic from '@/components/BlumeInfographic';
import Footer from '@/components/Footer';
import { useRef } from 'react';

const Index = () => {
    const nextSectionRef = useRef(null);

      const handleScroll = (e) => {
  e.preventDefault();
  
  if (nextSectionRef.current) {
    const topOffset = nextSectionRef.current.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  }
};
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection handleScroll={handleScroll}/>
        <FounderSection nextSectionRef={nextSectionRef}/>
        <PartnershipsSection />
        <BlumeInfographic />
      </main>
      <Footer />
    </div>
  );
};

export default Index;