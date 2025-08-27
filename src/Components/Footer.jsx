import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 mt-16 bg-bg border-t border-border text-text-muted">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="font-extrabold text-xl text-primary">
          LinkTrim
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-sm justify-center">
          <a href="#features" className="hover:text-primary transition">Features</a>
          <a href="#how" className="hover:text-primary transition">How it works</a>
          <a href="#faq" className="hover:text-primary transition">FAQ</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} LinkTrim. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
