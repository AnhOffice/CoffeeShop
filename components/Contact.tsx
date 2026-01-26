import React, { useState } from 'react';
import MotionWrapper from './MotionWrapper.tsx';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { DATA } from '../constants.tsx';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const content = DATA[language].ui.contact;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-24" style={{ background: 'linear-gradient(135deg, #F5F5DC 0%, #EFEBE9 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <MotionWrapper>
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4"
              style={{
                background: 'rgba(102, 187, 106, 0.15)',
                color: '#2E7D32'
              }}>
              {content.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2C1810' }}>
              {content.title}
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#6D4C41' }}>
              {content.desc}
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <MotionWrapper>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#2C1810' }}>
                    {content.visit}
                  </h4>
                  <p className="text-sm" style={{ color: '#6D4C41' }}>
                    {content.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#2C1810' }}>
                    {content.phone}
                  </h4>
                  <p className="text-sm" style={{ color: '#6D4C41' }}>
                    +84 123 456 789
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#2C1810' }}>
                    Email
                  </h4>
                  <p className="text-sm" style={{ color: '#6D4C41' }}>
                    coffeeform2026@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Contact Form */}
          <MotionWrapper delay={200}>
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl shadow-xl" style={{ background: '#FFFFFF' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#2C1810' }}>
                {content.form_title}
              </h3>
              <p className="text-sm mb-6" style={{ color: '#6D4C41' }}>
                {language === 'vn'
                  ? 'Gửi tin nhắn cho chúng tôi và chúng tôi sẽ phản hồi sớm nhất có thể!'
                  : 'Send us a message and we will respond as soon as possible!'}
              </p>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#6D4C41' }}>
                    {content.name}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                    style={{
                      borderColor: '#D7CCC8',
                      background: '#FDFBF7'
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#6D4C41' }}>
                    {content.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                    style={{
                      borderColor: '#D7CCC8',
                      background: '#FDFBF7'
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#6D4C41' }}>
                    {content.message}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none"
                    style={{
                      borderColor: '#D7CCC8',
                      background: '#FDFBF7'
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #2E7D32, #66BB6A)'
                  }}
                >
                  <span>{content.submit}</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
