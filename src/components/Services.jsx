import React, { useState } from 'react';
import { Code, Smartphone, Brain, Palette, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const Services = ({ activeService, setSelectedService }) => {
  const [showContact, setShowContact] = useState(false);

  const services = {
    fullstack: {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern frameworks and technologies',
      features: [
        'MERN Stack (MongoDB, Express, React, Node.js)',
        'MEAN Stack Development',
        'Django & Flask (Python)',
        'RESTful API Development',
        'Database Design & Optimization',
        'Cloud Deployment & DevOps'
      ],
      projects: [
        { name: 'E-Commerce Platform', tech: 'React, Node.js, MongoDB', desc: 'Scalable online marketplace' },
        { name: 'Healthcare Management System', tech: 'Angular, Django, PostgreSQL', desc: 'Patient management portal' },
        { name: 'Real-time Chat Application', tech: 'React, Socket.io, Redis', desc: 'Instant messaging platform' }
      ]
    },
    app: {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'React Native Development',
        'Flutter Applications',
        'Native iOS (Swift)',
        'Native Android (Kotlin/Java)',
        'Progressive Web Apps (PWA)',
        'App Store Deployment'
      ],
      projects: [
        { name: 'Fitness Tracking App', tech: 'React Native, Firebase', desc: 'Health & wellness tracker' },
        { name: 'Food Delivery Platform', tech: 'Flutter, Node.js', desc: 'Restaurant ordering system' },
        { name: 'Educational Learning App', tech: 'Native Android, Kotlin', desc: 'Interactive learning platform' }
      ]
    },
    aiml: {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Intelligent systems powered by artificial intelligence and machine learning',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Deep Learning Applications',
        'AI Integration Services'
      ],
      projects: [
        { name: 'Sentiment Analysis Tool', tech: 'Python, TensorFlow, NLP', desc: 'Customer feedback analyzer' },
        { name: 'Image Recognition System', tech: 'PyTorch, OpenCV', desc: 'Object detection platform' },
        { name: 'Recommendation Engine', tech: 'Scikit-learn, Pandas', desc: 'Personalized content suggester' }
      ]
    },
    webdev: {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences',
      features: [
        'Responsive Web Design',
        'Single Page Applications',
        'CMS Development (WordPress, Drupal)',
        'E-Commerce Solutions',
        'SEO Optimization',
        'Performance Optimization'
      ],
      projects: [
        { name: 'Corporate Website', tech: 'Next.js, Tailwind CSS', desc: 'Professional business site' },
        { name: 'Portfolio Platform', tech: 'React, Gatsby', desc: 'Creative showcase website' },
        { name: 'Blog & Content Platform', tech: 'WordPress, PHP', desc: 'Content management system' }
      ]
    },
    uiux: {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user engagement and satisfaction',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Interaction Design',
        'Usability Testing',
        'Design System Creation'
      ],
      projects: [
        { name: 'Mobile Banking App Design', tech: 'Figma, Adobe XD', desc: 'Intuitive financial interface' },
        { name: 'SaaS Dashboard', tech: 'Sketch, InVision', desc: 'Analytics dashboard design' },
        { name: 'E-Learning Platform UI', tech: 'Figma, Framer', desc: 'Educational interface design' }
      ]
    }
  };

  const servicesList = [
    { id: 'fullstack', name: 'Full Stack Development' },
    { id: 'app', name: 'Mobile App Development' },
    { id: 'aiml', name: 'AI/ML Solutions' },
    { id: 'webdev', name: 'Web Development' },
    { id: 'uiux', name: 'UI/UX Design' }
  ];

  const currentService = services[activeService] || services.fullstack;
  const Icon = currentService.icon;

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {servicesList.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Service Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-xl">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{currentService.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{currentService.description}</p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentService.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                  <Icon className="w-20 h-20 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{project.tech}</p>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss how we can help bring your vision to life</p>
          <button 
            onClick={() => setShowContact(true)}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Contact Form Modal */}
        {showContact && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
                  <button 
                    onClick={() => setShowContact(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;