import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center items-center pt-5">
        <hr />
        <h3>&copy; {new Date().getFullYear()} Sniply. All rights reserved.</h3>
        <h3>Developed by <a target="_blank" rel="noreferrer" className='font-bold underline text-blue-500' href="https://devseiko.vercel.app">MECHSEIKO</a></h3>
    </footer>
  );
};

export default Footer;
