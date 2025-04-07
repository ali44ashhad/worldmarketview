import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiChevronDown,
  FiExternalLink,
  FiGlobe,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiTrendingUp,
} from "react-icons/fi";

const Contact = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I start investing with World Market View?",
      answer:
        "Begin by completing our quick online registration process. You'll need your PAN card, Aadhaar details, and bank information. Our platform guides you through each step with clear instructions.",
    },
    {
      question: "What investment options do you offer?",
      answer:
        "We provide access to a wide range of SEBI-registered mutual funds across categories: Equity (large cap, mid cap, small cap), Debt (short term, long term), Hybrid, and Tax-saving (ELSS) funds.",
    },
    {
      question: "How do you ensure the security of my investments?",
      answer:
        "We implement bank-level 256-bit SSL encryption, two-factor authentication, and regular security audits. Your investments are held directly with the respective mutual fund houses under your name.",
    },
    {
      question: "What are your customer support hours?",
      answer:
        "Our investment specialists are available Monday to Friday (9:00 AM to 7:00 PM IST) and Saturday (10:00 AM to 3:00 PM IST). For urgent matters outside these hours, please email help@worldmarketview.com",
    },
    {
      question: "How can I track my portfolio performance?",
      answer:
        "Our dashboard provides real-time tracking of all your investments with detailed analytics, historical performance, and tax implications. You'll receive monthly portfolio statements via email.",
    },
    {
      question: "What makes your advisory services different?",
      answer:
        "Our SEBI-certified research team uses a proprietary 5-factor analysis model combining quantitative metrics, qualitative assessment, risk parameters, cost efficiency, and consistency of performance.",
    },
  ];

  const contactMethods = [
    {
      icon: <FiMail className="text-2xl text-blue-600" />,
      title: "Email Support",
      details: [
        { label: "Customer Support", value: "info@worldmarketview.in" },
        { label: "General Inquiries", value: "info@worldmarketview.com" },
      ],
      action: {
        text: "Email Us",
        link: "mailto:info@worldmarketview.in",
      },
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      icon: <FiPhone className="text-2xl text-green-600" />,
      title: "Phone Support",
      details: [
        { label: "Direct Line", value: "+91 9056764301" },
        { label: "Support Hours", value: "Mon-Fri: 9AM-7PM | Sat: 10AM-3PM" },
      ],
      action: {
        text: "Call Now",
        link: "tel:+919056764301",
      },
      bg: "bg-green-50",
      border: "border-green-200",
    },
    {
      icon: <FiMapPin className="text-2xl text-purple-600" />,
      title: "Our Offices",
      details: [
        {
          label: "Corporate Office & Registered Office",
          value:
            "First-floor, SCO 52, Sector 82, JLPL Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 140308, India",
        },
      ],
      action: {
        text: "View on Map",
        link: "https://maps.google.com",
      },
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-opacity-20"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Connect With Our Investment Experts
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Whether you're starting your investment journey or need portfolio
              guidance, our SEBI-certified advisors are here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919888031436"
                className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition flex items-center shadow-lg"
              >
                <FiPhone className="mr-2" /> Call +91 9056764301
              </a>
              <a
                href="mailto:info@worldmarketview.in"
                className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition flex items-center"
              >
                <FiMail className="mr-2" /> Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred method to reach our investment specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 border ${method.border} ${method.bg} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-white shadow-sm mr-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {method.title}
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  {method.details.map((detail, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium text-gray-500">
                        {detail.label}
                      </p>
                      <p className="text-gray-700">{detail.value}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={method.action.link}
                  className={`inline-flex items-center font-medium ${
                    method.border.includes("blue")
                      ? "text-blue-600 hover:text-blue-800"
                      : method.border.includes("green")
                      ? "text-green-600 hover:text-green-800"
                      : "text-purple-600 hover:text-purple-800"
                  }`}
                >
                  {method.action.text} <FiExternalLink className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Support Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive{" "}
                <span className="text-blue-600">Investment Support</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <FiClock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Personalized Advisory
                    </h3>
                    <p className="text-gray-600">
                      Schedule a 1:1 consultation with our SEBI-certified
                      advisors to review your portfolio and investment strategy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <FiGlobe className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Educational Resources
                    </h3>
                    <p className="text-gray-600">
                      Access our library of investment guides, webinars, and
                      market analysis reports to make informed decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <FiTrendingUp className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Portfolio Review
                    </h3>
                    <p className="text-gray-600">
                      Request a comprehensive portfolio health check with
                      personalized recommendations from our research team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Connect With Our Community
              </h3>

              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/company/104472855/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FiLinkedin className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-sm text-gray-600">
                      Follow for market insights and company updates
                    </p>
                  </div>
                  <FiExternalLink className="ml-auto text-gray-400" />
                </a>

                <a
                  href="https://x.com/WorldMarket06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="bg-blue-400 p-3 rounded-lg mr-4">
                    <FiTwitter className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Twitter</h4>
                    <p className="text-sm text-gray-600">
                      Real-time market commentary and alerts
                    </p>
                  </div>
                  <FiExternalLink className="ml-auto text-gray-400" />
                </a>

                <a
                  href="https://www.youtube.com/YOUR_YOUTUBE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <FiYoutube className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">YouTube</h4>
                    <p className="text-sm text-gray-600">
                      Educational videos and expert interviews
                    </p>
                  </div>
                  <FiExternalLink className="ml-auto text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investment <span className="text-blue-600">Support Center</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about our platform and investment
              services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    className={`w-full p-6 text-left flex items-center justify-between transition ${
                      activeFaqIndex === index
                        ? "bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-medium text-gray-800">
                      {faq.question}
                    </h3>
                    <FiChevronDown
                      className={`text-gray-500 transition-transform duration-200 ${
                        activeFaqIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeFaqIndex === index && (
                    <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Optimize Your Investment Strategy?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Speak with our SEBI-certified advisors today to build a portfolio
            aligned with your financial goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919888031436"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition flex items-center shadow-lg"
            >
              <FiPhone className="mr-2" /> Call +91 9056764301
            </a>
            <a
              href="mailto:info@worldmarketview.in"
              className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition flex items-center"
            >
              <FiMail className="mr-2" /> Email Our Support Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
