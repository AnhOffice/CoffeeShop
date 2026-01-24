import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DATA } from '../constants';
import MotionWrapper from './MotionWrapper';

const Blog: React.FC = () => {
  const { language } = useLanguage();
  const content = DATA[language].ui.blog;
  const posts = DATA[language].blog;

  return (
    <section id="blog" className="py-20 md:py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <MotionWrapper>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2C1810' }}>
              {content.title}
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#6D4C41' }}>
              {content.desc}
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <MotionWrapper key={post.id} delay={idx * 150}>
              <Link to={`/blog/${post.id}`}>
                <div className="group h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #FDFBF7 0%, #F5F5DC 100%)' }}>
                  
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          color: '#2E7D32'
                        }}>
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2" style={{ fontFamily: "'Playfair Display', serif", color: '#2C1810' }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 line-clamp-3 flex-grow" style={{ color: '#6D4C41' }}>
                      {post.excerpt}
                    </p>
                    
                    {/* Read More */}
                    <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                      style={{ color: '#2E7D32' }}>
                      {content.read_more}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
