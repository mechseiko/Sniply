import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-bg border-b border-border shadow-sm z-50">
      {/* Brand */}
      <div className="text-2xl font-extrabold text-primary tracking-tight">
        LinkTrim
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#features" className="text-text hover:text-primary transition">Features</a>
        <a href="#how" className="text-text hover:text-primary transition">How it works</a>
        <a href="#faq" className="text-text hover:text-primary transition">FAQ</a>
      </nav>

      {/* CTA */}
      <div className="hidden md:block">
        <button className="btn-primary hover:shadow-lg transition">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button aria-label="Open menu" className="text-primary text-3xl focus:outline-none">
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;
