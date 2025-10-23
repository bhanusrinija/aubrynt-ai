import React, { useState } from 'react';
import { Users, BookOpen, Briefcase, MessageSquare, Award, Clock, Target, TrendingUp, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';

const Students = () => {
  const [showContact, setShowContact] = useState(false);

  const programs = [
    {
      icon: MessageSquare,
      title: 'Industry Expert Consultation',
      description: 'One-on-one guidance sessions with experienced professionals',
      features: ['Career counseling', 'Technology mentorship', 'Industry insights', 'Personalized roadmaps']
    },
    {
      icon: Briefcase,
      title: 'Student Projects',
      description: 'Hands-on real-world projects to build your portfolio',
      features: ['Live project experience', 'Industry-grade code', 'Portfolio building', 'GitHub collaboration']
    },
    {
      icon: Users,
      title: '1-on-1 Training',
      description: 'Personalized training sessions tailored to your goals',
      features: ['Customized curriculum', 'Flexible scheduling', 'Practical assignments', 'Doubt resolution']
    },
    {
      icon: BookOpen,
      title: 'Technology Guidance',
      description: 'Learn cutting-edge technologies with expert guidance',
      features: ['Expert instructors', 'Hands-on learning', 'Real-world projects', 'Career support']
    }
  ];

  const benefits = [
    { icon: Award, title: 'Expert Mentorship', desc: 'Learn from industry professionals' },
    { icon: Clock, title: 'Flexible Learning', desc: 'Learn at your own pace' },
    { icon: Target, title: 'Goal-Oriented', desc: 'Focused on career outcomes' },
    { icon: TrendingUp, title: 'Career Growth', desc: 'Job preparation support' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Student Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of tech professionals through mentorship, training, and real-world experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Programs?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Internship Opportunities</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              We're preparing exciting internship programs for aspiring developers and designers. 
              Stay tuned for updates on opportunities in full-time and internship positions.
            </p>
            <button 
              onClick={() => setShowContact(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center space-x-2"
            >
              <span>Get Notified</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">Join our programs and learn from industry experts</p>
          <button 
            onClick={() => setShowContact(true)}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {showContact && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Get Started</h3>
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

export default Students;