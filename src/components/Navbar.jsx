import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'students', label: 'Students' },
    { id: 'projects', label: 'Projects' },
    { id: 'events', label: 'Events' },
    { id: 'courses', label: 'Courses' },
    { id: 'careers', label: 'Careers' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav style={{
        height: '60px',
        backgroundColor: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          padding: '0 15px', 
          height: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              cursor: 'pointer' 
            }}
          >
            <img
              src="/logo.png"
              alt="AUBRYNT AI Logo"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            />
            <span style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              color: '#2f234f',
              whiteSpace: 'nowrap'
            }}>
              AUBRYNT AI
            </span>
          </div>

          {/* Desktop Menu */}
          <div style={{ display: 'none' }} className="desktop-nav">
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              margin: 0, 
              padding: 0,
              gap: '40px'
            }}>
              {navItems.map((item) => (
                <li key={item.id} style={{ margin: 0, padding: 0, border: 'none' }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '0 0 4px 0',
                      fontSize: '16px',
                      fontWeight: activeSection === item.id ? '500' : '400',
                      color: '#2f234f',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'color 0.2s'
                    }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: '#667eea'
                      }}></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              color: '#2f234f'
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '60px',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            height: 'calc(100vh - 60px)',
            overflow: 'auto',
            display: 'none'
          }} className="mobile-menu">
            <ul style={{ 
              listStyle: 'none', 
              margin: 0, 
              padding: '0',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {navItems.map((item) => (
                <li key={item.id} style={{ margin: '22px 15px 0', padding: 0, border: 'none' }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontSize: '16px',
                      fontWeight: activeSection === item.id ? '500' : '400',
                      color: '#2f234f',
                      cursor: 'pointer',
                      width: '100%',
                      textAlign: 'left'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      
      {/* Spacer */}
      <div style={{ height: '70px' }}></div>

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
