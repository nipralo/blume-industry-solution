import partnershipsImage from "@/assets/partnerships.jpg";

const PartnershipsSection = () => {
  return (
    <section className="py-20  bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in md:col-span-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-corporate mb-6">
                Trusted Partnerships
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-corporate-gray leading-relaxed">
                By establishing partnerships with industry leading brands from
                various industries, we strive towards delivering robust,
                efficient digital solutions tailored to our client's
                needs-ensuring quality, reliability, and seamless integrations
                every time.
              </p>

              {/* <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-corporate-gray"></div>
                    <p className="text-corporate-gray font-semibold">
                      Industries Supported
                    </p>
                  </div>
                  <ul className="text-corporate-gray list-disc pl-8 mt-2">
                    <li>Logistics</li>
                    <li>Manufacturing</li>
                    <li>Retail</li>
                    <li>Healthcare</li>
                    <li>Automotive</li>
                  </ul>
                </div>
                <div className="text-center p-4 border border-corporate-border rounded-2xl hover:shadow-soft transition-all duration-300 flex flex-col justify-center items-center">
                  <div className="text-[44px] font-bold text-corporate mb-1">
                    40+
                  </div>
                  <div className="text-sm text-corporate-gray">
                    Certified Industry Specialists
                  </div>
                </div>
              </div> */}
            </div>

            {/* <div className="pt-4">
              <button className="px-6 py-3 border-2 border-corporate text-corporate font-medium rounded-md hover:bg-corporate hover:text-corporate-light transition-all duration-300">
                View Our Partners
              </button>
            </div> */}
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right md:col-span-2">
            <div className="relative overflow-hidden rounded-lg shadow-large">
              <img
                src={partnershipsImage}
                alt="Trusted Partnerships - Business Meeting"
                className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
