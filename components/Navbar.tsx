import React, { useState, useEffect } from 'react';
import { DATA } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { Globe, Menu, X, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = DATA[language].nav;
  const linkKeys = Object.keys(navLinks) as Array<keyof typeof navLinks>;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'py-3 shadow-xl' : 'py-4'
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(253, 251, 247, 0.98)' 
            : 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(8px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110"
                style={{
                  background: isScrolled 
                    ? 'linear-gradient(135deg, #2E7D32, #66BB6A)' 
                    : 'rgba(102, 187, 106, 0.9)'
                }}
              >
                <span className="text-white text-xl font-bold">☕</span>
              </div>
            </div>
            <span 
              className="text-xl md:text-2xl font-bold tracking-tight transition-all duration-300"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                color: isScrolled ? '#2C1810' : '#FFFFFF',
                textShadow: isScrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.5)'
              }}
            >
              COFFEE CYCLE
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {linkKeys.map((key) => (
              <a
                key={String(key)}
                href={`#${String(key)}`}
                onClick={() => setActive(String(key))}
                className="relative text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:scale-105"
                style={{
                  color: active === String(key)
                    ? (isScrolled ? '#2E7D32' : '#FFFFFF')
                    : (isScrolled ? '#6D4C41' : 'rgba(255, 255, 255, 0.85)'),
                  fontFamily: "'Inter', sans-serif",
                  textShadow: isScrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.5)'
                }}
              >
                {navLinks[key]}
                {active === String(key) && (
                  <span 
                    className="absolute bottom-[-6px] left-0 h-[3px] rounded-full transition-all duration-300"
                    style={{
                      width: '100%',
                      background: isScrolled 
                        ? 'linear-gradient(90deg, #2E7D32, #66BB6A)' 
                        : '#FFFFFF'
                    }}
                  />
                )}
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: isScrolled ? 'rgba(46, 125, 50, 0.1)' : 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)'
              }}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" style={{ color: isScrolled ? '#2E7D32' : '#FFD54F' }} />
              ) : (
                <Moon className="w-5 h-5" style={{ color: isScrolled ? '#2C1810' : '#FFFFFF' }} />
              )}
            </button>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
                boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)'
              }}
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'vn' ? '🇻🇳 VN' : '🇬🇧 EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg transition-all duration-300 hover:scale-110"
            style={{
              background: isScrolled ? 'rgba(46, 125, 50, 0.1)' : 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(8px)'
            }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: isScrolled ? '#2C1810' : '#FFFFFF' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: isScrolled ? '#2C1810' : '#FFFFFF' }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 z-50 lg:hidden transition-transform duration-300 shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: 'linear-gradient(135deg, #FDFBF7 0%, #F5F5DC 100%)' }}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#2C1810' }}>
              Menu
            </span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-black/5 transition-colors"
            >
              <X className="w-6 h-6" style={{ color: '#2C1810' }} />
            </button>
          </div>

          <nav className="flex flex-col gap-3 mb-8">
            {linkKeys.map((key) => (
              <a
                key={String(key)}
                href={`#${String(key)}`}
                onClick={() => {
                  setActive(String(key));
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-bold uppercase tracking-wide py-3 px-5 rounded-xl transition-all duration-300"
                style={{
                  color: active === String(key) ? '#FFFFFF' : '#6D4C41',
                  background: active === String(key) ? 'linear-gradient(135deg, #2E7D32, #66BB6A)' : 'rgba(46, 125, 50, 0.05)',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {navLinks[key]}
              </a>
            ))}
          </nav>

          <button 
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="mt-auto flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-white shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #2E7D32, #66BB6A)'
            }}
          >
            <Globe className="w-5 h-5" />
            <span>{language === 'vn' ? 'Switch to English' : 'Chuyển sang TV'}</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
