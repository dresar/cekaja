
import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Tentang Saya', href: '#tentang' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="py-6 flex justify-between items-center z-20 sticky top-0 bg-[#050508]/80 backdrop-blur-sm">
      <a href="#" className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-500">
        Portfolio.dev
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors duration-300">
            {link.name}
          </a>
        ))}
      </nav>
      <button className="md:hidden text-slate-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </header>
  );
};

export default Header;
