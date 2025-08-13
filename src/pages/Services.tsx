import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Shield, TrendingUp } from 'lucide-react';
import pattern1 from "@/assets/pattern-3.png";
import pattern2 from "@/assets/pattern-r-1.png";
import Insurance from "@/assets/insurance.avif";
import Management from "@/assets/Management Consultancy.avif";
import RealEstate from "@/assets/Real Estate.avif";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "We find solutions for the complexities of real estate operations, allowing our clients to focus on their core vision and continuous real estate investor engagement. Leverage our expertise to unlock efficiency, innovation, and growth.",
      image: RealEstate,
      flag: null,
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Whether you’re a leading insurer or a first-time policyholder, Blume’s digital ecosystem transforms complexity into clarity. Reach out to explore how we can co-create smarter, more inclusive insurance experiences in the UAE.",
      image: Insurance,
      flag: "Coming Soon"
    },
    {
      icon: TrendingUp,
      title: "Management Consultancy",
      description: "Harness the power of data to make intelligent decisions. Our solutions streamline consultancy processes, identify opportunities, and empower data-driven growth for your business.",
      image: Management,
      flag: "Coming Soon"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pb-22  bg-background overflow-hidden">
         <div className="absolute inset-0">
          <div className="absolute top-8 left-8 lg:w-[400px]  lg:opacity-20 opacity-0">
            <img src={pattern1} alt="" className="w-full select-none" />
          </div>
          <div className="absolute lg:bottom-0 -bottom-20 right-0 w-96 h-96 lg:w-[500px] md:opacity-20 opacity-10">
            <img src={pattern2} alt="" className="w-full select-none" />
          </div>
        </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate mb-6">
                Industry Solutions
              </h1>
              <p className="text-xl md:text-2xl text-corporate-gray leading-relaxed mb-8">
                Where innovation meets user empowerment. We are a software solutions firm dedicated to transforming how consumers interact with the digital world. Our custom-built platforms bring clarity, efficiency, and personalization to every industry we serve.
              </p>
              <p className="text-lg text-corporate-gray">
                Join us as we redefine the possibilities of digital engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-20 bg-muted/30 overflow-hidden">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-10 w-28 h-28 bg-gradient-to-br from-corporate/20 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-16 w-36 h-36 bg-gradient-to-br from-corporate/15 to-transparent rounded-full blur-2xl animate-pulse delay-1500"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-large transition-all duration-300 animate-fade-in border-corporate-border relative">
                  {service.flag && <div className='absolute top-2 right-2 text-xs bg-gray-300 font-semibold px-3 py-1 rounded-xl'>{service.flag}</div>}
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-corporate/10 rounded-lg flex items-center justify-center group-hover:bg-corporate/20 transition-colors">
                      <service.icon className="w-8 h-8 text-corporate" />
                    </div>
                    <CardTitle className="text-2xl text-corporate">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video mb-6 rounded-lg bg-corporate/5 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-corporate/10 to-corporate/5 flex items-center justify-center">
                        <img src={service.image} alt={service.title} />
                      </div>
                    </div>
                    <p className="text-corporate-gray leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;