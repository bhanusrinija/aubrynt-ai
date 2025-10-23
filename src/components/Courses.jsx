import React, { useState } from 'react';
import { BookOpen, Clock, Users, Award, Play, Code, Smartphone, Brain, Palette, Database, Cloud } from 'lucide-react';
import ContactForm from './ContactForm';

const Courses = () => {
  const [showContact, setShowContact] = useState(false);

  const courseTopics = [
    { 
      icon: Code, 
      title: 'Full Stack Development', 
      desc: 'Master MERN/MEAN stack, REST APIs, and modern web frameworks',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Brain, 
      title: 'AI & Machine Learning', 
      desc: 'Deep learning, NLP, computer vision, and model deployment',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Smartphone, 
      title: 'Mobile App Development', 
      desc: 'React Native, Flutter, and native iOS/Android development',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Palette, 
      title: 'UI/UX Design', 
      desc: 'Design thinking, Figma, Adobe XD, and user research',
      color: 'from-orange-500 to-red-500'
    },
    { 
      icon: Database, 
      title: 'Data Science & Analytics', 
      desc: 'Python, R, SQL, data visualization, and statistical analysis',
      color: 'from-teal-500 to-blue-500'
    },
    { 
      icon: Cloud, 
      title: 'Cloud & DevOps', 
      desc: 'AWS, Azure, Docker, Kubernetes, and CI/CD pipelines',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Professional Training</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide guidance and training on industry-leading technologies to help you advance your career
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 mb-16 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Training Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            We offer personalized training and mentorship in various cutting-edge technologies. 
            Our expert instructors work with you to create a learning path tailored to your goals and skill level.
          </p>
          <button 
            onClick={() => setShowContact(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center space-x-2"
          >
            <span>Get Training Info</span>
            <Play className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies We Train On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden card-hover"
                >
                  <div className={`h-40 bg-gradient-to-br ${topic.color} flex items-center justify-center relative`}>
                    <Icon className="w-16 h-16 text-white opacity-90" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{topic.desc}</p>
                    <button 
                      onClick={() => setShowContact(true)}
                      className="text-blue-600 font-semibold text-sm hover:text-blue-700 inline-flex items-center space-x-1"
                    >
                      <span>Learn More</span>
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, text: '1-on-1 Mentorship', desc: 'Personal guidance from experts' },
              { icon: Award, text: 'Practical Projects', desc: 'Real-world hands-on experience' },
              { icon: Clock, text: 'Flexible Schedule', desc: 'Learn at your own pace' },
              { icon: BookOpen, text: 'Career Support', desc: 'Job preparation assistance' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center card-hover"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.text}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us to discuss your learning goals and create a personalized training plan</p>
          <button 
            onClick={() => setShowContact(true)}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </button>
        </div>

        {showContact && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Training Inquiry</h3>
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

export default Courses;