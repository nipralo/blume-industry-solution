import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Globe, Lightbulb } from "lucide-react";
import pattern1 from "@/assets/pattern-3.png";
import pattern2 from "@/assets/pattern-r-1.png";
const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To amplify human potential through innovative digital solutions that bring clarity, efficiency, and transparency to every industry we serve.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description:
        "To be the leading provider of user-centric digital ecosystems that transform how businesses and consumers interact in the digital world.",
    },
    // {
    //   icon: Users,
    //   title: "Our Team",
    //   description:
    //     "A diverse group of experts blending industry knowledge with efficient development practices to deliver powerful and intuitive platforms.",
    // },
    // {
    //   icon: Globe,
    //   title: "Our Reach",
    //   description:
    //     "Headquartered in the UAE, we serve clients across the region with plans to extend our innovative solutions globally.",
    // },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pb-22 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-8 left-8 lg:w-[400px]  lg:opacity-20 opacity-0">
              <img src={pattern1} alt="" className="w-full select-none" />
            </div>
            <div className="absolute lg:bottom-0 -bottom-20 right-0 w-96 h-96 lg:w-[500px] md:opacity-20 opacity-10">
              <img src={pattern2} alt="" className="w-full select-none" />
            </div>
          </div>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(74_74_74)] mb-6">
                About Blume Industry Solutions
              </h1>
              <p className="text-xl md:text-2xl text-corporate-gray leading-relaxed">
                We're dedicated to enhancing client experiences via digital solutions
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        {/* <section className="relative py-20 bg-muted/30 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-10 w-28 h-28 bg-gradient-to-br from-corporate/20 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
            <div className="absolute bottom-16 right-20 w-36 h-36 bg-gradient-to-br from-corporate/15 to-transparent rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate mb-8">
                Our Story
              </h2>
              <p className="text-lg text-corporate-gray leading-relaxed mb-6">
                Blume Industry Solutions LLC was founded on the fundamental belief that technology and AI should amplify human potential, not replace it. We are a software solutions firm dedicated to transforming how consumers interact with the digital world.
              </p>
              <p className="text-lg text-corporate-gray leading-relaxed">
                Our custom-built platforms bring clarity, efficiency, and personalization to every industry we serve. We focus on creating digital ecosystems that support transparency, flexibility, and seamless experiences for businesses and their customers.
              </p>
            </div>
          </div>
        </section> */}

        {/* Values Grid */}
        <section className="relative py-20 overflow-hidden bg-muted">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-corporate/20 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-24 right-1/3 w-28 h-28 bg-gradient-to-br from-corporate/15 to-transparent rounded-full blur-lg animate-pulse delay-1500"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate mb-12 text-center animate-fade-in">
              What Drives Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-large transition-all duration-300 animate-fade-in border-corporate-border"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-corporate/10 rounded-lg flex items-center justify-center group-hover:bg-corporate/20 transition-colors">
                        <value.icon className="w-6 h-6 text-corporate" />
                      </div>
                      <CardTitle className="text-xl text-corporate">
                        {value.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-corporate-gray leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        {/* <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-8 right-8 lg:w-[400px]  md:opacity-20 opacity-0">
              <img src={pattern1} alt="" className="w-full select-none" />
            </div>
            <div className="absolute md:bottom-0 -bottom-20 left-0 w-96 h-96 lg:w-[500px] md:opacity-20 opacity-10 scale-x-[-1]">
              <img src={pattern2} alt="" className="w-full select-none" />
            </div>
          </div>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate mb-8">
                Our Commitment
              </h2>
              <p className="text-lg text-corporate-gray leading-relaxed mb-6">
                We are committed to delivering digital solutions that make a
                real difference. Every platform we build is designed with the
                end-user in mind, ensuring that technology serves to enhance
                rather than complicate their experience.
              </p>
              <p className="text-lg text-corporate-gray leading-relaxed">
                As we continue to grow and evolve, our focus remains on creating
                meaningful digital transformations that empower businesses and
                individuals to achieve their goals more effectively.
              </p>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default About;
