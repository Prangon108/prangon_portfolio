import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'education', 'experience', 'projects', 'skills', 'achievements'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-teal-50/95 backdrop-blur-xl border-b border-teal-300/30 shadow-lg' 
        : 'bg-teal-50/90 backdrop-blur-lg'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">PT</span>
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Prangon Talukdar
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <ul className={`hidden md:flex items-center space-x-1`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                    activeSection === link.id
                      ? 'text-teal-700 bg-teal-100/50'
                      : 'text-teal-700 hover:text-teal-600 hover:bg-teal-50/50'
                  }`}
                >
                  <span className="text-sm font-medium">
                    {link.label}
                  </span>
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-teal-100/50 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-teal-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-teal-700 my-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-teal-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <ul className="flex flex-col space-y-2 pt-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                    activeSection === link.id
                      ? 'text-teal-700 bg-teal-100/50 font-semibold'
                      : 'text-teal-700 hover:text-teal-600 hover:bg-teal-50/50'
                  }`}
                >
                  <span className="font-medium">{link.label}</span>
                  {activeSection === link.id && (
                    <span className="ml-auto w-2 h-2 bg-teal-500 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
