import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DATA } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import MotionWrapper from './MotionWrapper.tsx';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const posts = DATA[language].blog;
  const content = DATA[language].ui.product_detail; // reuse text like "back_home" or similar
  
  const post = posts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, language]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5DC]/20">
        <h2 className="text-3xl font-serif text-[#3E2723] mb-4">{content.not_found}</h2>
        <Link to="/" className="text-[#3E2723] font-bold underline hover:text-[#81C784]">
          {content.back_home}
        </Link>
      </div>
    );
  }

  // Very simple markdown-like parser for double newlines
  const paragraphs = post.content ? post.content.split('\n\n') : [];

  return (
    <div className="min-h-screen bg-[#F5F5DC]/20 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-8">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-[#3E2723] font-medium mb-8 hover:text-[#81C784] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {DATA[language].ui.product_detail.back_home}
        </button>

        <MotionWrapper>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-sm font-bold tracking-widest uppercase mb-2 block text-[#81C784]">
                {post.date}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={200}>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm text-[#3E2723]">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-lg leading-relaxed mb-6 last:mb-0 whitespace-pre-line">
                {para.split(/(\*\*.*?\*\*)/).map((part, i) => 
                  part.startsWith('**') && part.endsWith('**') ? (
                    <strong key={i}>{part.slice(2, -2)}</strong>
                  ) : (
                    part
                  )
                )}
              </p>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default BlogDetail;
