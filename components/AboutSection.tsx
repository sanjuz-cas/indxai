import React, { useState, useEffect } from 'react';
import { CartIcon, UserCircleIcon } from './Icons';

const NavLink: React.FC<{ children: React.ReactNode; href: string; isActive: boolean }> = ({ children, href, isActive }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.slice(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider cursor-pointer ${
        isActive ? 'text-white border-b border-white/70' : 'text-gray-400 hover:text-white'
      }`}
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800/50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={handleLogoClick} className="inline-block">
              <div className="bg-orange-500 px-4 py-2 rounded">
                <span 
                  className="text-black text-xl md:text-2xl font-black tracking-wider"
                  style={{ fontFamily: "'Bungee', sans-serif" }}
                >
                  INDXAI
                </span>
              </div>
            </a>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-6">
              <NavLink href="#home" isActive={activeSection === 'home'}>HOME</NavLink>
              <NavLink href="#about" isActive={activeSection === 'about'}>ABOUT</NavLink>
              <NavLink href="#contact" isActive={activeSection === 'contact'}>CONTACT</NavLink>
            </div>
          </div>
          <div className="flex-shrink-0 w-[120px]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;