import React from 'react';

const Hero = () => (
  <section className="bg-surface py-10 px-5 text-center border-b border-border">
    <h1 className="text-5xl md:text-6xl text-purple-700 font-extrabold mb-5">
      Sniply
    </h1>
    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
      Trim your links. Share with style.
    </h1>
    <p className="text-text-muted max-w-xl mx-auto">
      A fast, responsive URL shortener built with React and Tailwind CSS. Paste your long link, click shorten, and get a sleek, shareable version instantly.
    </p>
  </section>
);

export default Hero;
