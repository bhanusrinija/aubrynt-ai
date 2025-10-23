import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', action: () => setActiveSection('home') },
      { label: 'Careers', action: () => setActiveSection('careers') },
      { label: 'Events', action: () => setActiveSection('events') },
    ],
    services: [
      { label: 'Full Stack Development', action: () => setActiveSection('fullstack') },
      { label: 'AI/ML Solutions', action: () => setActiveSection('aiml') },
      { label: 'Mobile App Development', action: () => setActiveSection('app') },
      { label: 'UI/UX Design', action: () => setActiveSection('uiux') },
    ],
    students: [
      { label: 'Training Programs', action: () => setActiveSection('students') },
      { label: 'Courses', action: () => setActiveSection('courses') },
      { label: 'Internships', action: () => setActiveSection('students') },
      { label: 'Projects', action: () => setActiveSection('projects') },
    ]
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AUBRYNT AI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into innovation. Premier software solutions company empowering businesses and students with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@aubryntai.com" className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@aubryntai.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors text-left bg-transparent border-0 p-0 cursor-pointer font-normal"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Students Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Students</h3>
            <ul className="space-y-3">
              {footerLinks.students.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Connect with us:</span>
              <a
                href="https://linkedin.com/company/aubrynt-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/aubryntai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© {currentYear} AUBRYNT AI. All rights reserved.</p>
              <p className="text-xs mt-1">Empowering Innovation • Building Futures</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;