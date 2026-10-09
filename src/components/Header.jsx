import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, GraduationCap, Award, Shield } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Departments', id: 'departments' },
    { name: 'Placements', id: 'placements' },
    { name: 'Events', id: 'events' },
    { name: 'Student Portal', id: 'student-portal' },
    { name: 'Campus Tour', id: 'campus-tour' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s ease',
  };

  const topBarStyle = {
    background: '#111827',
    padding: '8px 20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    fontSize: '0.85rem',
    color: '#94a3b8',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    flexWrap: 'wrap'
  };

  const mainNavStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scrolled ? '15px 40px' : '20px 40px',
    background: scrolled ? 'rgba(17, 24, 39, 0.8)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
    transition: 'all 0.3s ease',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer'
  };

  const logoIconStyle = {
    color: '#3b82f6',
  };

  const logoTextStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#f1f5f9',
    letterSpacing: '1px',
    margin: 0
  };

  const navContainerStyle = {
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
  };

  const linkStyle = (id) => ({
    color: activeSection === id ? '#3b82f6' : '#f1f5f9',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'color 0.2s',
    borderBottom: activeSection === id ? '2px solid #3b82f6' : '2px solid transparent',
    paddingBottom: '4px'
  });

  const iconBtnStyle = {
    background: 'none',
    border: 'none',
    color: '#f1f5f9',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <header style={headerStyle}>
      <div style={topBarStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Award size={14} color="#f59e0b" /> NAAC A++ Accredited
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Shield size={14} color="#3b82f6" /> Autonomous Institute
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Award size={14} color="#ef4444" /> NBA Accredited
        </div>
      </div>

      <nav style={mainNavStyle}>
        <div style={logoStyle} onClick={() => scrollToSection('home')}>
          <GraduationCap style={logoIconStyle} size={32} />
          <h1 style={logoTextStyle}>PICT</h1>
        </div>

        <div style={{ display: window.innerWidth > 768 ? 'flex' : 'none', ...navContainerStyle }}>
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              style={linkStyle(link.id)}
              onClick={() => scrollToSection(link.id)}
              onMouseEnter={(e) => { if(activeSection !== link.id) e.target.style.color = '#3b82f6' }}
              onMouseLeave={(e) => { if(activeSection !== link.id) e.target.style.color = '#f1f5f9' }}
            >
              {link.name}
            </div>
          ))}
          <button style={iconBtnStyle} onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div style={{ display: window.innerWidth <= 768 ? 'flex' : 'none', alignItems: 'center', gap: '15px' }}>
          <button style={iconBtnStyle} onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button style={iconBtnStyle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'rgba(17, 24, 39, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          animation: 'slideIn 0.3s ease-out'
        }}>
          {navLinks.map((link) => (
            <div 
              key={link.id}
              style={{
                ...linkStyle(link.id),
                fontSize: '1.1rem',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
