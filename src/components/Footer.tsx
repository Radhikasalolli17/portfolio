import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Radhika Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-white/40 hover:text-brand-purple transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-white/40 hover:text-brand-purple transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
