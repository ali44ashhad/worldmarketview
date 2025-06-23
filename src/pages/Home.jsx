import React, { useState } from "react";
import {
  FiTrendingUp,
  FiShield,
  FiPieChart,
  FiDollarSign,
  FiBarChart2,
  FiArrowRight,
  FiCheck,
  FiPlus,
  FiMinus,
  FiChevronRight,
  FiHelpCircle,
} from "react-icons/fi";
import { Helmet } from "react-helmet";
// Finance-themed illustrations (using emojis as placeholders)
const FinanceIllustrations = {
  hero: "📈",
  equity: "🚀",
  debt: "🛡️",
  hybrid: "⚖️",
  investment: "💼",
  growth: "🌱",
  success: "🏆",
};

const Home = () => {
  // SIP Calculator State
  const [sipAmount, setSipAmount] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(5);
  const [futureValue, setFutureValue] = useState(0);

  // FAQ State
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const calculateSIP = () => {
    const monthlyRate = returnRate / 100 / 12;
    const months = timePeriod * 12;
    const fv =
      sipAmount *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    setFutureValue(Math.round(fv));
  };

  // FAQ Data
  const faqs = [
    {
      question: "What is the minimum amount to start investing?",
      answer:
        "You can start investing in mutual funds with as little as ₹500 through SIP or ₹1000 for lump sum investments.",
    },
    {
      question: "How do I choose the right mutual fund?",
      answer:
        "We provide expert-curated recommendations based on your financial goals, risk appetite, and investment horizon. You can also use our fund selector tool.",
    },
    {
      question: "Are mutual funds safe?",
      answer:
        "Mutual funds are subject to market risks, but they are regulated by SEBI and offer diversification. Debt funds are generally less risky than equity funds.",
    },
    {
      question: "What is the difference between SIP and lump sum?",
      answer:
        "SIP (Systematic Investment Plan) allows you to invest a fixed amount regularly, while lump sum is a one-time investment. SIP helps in rupee cost averaging.",
    },
    {
      question: "How do I track my investments?",
      answer:
        "You can track all your investments in real-time through our dashboard which shows performance, returns, and other details of your portfolio.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
      <Helmet>
        {/* SEO Meta Tags */}
        <title>
          WorldMarketView - Your Investment Platform for Financial Success
        </title>
        <meta
          name="description"
          content="WorldMarketView is a leading platform for investment insights, mutual funds, stock market tips, and financial advisory. Join us today to secure your financial future."
        />
        <meta
          name="keywords"
          content="investment platform, financial advisory, mutual funds, stock market, financial success, investment tips, finance website"
        />
        <meta
          property="og:title"
          content="WorldMarketView - Your Investment Platform"
        />
        <meta
          property="og:description"
          content="Explore expert investment insights, mutual funds, stock market updates, and personalized financial advice with WorldMarketView."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.worldmarketview.in" />
        <meta
          property="og:image"
          content="https://www.worldmarketview.in/images/logo.png"
        />
        <meta
          name="twitter:title"
          content="WorldMarketView - Your Investment Platform"
        />
        <meta
          name="twitter:description"
          content="Unlock your financial potential with WorldMarketView’s investment platform, offering expert advice, tips, and resources for your financial growth."
        />
        <meta
          name="twitter:image"
          content="https://www.worldmarketview.in/images/logo.png"
        />
        <link rel="canonical" href="https://www.worldmarketview.in" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 relative overflow-hidden">
        <div className="absolute hidden md:block top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-20 text-9xl">
            {FinanceIllustrations.hero}
          </div>
          <div className="absolute bottom-10 left-10 text-8xl opacity-50">
            {FinanceIllustrations.growth}
          </div>
        </div>
        <div className="container max-w-[1200px] mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Smart Investing <br />
                For Your Financial Future
              </h1>
              <p className="text-lg mb-8 opacity-90 max-w-md mx-auto md:mx-0">
                Start your investment journey with expert-curated mutual funds
                and grow your wealth systematically with our zero-commission
                platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-center shadow-lg transform hover:-translate-y-1">
                  <a
                    className="flex items-center justify-center"
                    href="https://fundzz.my-portfolio.co.in/app/#/login"
                    target="_blank"
                  >
                    Start Investing Now <FiArrowRight className="ml-2" />
                  </a>
                </button>

                <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                  <a
                    className="flex justify-center items-center"
                    href="/about-us"
                    title="Explore Fundzz for more information about investment opportunities"
                    target="_blank"
                  >
                    Learn more about our investment platform{" "}
                    <FiChevronRight className="ml-2" />
                  </a>
                </button>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center w-full">
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm w-full max-w-md md:max-w-lg border border-white/20 shadow-xl">
                <div className="bg-white text-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <FiBarChart2 className="text-blue-600 mr-2" /> SIP
                    Calculator
                  </h3>
                  <div className="space-y-6">
                    {/* SIP Amount */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Monthly Investment (₹)
                      </label>
                      <input
                        type="range"
                        className="w-full mb-2 accent-blue-600"
                        min="500"
                        max="100000"
                        step="500"
                        value={sipAmount}
                        onChange={(e) => setSipAmount(parseInt(e.target.value))}
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>₹500</span>
                        <span>₹1,00,000</span>
                      </div>
                      <div className="text-center mt-2 font-medium text-blue-600">
                        ₹{sipAmount.toLocaleString()}
                      </div>
                    </div>

                    {/* Expected Return */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Expected Return (p.a.)
                      </label>
                      <input
                        type="range"
                        className="w-full mb-2 accent-blue-600"
                        min="1"
                        max="30"
                        step="1"
                        value={returnRate}
                        onChange={(e) =>
                          setReturnRate(parseInt(e.target.value))
                        }
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>1%</span>
                        <span>30%</span>
                      </div>
                      <div className="text-center mt-2 font-medium text-blue-600">
                        {returnRate}%
                      </div>
                    </div>

                    {/* Time Period */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Time Period (years)
                      </label>
                      <input
                        type="range"
                        className="w-full mb-2 accent-blue-600"
                        min="1"
                        max="30"
                        step="1"
                        value={timePeriod}
                        onChange={(e) =>
                          setTimePeriod(parseInt(e.target.value))
                        }
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>1Y</span>
                        <span>30Y</span>
                      </div>
                      <div className="text-center mt-2 font-medium text-blue-600">
                        {timePeriod} Years
                      </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-md hover:opacity-90 font-medium shadow-md transition-opacity"
                      onClick={calculateSIP}
                    >
                      Calculate Returns
                    </button>

                    {/* Result Display */}
                    {futureValue > 0 && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-md text-center border border-blue-100">
                        <p className="text-sm text-gray-600">
                          Estimated Returns
                        </p>
                        <p className="text-2xl font-bold text-blue-600">
                          ₹{futureValue.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Invested Amount: ₹
                          {(sipAmount * timePeriod * 12).toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-center border border-blue-100 transform hover:-translate-y-1 transition-transform">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">10k+</h3>
              <p className="text-gray-600 text-sm font-medium">
                Happy Investors
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 text-center border border-green-100 transform hover:-translate-y-1 transition-transform">
              <h3 className="text-3xl font-bold text-green-600 mb-2">---Cr</h3>
              <p className="text-gray-600 text-sm font-medium">
                Assets Under Advisory
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 text-center border border-purple-100 transform hover:-translate-y-1 transition-transform">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">100%</h3>
              <p className="text-gray-600 text-sm font-medium">
                SEBI Registered
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 text-center border border-amber-100 transform hover:-translate-y-1 transition-transform">
              <h3 className="text-3xl font-bold text-amber-600 mb-2">25+</h3>
              <p className="text-gray-600 text-sm font-medium">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-12">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our <span className="text-blue-600">Investment Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of investment options tailored to your
              financial goals and risk appetite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Equity Funds Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl mr-4 text-2xl">
                    {FinanceIllustrations.equity}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Equity Funds
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  Invest in stocks of companies with high growth potential.
                  Ideal for long-term wealth creation (5+ years).
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>Higher returns potential</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>Tax efficient</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>Beat inflation</span>
                  </div>
                </div>

                <a
                  href="/"
                  title="Learn more about our investment solutions on Fundzz"
                  target="_blank"
                >
                  <h3 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 flex items-center justify-center text-sm font-medium shadow-md transition-opacity">
                    Explore <FiArrowRight className="ml-2" />
                  </h3>
                </a>
              </div>
            </div>

            {/* Debt Funds Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-xl mr-4 text-2xl">
                    {FinanceIllustrations.debt}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Debt Funds
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  Lower risk investments in fixed income instruments. Suitable
                  for conservative investors and short-term goals.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>Stable returns</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>Lower risk</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>Better than FDs</span>
                  </div>
                </div>

                <a
                  href="/"
                  title="Learn more about our investment solutions on Fundzz"
                  target="_blank"
                >
                  <h3 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 flex items-center justify-center text-sm font-medium shadow-md transition-opacity">
                    Explore <FiArrowRight className="ml-2" />
                  </h3>
                </a>
              </div>
            </div>

            {/* Hybrid Funds Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-4 rounded-xl mr-4 text-2xl">
                    {FinanceIllustrations.hybrid}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Hybrid Funds
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  Balanced portfolio with mix of equity and debt. Best of both
                  worlds for moderate investors with medium-term goals.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>Diversified portfolio</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>Moderate risk</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>Auto rebalancing</span>
                  </div>
                </div>
                <a
                  href="/"
                  title="Learn more about our investment solutions on Fundzz"
                  target="_blank"
                >
                  <h3 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 flex items-center justify-center text-sm font-medium shadow-md transition-opacity">
                    Explore <FiArrowRight className="ml-2" />
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              How <span className="text-blue-600">WorldMarketView</span> Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start investing in mutual funds in just a few minutes with our
              simple process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 transform hover:-translate-y-1 transition-transform">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Sign Up</h3>
              <p className="text-gray-600 text-sm">
                Create your account with basic details and complete KYC
                verification in minutes.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 transform hover:-translate-y-1 transition-transform">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Select Funds</h3>
              <p className="text-gray-600 text-sm">
                Choose from expert-recommended funds based on your goals and
                risk profile.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 transform hover:-translate-y-1 transition-transform">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Start Investing</h3>
              <p className="text-gray-600 text-sm">
                Invest via SIP or lump sum with secure payment methods. Track
                your portfolio easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose <span className="text-blue-600">WorldMarketView</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make mutual fund investing simple, transparent, and rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                  <FiTrendingUp className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">
                    Expert Research Team
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our team of analysts with high qualification who selects the
                    best funds for you using rigorous research methodologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 text-green-600">
                  <FiDollarSign className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">
                    Zero Commission
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Invest in direct mutual funds with no hidden charges. We
                    don't take any commission, so you keep more of your returns.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4 text-purple-600">
                  <FiPieChart className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">
                    Portfolio Tracking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Monitor all your investments in one intuitive dashboard with
                    real-time updates, performance analytics, and tax insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4 text-amber-600">
                  <FiShield className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Tax Saving</h3>
                  <p className="text-gray-600 text-sm">
                    ELSS funds that help you save tax under 80C while building
                    wealth. Get automated tax reports for easy filing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What Our <span className="text-blue-600">Investors</span> Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by many investors across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center mr-4 text-blue-600 font-bold">
                  RS
                </div>
                <div>
                  <h4 className="font-semibold">Rahul Sharma</h4>
                  <p className="text-gray-500 text-sm">Investor since 2018</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "WorldMarketView helped me start my investment journey with
                simple SIPs. Their recommendations have given me 18% annual
                returns over 3 years."
              </p>
              <div className="mt-4 flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-100 to-teal-100 flex items-center justify-center mr-4 text-green-600 font-bold">
                  PP
                </div>
                <div>
                  <h4 className="font-semibold">Priya Patel</h4>
                  <p className="text-gray-500 text-sm">Investor since 2020</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "As a beginner, I was confused about mutual funds. Their
                educational content and simple interface made investing easy for
                me."
              </p>
              <div className="mt-4 flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-violet-100 flex items-center justify-center mr-4 text-purple-600 font-bold">
                  AJ
                </div>
                <div>
                  <h4 className="font-semibold">Amit Joshi</h4>
                  <p className="text-gray-500 text-sm">Investor since 2016</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "The portfolio tracking feature is excellent. I can see all my
                investments across different funds in one place with detailed
                analytics."
              </p>
              <div className="mt-4 flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about mutual fund investing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all"
                >
                  <button
                    className="w-full p-4 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-medium text-gray-800">
                      {faq.question}
                    </h3>
                    {activeIndex === index ? (
                      <FiMinus className="text-gray-500" />
                    ) : (
                      <FiPlus className="text-gray-500" />
                    )}
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 pt-0 text-gray-600 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-20 text-9xl">
            {FinanceIllustrations.success}
          </div>
        </div>
        <div className="container max-w-[1200px] mx-auto px-4 relative">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start your investment journey?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join us ( WorldMarketView ) for trust and believe to gain your
              mutual fund investments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition flex items-center mx-auto shadow-lg transform hover:-translate-y-1">
                <a
                  className="flex items-center justify-center"
                  href="https://fundzz.my-portfolio.co.in/app/#/login"
                  target="_blank"
                >
                  Sign Up Now <FiArrowRight className="ml-2" />
                </a>
              </button>

              <button className="bg-transparent border-2 border-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition flex items-center mx-auto">
                <a
                  className="flex items-center justify-center"
                  href="/about-us"
                  title="Explore Fundzz for more information about investment opportunities"
                  target="_blank"
                >
                  Learn more about our investment platform{" "}
                  <FiHelpCircle className="ml-2" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
