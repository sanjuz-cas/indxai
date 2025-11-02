import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Indxai.</h3>
            <p className="text-gray-400 text-sm">
              Where Innovation Meets Design. Transforming businesses with cutting-edge AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                {isMainPage ? (
                  <a 
                    href="#home" 
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors cursor-pointer"
                  >
                    Home
                  </a>
                ) : (
                  <Link to="/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    Home
                  </Link>
                )}
              </li>
              <li>
                {isMainPage ? (
                  <a 
                    href="#about" 
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors cursor-pointer"
                  >
                    About
                  </a>
                ) : (
                  <Link to="/#about" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    About
                  </Link>
                )}
              </li>
              <li>
                {isMainPage ? (
                  <a 
                    href="#contact" 
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors cursor-pointer"
                  >
                    Contact
                  </a>
                ) : (
                  <Link to="/#contact" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    Contact
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Indxai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
