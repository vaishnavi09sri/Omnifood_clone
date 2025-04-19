import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-amber-50 py-6 px-4 sm:px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto"> {/* Controls width and centers */}
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="text-4xl font-extrabold text-black no-underline">
              OMNIF<span className="text-orange-500">∞</span>D
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/how-it-works" className="text-lg text-black hover:text-orange-500 no-underline">
              How it works
            </a>
            <a href="/meals" className="text-lg text-black hover:text-orange-500 no-underline">
              Meals
            </a>
            <a href="/testimonials" className="text-lg text-black hover:text-orange-500 no-underline">
              Testimonials
            </a>
            <a href="/pricing" className="text-lg text-black hover:text-orange-500 no-underline">
              Pricing
            </a>
            
            {/* Call to Action Button with white text */}
            <a href="/signup" className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 focus:outline-none transition duration-300 no-underline">
              Try for free
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button className="text-black focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
