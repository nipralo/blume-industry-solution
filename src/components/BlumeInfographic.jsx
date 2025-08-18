import VerifiedIcon from "@/assets/verify_5254524.png";
import settingIcon from "@/assets/cogwheel_7399302.png";
import VerifyIcon from "@/assets/verified_12355966.png";
import LayerIcon from "@/assets/Digital-Layer.png";

const BlumeInfographic = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 flex gap-4">

          <div>
            <div className="max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:items-center">
                <div className="w-[80px] h-[80px] max-w-[80px] max-h-[80px] flex items-center justify-center">
                  <img src={VerifiedIcon} alt="verified" width={100}/>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-corporate animate-fade-in">
                  Blume Industry Solutions: <br />
                  Bridging Markets via Digitisation
                </h2>
              </div>
              <p className="text-lg text-corporate-gray leading-relaxed animate-slide-in-right">
                Explore how Blume Industry Solutions integrates diverse
                industries to drive digital transformation and achieve key
                industry digitisation goals.
              </p>
            </div>
          </div>
        </div>

       


          {/* Content Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 py-16">
            {/* Section 1: Diverse Industry Base */}
            <div className="text-white p-6 relative"  style={{background: "#b5b5b5"}}>
                 <img src={settingIcon} alt="verified" width={70} className="mb-4"/>
              <h3 className="text-xl font-semibold mb-4">Diverse Industry Base</h3>
              <p className="text-lg text-corporate leading-relaxed animate-slide-in-right">
                Multiple industries form the essential base, providing the
                diverse environments where Blume Industry Solutions operates to
                unify digital progress.
              </p>
              <p className="number-watermark">1</p>
            </div>

            {/* Section 2: Blume Digital Layer (Center) */}
            <div className="text-white p-6 relative" style={{background: "#4a4a4a"}}>
                 <img src={LayerIcon} alt="verified" width={70} className="mb-4"/>
              <h3 className="text-xl font-semibold mb-4 text-corporate-light">Blume: Digital Layer</h3>
              <p className="text-lg text-corporate-light leading-relaxed animate-slide-in-right">
                Blume Industry Solutions is the core digital layer connecting
                industry parts to streamline transformation and innovation.
              </p>
                <p className="number-watermark" style={{opacity: 0.2}}>2</p>
            </div>

            {/* Section 3: Achieving Unified Industry Digitisation */}
            <div className="text-gray-800 p-6 relative" style={{background: "#b4b4b4"}}>
                 <img src={VerifyIcon} alt="verified" width={70} className="mb-4"/>
              <h3 className="text-xl font-semibold mb-4">
                Achieving Unified 
                Industry Digitisation
              </h3>
              <p className="text-lg text-corporate leading-relaxed animate-slide-in-right">
                Focused on achieving digitisation goals, this layer drives
                efficiency, growth, and the adoption of cutting-edge
                technologies across sectors.
              </p>
                <p className="number-watermark ">3</p>
            </div>
          </div>
        </div>
    </section>
  );
};
export default BlumeInfographic;
