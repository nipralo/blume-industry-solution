import pattern1 from "@/assets/pattern-3.png"
import pattern2 from "@/assets/pattern-r-1.png"
import pattern3 from "@/assets/pattern-4.png"

const HeroSection = ({handleScroll}) => {
   
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle/80 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-8 lg:w-[400px]  lg:opacity-20 opacity-0">
          <img src={pattern1} alt="" className="w-full select-none"/>
        </div>
        <div className="absolute bottom-8 rotate-90 left-8 lg:w-[400px]  lg:opacity-20 opacity-0">
          <img src={pattern1} alt="" className="w-full select-none"/>
        </div>
        <div className="absolute lg:bottom-0 -bottom-14 right-0 w-96 h-96 lg:w-[500px] opacity-20">
          <img src={pattern2} alt="" className="w-full select-none"/>
        </div>
        <div className="absolute top-[30%] left-[40%] translate-[-50%, -50%] w-96 h-96 lg:w-[700px] 2xl:opacity-20 opacity-0">
          <img src={pattern3} alt="" className="w-full select-none"/>
        </div>
       
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-[600] text-corporate leading-tight animate-fade-in">
            We Empower Industries
          </h1>
          
          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-corporate-gray max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
            We're dedicated to enhancing client experiences via digital solutions
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in [animation-delay:400ms]">
            <a
              href="/industries"
              className="px-8 py-3 bg-corporate border-2 border-corporate text-corporate-light font-medium rounded-2xl hover:bg-corporate/90 transition-all duration-300 shadow-soft hover:shadow-medium"
            >
              Our Services
            </a>
            <a
            href="/contact"
             className="px-8 py-3 border-2 border-corporate text-corporate font-medium rounded-2xl hover:bg-corporate hover:text-corporate-light transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" onClick={handleScroll}>
        <div className="w-6 h-10 border-2 border-corporate-gray rounded-full flex justify-center">
          <div className="w-1 h-3 bg-corporate-gray rounded-full mt-2 animate-pulse"></div>
        </div>
      </button>
    </section>
  );
};

export default HeroSection;