import founderImage from "@/assets/founder-meeting.jpg";

const FounderSection = ({ nextSectionRef }) => {
  return (
    <section className="py-20 bg-gradient-subtle" ref={nextSectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in md:col-span-2">
            <div className="relative overflow-hidden rounded-lg shadow-large">
              <img
                src={founderImage}
                alt="Founder & Director"
                className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in-right md:col-span-3">
            <div>
              <div className="flex items-end gap-4 mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-corporate">
                  Founder & Director,
                </h2>
                <p className="text-xl font-semibold text-[rgb(74_74_74)] h-full mb-0">
                  Gaurav Kanchan
                </p>
              </div>
              {/* <h3 className="text-xl font-semibold text-corporate-gray mb-6">
                Gaurav Kanchan
              </h3> */}
            </div>

            <blockquote className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-corporate/20">
                "
              </div>
              <p className="text-lg text-corporate-gray leading-relaxed pl-8 italic">
                Blume Industry Solutions LLC was founded on the belief that
                technology and AI should amplify human potential, not replace
                it. Our team of experts blends industry knowledge with efficient
                development practices to deliver platforms that are both
                powerful and intuitive.
              </p>
              <p className="text-lg text-corporate-gray leading-relaxed pl-8 italic mt-4">
                We focus on creating digital ecosystems that support
                transparency, flexibility, and seamless experiences. With
                headquarters in the UAE, we aim serve clients across the region
                and to extend our services beyond.
              </p>
              <div className="absolute -bottom-4 -right-4 text-6xl text-corporate/20">
                "
              </div>
            </blockquote>

            <div className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-corporate-gray"></div>
                <span className="text-sm text-corporate-gray font-medium">
                  Founder & CEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
