
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-slate-light text-sm font-mono">
      <div className="container mx-auto">
        <p>Designed & Built by Christian Ikirezi</p>
        <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
