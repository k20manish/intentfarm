import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const timeoutRef = useRef(null);
  const lastScrollY = useRef(0);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-transform duration-300 z-50 bg-white shadow-xl/20 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3 relative">
        {/* Logo */}
        <div className="flex items-center z-20 ml-12">
          <img src="./Intent-farm.svg" alt="Logo" className="h-8 md:h-11" />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden block text-gray-700 focus:outline-none z-20"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isDropdownOpen ? "z-30" : ""
          } ${isMobileMenuOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row md:items-center md:mr-16 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-10 list-none m-0 p-4 md:p-0 md:pl-12 cursor-pointer">
            {/* Digital Ads */}
            <li
              className="relative w-full md:w-auto"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-[#222] hover:text-blue-400 font-semibold no-underline text-xs md:text-lg focus:outline-none w-full md:w-auto py-2 md:py-0">
                Digital Ads
                <svg
                  className="ml-2 w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute md:top-full left-0 md:mt-2 bg-white rounded-xl shadow-[0_4px_8px_-1px_rgba(0,0,0,0.1)] w-full md:w-fit z-30"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col text-[#222] text-xs md:text-base font-medium whitespace-nowrap rounded-md overflow-hidden">
                    <a href="#google-ads" className="px-3 py-1 md:px-4 md:py-2 hover:bg-blue-400 rounded-md flex gap-2">Google Ads</a>
                    <hr className="border-gray-200 my-1" />
                    <a href="#amazon-growth" className="px-3 py-1 md:px-4 md:py-2 hover:bg-blue-400 rounded-md flex gap-2">Amazon Growth</a>
                    <hr className="border-gray-200 my-1" />
                    <a href="#meta-ads" className="px-3 py-1 md:px-4 md:py-2 hover:bg-blue-400 rounded-md flex gap-2">Meta Ads</a>
                    <hr className="border-gray-200 my-1" />
                    <a href="#instagram-ads" className="px-3 py-1 md:px-4 md:py-2 hover:bg-blue-400 rounded-md flex gap-2">Instagram Ads</a>
                    <hr className="border-gray-200 my-1" />
                    <a href="#linkedin-ads" className="px-3 py-1 md:px-4 md:py-2 hover:bg-blue-400 rounded-md flex gap-2">LinkedIn Ads</a>
                  </div>
                </div>
              )}
            </li>

            {/* Other Links */}
            <li className="w-full md:w-auto ml-0 md:ml-3">
              <a href="#case-studies" className="text-[#222] hover:text-blue-400 font-medium no-underline text-xs md:text-lg block py-2 md:py-0">Case Studies</a>
            </li>
            <li className="w-full md:w-auto">
              <a href="#about-us" className="text-[#222] hover:text-blue-400 font-medium no-underline text-xs md:text-lg block py-2 md:py-0">About Us</a>
            </li>
            <li className="w-full md:w-auto">
              <a href="#blogs" className="text-[#222] hover:text-blue-400 font-medium no-underline text-xs md:text-lg block py-2 md:py-0">Blogs</a>
            </li>
            <li className="w-full md:w-auto">
              <a href="#careers" className="text-[#222] hover:text-blue-400 font-medium no-underline text-xs md:text-lg block py-2 md:py-0">Careers</a>
            </li>
            <li className="w-full md:w-auto hidden md:block">
              <a href="#get-in-touch" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-sm no-underline ml-0 md:ml-4 text-lg block text-center">Get In Touch</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
