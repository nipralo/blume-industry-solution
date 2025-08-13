import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FounderSection from '@/components/FounderSection';
import PartnershipsSection from '@/components/PartnershipsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FounderSection />
        <PartnershipsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;