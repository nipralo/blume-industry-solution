import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, TrendingUp, ExternalLink } from "lucide-react";
import pattern1 from "@/assets/pattern-3.png";
import pattern2 from "@/assets/pattern-r-1.png";
import blumeSpaceLogo from "@/assets/Blume Space logo.png"

const BlumeSpace = () => {
  const benefits = [
    {
      icon: Building,
      title: "Landlords & Property Managers",
      features: [
        "Verified and Ranked Profiles",
        "Real-time property insights and occupancy tracking",
        "Occupancy Tracking",
        "Streamlined lease management and payment reconciliation",
        "Payment tracking",
        "Financial Reports",
        "Interaction History Reports",
      ],
    },
    {
      icon: Users,
      title: "Tenants",
      features: [
        "Verified and Ranked Profiles",
        "Transparent billing and service history",
        "Service history reports",
        "Direct communication with landlords and support teams",
        "Financial Reports",
        "Interaction History Reports",
      ],
    },

    {
      icon: TrendingUp,
      title: "Real Estate Developers",
      features: [
        "Pre and Post handover investor dashboard",
        "Real-time project insights and payment scheduling",
        "Proactive service delivery dashboard",
        "Streamlined project management and payment scheduling",
      ],
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
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(74_74_74)] mb-6">
                Blume Space
              </h1> */}
              <img src={blumeSpaceLogo} alt="Blume Space Logo" className="w-96 mx-auto mb-6"/>
              <h2 className="text-2xl md:text-3xl text-corporate-gray mb-8">
                UAE's first communication and property management platform.
              </h2>
              <p className="text-lg md:text-xl text-corporate-gray leading-relaxed mb-8">
                Experience the power of transparent, user-centric property
                management with Blume Space. Discover how Blume Space can
                transform your real estate operations.
              </p>
              <p className="text-lg text-corporate-gray font-medium">
                Let’s build the future of digital engagement together.
              </p>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="relative py-20 bg-muted overflow-hidden">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-12 w-28 h-28 bg-gradient-to-br from-corporate/20 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-16 left-20 w-36 h-36 bg-gradient-to-br from-corporate/15 to-transparent rounded-full blur-2xl animate-pulse delay-1500"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate mb-8 text-center animate-fade-in">
                Why Us?
              </h2>
              <p className="text-lg text-corporate-gray leading-relaxed text-center animate-slide-in-right">
                Blume Space isn’t just another property management platform, it’s
                a transformative digital experience built for transparency,
                control, and convenience in the UAE residential real estate
                sector. Whether you’re a landlord, tenant, real estate developer
                or a property manager, Blume Space empowers you with tools that
                simplify operations and elevate trust.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative md:py-20 py-8 bg-background overflow-hidden">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-24 left-16 w-32 h-32 bg-gradient-to-br from-corporate/20 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-corporate/15 to-transparent rounded-full blur-lg animate-pulse delay-1000"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate mb-12 text-center animate-fade-in">
              Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-large transition-all duration-300 animate-fade-in border-corporate-border"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-corporate/10 rounded-lg flex items-center justify-center group-hover:bg-corporate/20 transition-colors">
                      <benefit.icon className="w-8 h-8 text-corporate" />
                    </div>
                    <CardTitle className="text-2xl text-corporate">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {benefit.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-corporate mt-2 flex-shrink-0"></div>
                          <span className="text-corporate-gray leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  <p className="text-corporate-gray leading-relaxed mt-2">And More...</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative md:py-20 py-8 bg-muted/30 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-8 right-8 lg:w-[400px]  lg:opacity-20 opacity-0">
              <img src={pattern1} alt="" className="w-full select-none" />
            </div>
            <div className="absolute lg:bottom-0 -bottom-20 left-0 w-96 h-96 lg:w-[500px] md:opacity-20 opacity-10 scale-x-[-1]">
              <img src={pattern2} alt="" className="w-full select-none" />
            </div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate mb-8 tracking-wide !leading-[3rem]">
                Join the future of real estate management with Blume Space's
                innovative platform.
              </h2>
              {/* <h2 className="text-3xl md:text-4xl font-bold text-corporate mb-8">
                Ready to Transform Your Property Management?
              </h2> */}
              {/* <p className="text-lg text-corporate-gray mb-8">
                Join the future of real estate management with Blume Space's innovative platform.
              </p> */}
              <Button
                size="lg"
                className="bg-[rgb(74_74_74)] hover:bg-[rgb(74_74_74)]/90 text-corporate-light"
                onClick={() => window.open("https://blume.space", "_blank")}
              >
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlumeSpace;
