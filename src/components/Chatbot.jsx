import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm AUBRYNT AI Assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const quickReplies = [
    'Our Services',
    'Student Programs',
    'Courses Available',
    'Career Opportunities',
    'Contact Information'
  ];

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('software') || message.includes('development')) {
      return "We offer comprehensive software solutions including:\n\n• Full Stack Development (MERN, MEAN)\n• Mobile App Development (React Native, Flutter)\n• AI/ML Solutions (TensorFlow, PyTorch)\n• Web Development (Next.js, React)\n• UI/UX Design (Figma, Adobe XD)";
    } else if (message.includes('student') || message.includes('training') || message.includes('internship')) {
      return "Our Student Programs include:\n\n• Industry Expert Consultation\n• Student Projects\n• 1-on-1 Training\n• Professional Courses\n• Internship Opportunities";
    } else if (message.includes('course') || message.includes('learn')) {
      return "We offer industry-recognized courses in:\n\n• Full Stack Web Development\n• AI & Machine Learning\n• Mobile App Development\n• UI/UX Design Mastery\n• Data Science & Analytics\n• Cloud Computing & DevOps\n\nRight now, we haven't started any courses yet. We'll update you when new courses are available—stay tuned!";
    } else if (message.includes('career') || message.includes('job') || message.includes('hiring')) {
      return "No current job openings at the moment. We'll update you when positions become available—stay tuned!";
    } else if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
      return "Get in touch with us:\n\n📧 Email: info@aubryntai.com\n📞 Phone: +91 98765 43210\n📍 Location: Hyderabad, India";
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to AUBRYNT AI. We're a leading software solutions company that also empowers students. How can I assist you today?";
    } else if (message.includes('thank')) {
      return "You're welcome! Feel free to ask if you need anything else. We're here to help! 😊";
    } else {
      return "I can help you with:\n\n• Information about our services\n• Details on student programs\n• Career opportunities\n• Contact information\n\nWhat would you like to know?";
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      type: 'user',
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    setTimeout(() => {
      const botMessage = {
        type: 'bot',
        text: getBotResponse(inputMessage),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button - ALWAYS VISIBLE */}
      {!isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 99999,
            pointerEvents: 'auto'
          }}
        >
          <button
            onClick={() => setIsOpen(true)}
            style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(to right, #2563eb, #9333ea)',
              color: 'white',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(59, 130, 246, 0.5)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <MessageCircle style={{ width: '32px', height: '32px' }} />
          </button>
        </div>
      )}

      {/* Chat Window - ALWAYS VISIBLE WHEN OPEN */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: isMobile ? '16px' : '24px',
            right: isMobile ? '16px' : '24px',
            zIndex: 99999,
            pointerEvents: 'auto'
          }}
        >
          <div
            style={{
              width: isMobile ? 'calc(100vw - 32px)' : '384px',
              height: isMobile ? 'calc(100vh - 32px)' : '600px',
              maxWidth: '384px',
              maxHeight: '600px',
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #e5e7eb'
            }}
          >
            {/* Header */}
            <div 
              style={{
                background: 'linear-gradient(to right, #2563eb, #9333ea)',
                color: 'white',
                padding: '16px',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Bot style={{ width: '24px', height: '24px' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>AUBRYNT AI Assistant</div>
                  <div style={{ fontSize: '12px', opacity: 0.9 }}>Online • Ready to help</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <X style={{ width: '24px', height: '24px' }} />
              </button>
            </div>

            {/* Messages */}
            <div 
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                backgroundColor: '#f9fafb',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      maxWidth: '80%',
                      flexDirection: message.type === 'user' ? 'row-reverse' : 'row'
                    }}
                  >
                    <div 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        background: message.type === 'user' 
                          ? '#2563eb' 
                          : 'linear-gradient(to right, #2563eb, #9333ea)'
                      }}
                    >
                      {message.type === 'user' ? (
                        <User style={{ width: '20px', height: '20px', color: 'white' }} />
                      ) : (
                        <Bot style={{ width: '20px', height: '20px', color: 'white' }} />
                      )}
                    </div>
                    <div>
                      <div 
                        style={{
                          padding: '12px 16px',
                          borderRadius: '16px',
                          backgroundColor: message.type === 'user' ? '#2563eb' : 'white',
                          color: message.type === 'user' ? 'white' : '#1f2937',
                          borderTopRightRadius: message.type === 'user' ? '4px' : '16px',
                          borderTopLeftRadius: message.type === 'user' ? '16px' : '4px',
                          boxShadow: message.type === 'bot' ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none'
                        }}
                      >
                        <p style={{ fontSize: '14px', whiteSpace: 'pre-line', margin: 0 }}>{message.text}</p>
                      </div>
                      <div 
                        style={{
                          fontSize: '12px',
                          color: '#6b7280',
                          marginTop: '4px',
                          textAlign: message.type === 'user' ? 'right' : 'left'
                        }}
                      >
                        {message.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div style={{ padding: '16px', backgroundColor: 'white', borderTop: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Quick questions:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      style={{
                        padding: '4px 12px',
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        border: 'none',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#dbeafe'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#eff6ff'}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div 
              style={{
                padding: '16px',
                backgroundColor: 'white',
                borderTop: '1px solid #e5e7eb',
                borderBottomLeftRadius: '16px',
                borderBottomRightRadius: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  style={{
                    flex: 1,
                    padding: '8px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '20px',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#2563eb';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === ''}
                  style={{
                    width: '40px',
                    height: '40px',
                    background: inputMessage.trim() === '' 
                      ? '#9ca3af' 
                      : 'linear-gradient(to right, #2563eb, #9333ea)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    cursor: inputMessage.trim() === '' ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: inputMessage.trim() === '' ? 0.5 : 1
                  }}
                >
                  <Send style={{ width: '20px', height: '20px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;