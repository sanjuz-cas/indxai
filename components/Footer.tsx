import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-black pt-16 pb-8 overflow-hidden">
      {/* subtle gradient ceiling */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Col 1 */}
          <div>
            <div className="inline-flex items-center mb-5">
              <div className="bg-orange-500 rounded-md px-3 py-1 text-lg font-bold tracking-wider text-black"
                style={{ fontFamily: "'Bungee', sans-serif", boxShadow: "0 0 15px rgba(249,115,22,0.4)" }}>
                INDXAI
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Where Innovation Meets Design. Transforming businesses with cutting-edge AI solutions
              and highly optimized infrastructure.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a href="mailto:contact@indxai.tech" aria-label="Email"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-gray-500 hover:text-orange-400 hover:border-orange-500/40 transition-all">
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-[0.15em] uppercase text-gray-600 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "Products", id: "products" },
                { label: "About", id: "about" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  {isMainPage ? (
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link to={`/#${link.id}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-[0.15em] uppercase text-gray-600 mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="mt-8 code-pill inline-block">
              contact@indxai.tech
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-mono">
            © {new Date().getFullYear()} Indxai. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs font-mono">
            indxai.tech &nbsp;·&nbsp; Coimbatore, Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
