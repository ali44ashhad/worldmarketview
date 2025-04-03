import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/wmv.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-gray-900 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="container mx-auto flex justify-between items-center p-4 relative">
          <a href="/">
            <img src={logo} className="w-10 h-10" alt="" />
          </a>
          {/* Desktop Menu */}
          <nav className="hidden items-center md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-blue-400">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-blue-400">
              Contact
            </Link>
            <Link
              to="https://fundzz.my-portfolio.co.in/app/#/login"
              target="_blank"
            >
              <p className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Login/Sign Up
              </p>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 w-1/2 bg-gray-800 text-white shadow-lg flex flex-col space-y-4 p-4 z-50">
          <Link
            to="/"
            className="hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

// Apply padding-top to the main content to prevent overlap
// Example: <div className="pt-16">Your Page Content</div>
