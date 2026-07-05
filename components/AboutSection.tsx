import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: "HOME",     id: "home" },
  { label: "PRODUCTS", id: "products" },
  { label: "ABOUT",    id: "about" },
  { label: "CONTACT",  id: "contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Intersection Observer for active section tracking */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${isScrolled
        ? "bg-black/75 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(249,115,22,0.06)]"
        : "bg-transparent"}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="inline-block">
          <div className="relative group cursor-pointer">
            <div
              className="bg-orange-500 rounded-md px-3 py-1 font-bold text-lg tracking-wider transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(249,115,22,0.7)] text-black"
              style={{ fontFamily: "'Bungee', sans-serif", boxShadow: "0 0 12px rgba(249,115,22,0.4)" }}>
              INDXAI
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, id }) => {
            const active = activeSection === id;
            return (
              <a key={id} href={`#${id}`} onClick={(e) => scrollTo(e, id)}
                className={`relative px-4 py-2 text-[11px] font-semibold tracking-[0.15em] transition-all duration-200 rounded-md
                  ${active ? "text-orange-400" : "text-gray-500 hover:text-gray-200 hover:bg-white/[0.04]"}`}>
                {label}
                {active && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/[0.08] py-4 shadow-2xl">
          {navLinks.map(({ label, id }) => (
            <a key={id} href={`#${id}`} onClick={(e) => scrollTo(e, id)}
              className={`block px-6 py-3 text-sm font-mono tracking-widest transition-colors border-b border-white/[0.04]
                ${activeSection === id ? "text-orange-400" : "text-gray-400 hover:text-white"}`}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;