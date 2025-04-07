import { FiTrendingUp } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg mr-3">
                <FiTrendingUp className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">WorldMarketView</h3>
            </div>
            <div className="mb-4 text-sm space-y-2">
              <p>
                Making mutual fund investing simple and accessible for everyone.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61566368519744"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/WorldMarket06"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/worldmarketview01/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://t.me/indian_stock_market_news_01"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/104472855/admin/dashboard/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about-us"
                  className="hover:text-white text-sm transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="contact-us"
                  className="hover:text-white text-sm transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms-and-conditions"
                  className="hover:text-white text-sm transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-4 text-sm">
              Registered Office
            </h4>
            <address className="not-italic text-sm">
              <p className="text-gray-400">Sco. 52 First Floor,</p>
              <p className="text-gray-400">Jlpl Sector 82,</p>
              <p className="text-gray-400">Mohali 140308</p>
              <p className="mt-4 text-gray-400">
                <span className="font-medium text-gray-300">Email:</span>{" "}
                info@worldmarketview.in
              </p>
              <p className="text-gray-400">
                <span className="font-medium text-gray-300">Phone:</span> +91
                9056764301
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} WorldMarketView. All rights reserved.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-center sm:text-left">
              <div className="text-gray-400">
                <p>NSE: MFS00808 | BSE: 61240</p>
                <p>BSE Star MF: 61240</p>
              </div>
              <div className="text-gray-400">
                <p>AMFI Registration No.: ARN-300808</p>
                <p>GSTIN: 03AAEFW1947N1ZV</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>
              Mutual fund investments are subject to market risks. Please read
              all scheme related documents carefully before investing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
