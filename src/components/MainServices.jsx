import React from 'react';
import { Code, Smartphone, Brain, Palette, Globe, CheckCircle } from 'lucide-react';

const MainServices = ({ setActiveSection, setSelectedService, setShowContact }) => {
  const services = [
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      description: 'Complete web applications with modern technologies like MERN, MEAN stacks',
      icon: Code,
      features: ['Frontend & Backend', 'Database Design', 'API Development', 'Cloud Deployment'],
      color: 'from-blue-500 to-cyan-500',
      stats: { projects: '500+', rating: '4.9/5' }
    },
    {
      id: 'app',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: Smartphone,
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
      color: 'from-green-500 to-emerald-500',
      stats: { projects: '300+', rating: '4.8/5' }
    },
    {
      id: 'aiml',
      title: 'AI/ML Solutions',
      description: 'Intelligent solutions using machine learning and artificial intelligence',
      icon: Brain,
      features: ['Computer Vision', 'NLP', 'Predictive Analytics', 'Custom AI Models'],
      color: 'from-purple-500 to-pink-500',
      stats: { projects: '200+', rating: '4.9/5' }
    },
    {
      id: 'webdev',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      icon: Globe,
      features: ['Next.js/React', 'E-commerce', 'CMS Integration', 'Performance Optimization'],
      color: 'from-orange-500 to-red-500',
      stats: { projects: '800+', rating: '4.9/5' }
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert visitors to customers',
      icon: Palette,
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-pink-500 to-rose-500',
      stats: { projects: '400+', rating: '4.8/5' }
    }
  ];

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    setActiveSection('services');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions powered by cutting-edge technology and expert craftsmanship
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
                onClick={() => handleServiceClick(service.id)}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>


                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your requirements and create something amazing together
          </p>
          <div className="flex flex-row gap-4 justify-center flex-wrap">
            <button
              onClick={() => setShowContact(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors hover:scale-105 transform duration-200"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServices;