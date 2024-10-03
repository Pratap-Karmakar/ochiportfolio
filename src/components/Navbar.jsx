import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5"; // Menu and Close icons
import logo from '../assets/images/logo.jpeg';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ["Services", "Our Work", "About Us", "Insights", "Contact"];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full fixed z-50 px-6 md:px-20 py-4 md:py-8 bg-zinc-900 text-white font-['Neue Montreal'] flex justify-between items-center">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" className="w-10 md:w-12 h-auto rounded-full" />
      </div>

      {/* Menu for larger screens */}
      <div className="hidden md:flex links gap-10">
        {navLinks.map((item, index) => (
          <a
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className={`text-lg capitalize font-light ${index === 4 && "ml-16 lg:ml-32"}`}
            key={index}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col justify-center items-center">
          {/* Close button inside the mobile menu */}
          <button
            className="absolute top-5 right-5 text-4xl text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <IoClose />
          </button>
          {navLinks.map((item, index) => (
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-2xl capitalize font-light mb-8"
              key={index}
              onClick={toggleMobileMenu} // Close menu on link click
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
