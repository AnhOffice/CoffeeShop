import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { DATA } from '../constants.tsx';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const content = DATA[language].ui.footer;
  const navLinks = DATA[language].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative" style={{ background: 'linear-gradient(135deg, #2C1810 0%, #3E2723 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}>
                <span className="text-white text-xl font-bold">☕</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#FDFBF7' }}>
                COFFEE CYCLE
              </span>
            </div>
            <p className="text-sm mb-6" style={{ color: '#D7CCC8' }}>
              Transforming coffee waste into sustainable art pieces since 2024.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(102, 187, 106, 0.2)' }}>
                <Facebook className="w-5 h-5" style={{ color: '#66BB6A' }} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(102, 187, 106, 0.2)' }}>
                <Instagram className="w-5 h-5" style={{ color: '#66BB6A' }} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(102, 187, 106, 0.2)' }}>
                <Twitter className="w-5 h-5" style={{ color: '#66BB6A' }} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(102, 187, 106, 0.2)' }}>
                <Mail className="w-5 h-5" style={{ color: '#66BB6A' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg" style={{ color: '#FDFBF7', fontFamily: "'Playfair Display', serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {Object.keys(navLinks).map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className="text-sm transition-colors duration-300 hover:text-opacity-100"
                    style={{ color: '#D7CCC8' }}>
                    {navLinks[key as keyof typeof navLinks]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-lg" style={{ color: '#FDFBF7', fontFamily: "'Playfair Display', serif" }}>
              Resources
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: '#D7CCC8' }}>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Our Story</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Sustainability</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-lg" style={{ color: '#FDFBF7', fontFamily: "'Playfair Display', serif" }}>
              Stay Updated
            </h4>
            <p className="text-sm mb-4" style={{ color: '#D7CCC8' }}>
              Subscribe to our newsletter for eco-tips and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full text-sm focus:outline-none"
                style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#FDFBF7', border: '1px solid rgba(255, 255, 255, 0.2)' }}
              />
              <button className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}>
                <Mail className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <p className="text-sm flex items-center gap-1" style={{ color: '#D7CCC8' }}>
            {content.rights} • Made with <Heart className="w-4 h-4 fill-current" style={{ color: '#E57373' }} />
          </p>
          <div className="flex gap-6 text-sm" style={{ color: '#D7CCC8' }}>
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-40"
        style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}>
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
