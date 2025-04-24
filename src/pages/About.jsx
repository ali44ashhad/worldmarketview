import React from "react";
import {
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiAward,
  FiPieChart,
  FiHelpCircle,
  FiDollarSign,
} from "react-icons/fi";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
      <Helmet>
        {/* SEO Meta Tags */}
        <title>
          About WorldMarketView - Empowering Investors with Transparent
          Investment Solutions
        </title>
        <meta
          name="description"
          content="Discover the story, mission, and leadership behind WorldMarketView. Learn how we empower investors with transparent and commission-free investment solutions."
        />
        <meta
          name="keywords"
          content="investment solutions, commission-free investing, mutual funds, financial education, investor success, transparency in investments"
        />
        <meta
          property="og:title"
          content="About WorldMarketView - Empowering Investors with Transparent Investment Solutions"
        />
        <meta
          property="og:description"
          content="Explore the mission and values of WorldMarketView, an investment platform that prioritizes transparency, education, and investor success."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.worldmarketview.in/about"
        />
        <meta
          property="og:image"
          content="https://www.worldmarketview.in/images/logo.png"
        />
        <meta
          name="twitter:title"
          content="About WorldMarketView - Empowering Investors"
        />
        <meta
          name="twitter:description"
          content="Learn about WorldMarketView's mission, leadership, and how we help investors make smarter, commission-free investment decisions."
        />
        <meta
          name="twitter:image"
          content="https://www.worldmarketview.in/images/logo.png"
        />
        <link rel="canonical" href="https://www.worldmarketview.in/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 relative overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About WorldMarketView
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Empowering investors with smart, transparent, and commission-free
            investment solutions
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2024, WorldMarketView began with a simple mission: to
                make investing accessible to everyone. Our team of financial
                experts saw how complicated the investment landscape had become,
                with high fees and confusing options keeping many people from
                building wealth.
              </p>
              <p className="text-gray-600 mb-4">
                We set out to create a platform that would simplify investing
                while providing the tools and education needed to make informed
                decisions. Today, we serve many investors across India, helping
                them achieve their financial goals through smart mutual fund
                investments.
              </p>
              <p className="text-gray-600">
                What sets us apart is our commitment to transparency, education,
                and putting investors first. We don't earn commissions on your
                investments, so our incentives are always aligned with yours.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiTrendingUp className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2024</h3>
                  <p className="text-gray-600 text-sm">Year Founded</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiUsers className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">10k+</h3>
                  <p className="text-gray-600 text-sm">Investors</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiDollarSign className="text-purple-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">----</h3>
                  <p className="text-gray-600 text-sm">Assets Under Advisory</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiAward className="text-amber-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">----</h3>
                  <p className="text-gray-600 text-sm">Industry Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our <span className="text-blue-600">Mission</span> & Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="bg-blue-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <FiTrendingUp className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Investor Success</h3>
              <p className="text-gray-600">
                We measure our success by our investors' success. Every feature,
                recommendation, and piece of content is designed to help you
                achieve your financial goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="bg-green-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <FiShield className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees, no conflicts of interest. We're committed to
                complete transparency in how we operate and how we're
                compensated.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="bg-purple-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <FiPieChart className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Financial Education
              </h3>
              <p className="text-gray-600">
                We believe an educated investor is a successful investor. That's
                why we provide comprehensive education resources at no cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Meet Our <span className="text-blue-600">Leadership</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The experienced team guiding WorldMarketView's vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all transform hover:-translate-y-1 text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-blue-600">
                CK
              </div>
              <h3 className="text-xl font-semibold mb-1">Chander Kala</h3>
              <p className="text-blue-600 mb-4">Founder</p>
              <p className="text-gray-600 text-sm">
                With over 25 years of experience in asset management, we deliver
                trusted, expert-driven financial solutions tailored to your
                goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all transform hover:-translate-y-1 text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-100 to-teal-100 mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-green-600">
                JJ
              </div>
              <h3 className="text-xl font-semibold mb-1">Jatin Jain</h3>
              <p className="text-blue-600 mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                With 5 years' experience, we analyze market trends, evaluate
                mutual funds, and build portfolios for consistent returns and
                financial growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to invest with confidence?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join us ( WorldMarketView ) for trust and believe to gain your
            mutual fund investments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition flex items-center mx-auto shadow-lg">
              <a
                className="flex items-center justify-center"
                href="https://fundzz.my-portfolio.co.in/app/#/login"
                target="_blank"
              >
                Start Investing Now <FiTrendingUp className="ml-2" />
              </a>
            </button>
            <button className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition flex items-center mx-auto">
              <a
                className="flex items-center justify-center"
                href="https://fundzz.com"
                target="_blank"
              >
                Learn More <FiHelpCircle className="ml-2" />
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
