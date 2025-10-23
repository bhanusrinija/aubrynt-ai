import React, { useState } from 'react';
import { Briefcase, Users, TrendingUp, Heart, Coffee, Award, Zap, Target, ArrowRight, DollarSign, Clock, X } from 'lucide-react';
import ContactForm from './ContactForm';

const Careers = () => {
  const [showContact, setShowContact] = useState(false);

  const benefits = [
    { icon: DollarSign, title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
    { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Clear career progression paths' },
    { icon: Users, title: 'Amazing Team', desc: 'Work with talented professionals' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Work-life balance matters' },
    { icon: Heart, title: 'Health Insurance', desc: 'Comprehensive medical coverage' },
    { icon: Coffee, title: 'Learning Budget', desc: 'Annual budget for courses & conferences' },
    { icon: Award, title: 'Recognition Program', desc: 'Rewards for outstanding performance' },
    { icon: Zap, title: 'Cutting-Edge Tech', desc: 'Work with latest technologies' },
    { icon: Target, title: 'Impact-Driven Work', desc: 'Build products that matter' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of an innovative team building the future of technology and empowering students worldwide
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 card-hover overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Current Openings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              We don't have any open positions at the moment, but we're always looking for talented individuals. 
              Submit your resume and we'll reach out when we have opportunities that match your skills.
            </p>
            <button 
              onClick={() => setShowContact(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center space-x-2"
            >
              <span>Submit Your Resume</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Future Opportunities</h2>
          <p className="text-xl mb-8 opacity-90">Get notified when we start hiring for positions that match your expertise</p>
          <button 
            onClick={() => setShowContact(true)}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Notified
          </button>
        </div>

        {/* FIXED MODAL - Notice the structure */}
        {showContact && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Submit Your Resume</h3>
                    <p className="text-gray-600 mt-1">We'll keep you in mind for future opportunities</p>
                  </div>
                  <button 
                    onClick={() => setShowContact(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                {/* Pass onClose to ContactForm so it can close itself after submission */}
                <ContactForm onClose={() => setShowContact(false)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;