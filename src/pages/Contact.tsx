import { useState } from "react";
import { Mail, Send, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import pattern1 from "@/assets/pattern-3.png";
import pattern2 from "@/assets/pattern-r-1.png";
import pattern3 from "@/assets/pattern-5.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = window.location.hostname.includes("localhost")
  ? "http://localhost/BLUME-INDUSTRY-VISION/PHP/form.php"
  : window.location.hostname.endsWith(".co.in")
  ? "https://blis.co.in/PHP/form.php"
  : "https://blis.com/PHP/form.php";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Regex patterns
  const emailRegex =
    /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const messageRegex = /^[a-zA-Z0-9@\$&\-\+\s]+$/;
  const nameRegex = /^[a-zA-Z\s'-]+$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (!nameRegex.test(value)) return "Name must be valid";
        return "";
      case "phone":
        if (!value.trim()) return "Phone Number is required";
        if (!phoneRegex.test(value)) return "Phone Number must be valid";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!emailRegex.test(value)) return "Invalid email format";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (!messageRegex.test(value))
          return "Message must be only Alphabet, Number, @, $, &, -, +";
        if (value.length < 10) return "Message must be at least 10 characters";
        if (value.length > 200) return "Message must be under 200 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateAll = () => {
    const newErrors = {};
    for (const field in formData) {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) return;
    setLoading(true); // Start loading

    try {
      toast.info("Sending message, please wait...", { theme: "dark" });

      // console.log(JSON.stringify(formData));
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        //  body: new URLSearchParams(formData),
      });

      const raw = await response.text();
      // console.log("Raw response from PHP:", raw);

      let result;
      try {
        result = JSON.parse(raw);
      } catch (err) {
        console.error("JSON parse error:", err);
        toast.error(
          "Server returned invalid response. Check console for details."
        );
        return;
      }
      if (result.success) {
        toast.success(
          result.message || "Your enquiry has been sent successfully!",
          {
            theme: "dark",
          }
        );

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        setErrors({});
      } else {
        toast.error(
          result.message || "Submission failed. Please try again later.",
          {
            theme: "dark",
          }
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        "There was an error submitting your enquiry, Please try again later.",
        {
          theme: "dark",
        }
      );
    } finally {
      setLoading(false); // End loading
    }
  };

  const contactInfo = [
    // {
    //   icon: MapPin,
    //   title: "Office Address",
    //   details: [
    //     "Blume Industry Solutions LLC",
    //     "Dubai, United Arab Emirates",
    //     "Business Bay District",
    //   ],
    // },
    {
      icon: Mail,
      title: "Email Address",
      href: "mailto",
      details: [
        "info@blis.ae",
      ],
    },
    // {
    //   icon: Phone,
    //   title: "Phone Number",
    //   href: "tel",
    //   details: ["+91 XX XXX XXXX"],
    // },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />

      {/* Hero Section */}
      <section className=" bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 lg:w-[400px]  lg:opacity-20 opacity-0">
            <img src={pattern1} alt="" className="w-full select-none" />
          </div>
          <div className="absolute lg:bottom-0 -bottom-20 right-0 w-96 h-96 lg:w-[500px] md:opacity-20 opacity-10">
            <img src={pattern2} alt="" className="w-full select-none" />
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 pt-44 pb-16 md:pt-44 md:pb-22">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[rgb(74_74_74)] animate-fade-in">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-corporate-gray leading-relaxed animate-fade-in [animation-delay:200ms]">
              Ready to transform your business with innovative digital
              solutions? Get in touch with our team of experts and let's discuss
              how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="absolute md:top-[30%] top-[65%]  right-0 lg:w-[45vw] md:opacity-20 opacity-40">
          <img
            src={pattern3}
            alt=""
            className="w-full select-none scale-x-[-1]"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in lg:col-span-2">
              <div className="bg-card border border-corporate-border rounded-lg lg:p-8 p-4 shadow-soft z-[10] relative">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-6 h-6 text-corporate mr-3" />
                    <h2 className="text-2xl font-bold text-corporate">
                      Send us a Message
                    </h2>
                  </div>
                  <p className="text-corporate-gray">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2">
                   <div className="space-y-1 lg:flex-1">
                      <Label
                        htmlFor="name"
                        className="text-corporate font-medium"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`focus:border-corporate ${
                          errors.name
                            ? "border-red-500"
                            : "border-corporate-border"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                    <div className="space-y-1 lg:flex-1">
                      <Label
                        htmlFor="number"
                        className="text-corporate font-medium"
                      >
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={`focus:border-corporate ${
                          errors.phone
                            ? "border-red-500"
                            : "border-corporate-border"
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1 lg:flex-1">
                      <Label
                        htmlFor="email"
                        className="text-corporate font-medium"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`focus:border-corporate ${
                          errors.email
                            ? "border-red-500"
                            : "border-corporate-border"
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="message"
                      className="text-corporate font-medium"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className={`focus:border-corporate resize-none ${
                        errors.message
                          ? "border-red-500"
                          : "border-corporate-border"
                      }`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-corporate hover:bg-corporate/90 text-corporate-light font-medium py-3 rounded-md transition-all duration-300 shadow-soft hover:shadow-medium disabled:opacity-50"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right lg:col-span-1">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-corporate animate-fade-in">
                  Get in Touch
                </h2>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex space-x-4 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-corporate rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-corporate-light" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-corporate mb-0.5">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <a
                              href={`${info.href}:${detail}`}
                              key={detailIndex}
                              className="text-sm text-corporate-gray"
                            >
                              {detail}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className="text-sm text-corporate-gray"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
