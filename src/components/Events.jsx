import React, { useState } from 'react';
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';

const Events = () => {
  const [showContact, setShowContact] = useState(false);

  const eventTypes = [
    {
      icon: Trophy,
      title: 'Hackathons',
      description: 'Competitive coding events with exciting prizes',
      count: '10+ Annually'
    },
    {
      icon: Users,
      title: 'Workshops',
      description: 'Hands-on learning sessions with industry experts',
      count: '20+ Per Year'
    },
    {
      icon: Calendar,
      title: 'Webinars',
      description: 'Expert talks on trending technologies',
      count: '50+ Sessions'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Events & Workshops</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our hackathons, workshops, and webinars to learn, compete, and network with like-minded professionals
          </p>
        </div>

        {/* Event Types */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 mb-16 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Events & Workshops Coming Soon!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            We're planning exciting hackathons, technical workshops, and webinars to help you learn, compete, and network with industry professionals. 
            Stay tuned for announcements on our upcoming events!
          </p>
          <button 
            onClick={() => setShowContact(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center space-x-2"
          >
            <span>Get Event Updates</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Planned Event Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-semibold rounded-lg">
                  {type.count}
                </span>
              </div>
            );
          })}
        </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to Collaborate on Events?</h2>
          <p className="text-xl mb-8 opacity-90">Partner with us to organize impactful tech events and workshops</p>
          <button 
            onClick={() => setShowContact(true)}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Contact Form Modal */}
        {showContact && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Event Registration</h3>
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

export default Events;