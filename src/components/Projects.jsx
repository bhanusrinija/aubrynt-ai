import React, { useState } from 'react';
import { Code, Smartphone, Brain, Globe, Palette, Star } from 'lucide-react';

const Projects = ({ setShowContact }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Star },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'aiml', label: 'AI/ML', icon: Brain },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'design', label: 'UI/UX Design', icon: Palette }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Complete online shopping solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: require('./images/ecommerce.jpeg'),
      featured: true
    },
    {
      id: 2,
      title: 'AI Chatbot System',
      category: 'aiml',
      description: 'Intelligent customer support chatbot using NLP',
      tech: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      image: require('./images/chatbot.jpeg'),
      featured: true
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Cross-platform mobile app for health monitoring',
      tech: ['React Native', 'Firebase', 'Redux'],
      image: require('./images/fitnessapp.jpeg'),
      featured: true
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'web',
      description: 'Modern responsive website with CMS integration',
      tech: ['Next.js', 'Tailwind', 'Contentful'],
      image: require('./images/corporate.jpeg'),
      featured: false
    },
    {
      id: 5,
      title: 'Healthcare Portal',
      category: 'fullstack',
      description: 'Patient management and appointment booking system',
      tech: ['Angular', 'Django', 'PostgreSQL'],
      image: require('./images/healthcare.jpeg'),
      featured: true
    },
    {
      id: 6,
      title: 'Image Recognition App',
      category: 'aiml',
      description: 'Real-time object detection using computer vision',
      tech: ['PyTorch', 'OpenCV', 'FastAPI'],
      image: require('./images/imagerecognition.jpeg'),
      featured: false
    },
    {
      id: 7,
      title: 'Food Delivery Platform',
      category: 'mobile',
      description: 'Full-featured restaurant ordering mobile app',
      tech: ['Flutter', 'Node.js', 'MongoDB'],
      image: require('./images/fooddelivery.jpeg'),
      featured: false
    },
    {
      id: 8,
      title: 'SaaS Dashboard',
      category: 'design',
      description: 'Modern analytics dashboard with data visualization',
      tech: ['Figma', 'Adobe XD', 'Principle'],
      image: require('./images/saas.jpeg'),
      featured: false
    },
    {
      id: 9,
      title: 'Real-time Chat App',
      category: 'fullstack',
      description: 'Instant messaging platform with video calls',
      tech: ['React', 'Socket.io', 'WebRTC'],
      image: require('./images/chatapp.jpeg'),
      featured: true
    }
  ];

  

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful project deliveries across various domains
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Star className="w-8 h-8 text-yellow-500 mr-3" />
            Top Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden card-hover group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium flex items-center space-x-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden card-hover group"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 opacity-90">Let's collaborate and bring your ideas to life</p>
          <button
            onClick={() => setShowContact(true)}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;