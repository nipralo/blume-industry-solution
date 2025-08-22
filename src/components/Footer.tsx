import logo from "@/assets/Blis_logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-corporate text-corporate-light py-12 max-w-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <p className="text-sm text-corporate-light/80 leading-relaxed md:max-w-[70%]">
              We empower industries by delivering innovative digital solutions
              that transform operations, enhance user experiences, and unlock
              sustainable growth.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-corporate-light">Quick Links</h4>
            <ul className="space-y-2 text-sm text-corporate-light/80">
              <li>
                <a
                  href="/"
                  className="hover:text-corporate-light transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="hover:text-corporate-light transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="/blume-space"
                  className="hover:text-corporate-light transition-colors"
                >
                  Blume Space
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-corporate-light transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-corporate-light transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
         
          <div className="space-y-4">
            <h4 className="font-semibold text-corporate-light">Contact</h4>
            <div className="space-y-2 text-sm text-corporate-light/80">
              <p>United Arab Emirates</p>
              <a href="mailto:info@blis.ae" className="block hover:underline">info@blis.ae</a>
              <a href="tel:+971 XX XXX XXX" className="block hover:underline">+971 XX XXX XXXX</a>
            </div>
          </div>
        </div> */}

        <ul className="gap-4 gap-x-12 flex w-full text-sm text-corporate-light/80 flex-wrap">
          <li>
            <a
              href="/"
              className="hover:text-corporate-light transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/industries"
              className="hover:text-corporate-light transition-colors"
            >
              Industries
            </a>
          </li>
          <li>
            <a
              href="/blume-space"
              className="hover:text-corporate-light transition-colors"
            >
              Blume Space
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-corporate-light transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-corporate-light transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="mt-8 pt-8 border-t border-corporate-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-corporate-light/80">
              © {currentYear} Blume Industry Solutions LLC. All rights reserved.
              Designed and Developed by{" "}
              <a
                href="https://nipralo.com/"
                className="hover:text-corporate-light"
                target="_blank"
              >
                Nipralo Technologies
              </a>
            </p>
            <div className="text-sm text-corporate-light/80">
              {/* <a
                href="#"
                className="hover:text-corporate-light transition-colors"
              >
                Privacy Policy
              </a> */}
              {/* <a
                href="#"
                className="hover:text-corporate-light transition-colors"
              >
                Terms of Service
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
