import React from 'react';
import MotionWrapper from './MotionWrapper.tsx';
import { Leaf, Recycle, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { DATA } from '../constants.tsx';

const About: React.FC = () => {
  const { language } = useLanguage();
  const content = DATA[language].ui.about;

  return (
    <section id="about" className="py-20 md:py-24" style={{ background: 'linear-gradient(135deg, #F5F5DC 0%, #EFEBE9 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Quote Block */}
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <Quote className="w-12 h-12 mx-auto mb-6" style={{ color: '#2E7D32', opacity: 0.3 }} />
            <p className="text-2xl md:text-4xl font-serif italic mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
              {content.quote}
            </p>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A)' }} />
          </div>
        </MotionWrapper>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            <MotionWrapper>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6"
                style={{
                  background: 'rgba(102, 187, 106, 0.15)',
                  color: '#2E7D32'
                }}>
                {content.philosophy}
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#2C1810' }}>
                {content.title}
              </h2>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#6D4C41' }}>
                {content.p1}
              </p>
              
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#6D4C41' }}>
                {content.p2}
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
                  <Leaf className="w-8 h-8 mb-4" style={{ color: '#2E7D32' }} />
                  <h4 className="font-bold mb-2" style={{ color: '#2C1810' }}>
                    {content.feature1_title}
                  </h4>
                  <p className="text-sm" style={{ color: '#6D4C41' }}>
                    {content.feature1_desc}
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
                  <Recycle className="w-8 h-8 mb-4" style={{ color: '#2E7D32' }} />
                  <h4 className="font-bold mb-2" style={{ color: '#2C1810' }}>
                    {content.feature2_title}
                  </h4>
                  <p className="text-sm" style={{ color: '#6D4C41' }}>
                    {content.feature2_desc}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Right - Image Grid */}
          <MotionWrapper delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600" 
                    alt="Coffee art"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600" 
                    alt="Coffee beans"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=600" 
                    alt="Sustainable"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600" 
                    alt="Eco friendly"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;
