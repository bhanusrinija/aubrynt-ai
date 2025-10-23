import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainServices from './components/MainServices';
import Services from './components/Services';
import Students from './components/Students';
import Projects from './components/Projects';
import Events from './components/Events';
import Courses from './components/Courses';
import Careers from './components/Careers';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Chatbot from './components/Chatbot';
import ContactForm from './components/ContactForm';
import { X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} setShowContact={setShowContact} />;
      case 'services':
        return (
          <>
            <MainServices setActiveSection={setActiveSection} setSelectedService={setSelectedService} setShowContact={setShowContact} />
            <Services activeService={selectedService || 'fullstack'} setSelectedService={setSelectedService} />
          </>
        );
      case 'students':
        return <Students />;
      case 'projects':
        return <Projects setShowContact={setShowContact} />;
      case 'events':
        return <Events />;
      case 'courses':
        return <Courses />;
      case 'careers':
        return <Careers />;
      default:
        return <Hero setActiveSection={setActiveSection} setShowContact={setShowContact} />;
    }
  };

  return (
    <div className="min-h-screen relative bg-white">
      <AnimatedBackground />
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      />
      <main className="pt-32">
        {renderContent()}
      </main>
      <Footer setActiveSection={setActiveSection} />
      
      {/* Chatbot */}
      <Chatbot />
      
      {/* Main Contact Form Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
                  <p className="text-gray-600 mt-1">Let's discuss your project</p>
                </div>
                <button 
                  onClick={() => setShowContact(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ContactForm onClose={() => setShowContact(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;