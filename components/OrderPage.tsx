import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DATA } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import OrderForm from './OrderForm.tsx';
import MotionWrapper from './MotionWrapper.tsx';

const OrderPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const products = DATA[language].products;
  const content = DATA[language].ui.order_page;

  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [language]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5DC]/20">
        <h2 className="text-3xl font-serif text-[#3E2723] mb-4">{DATA[language].ui.product_detail.not_found}</h2>
        <Link to="/" className="text-[#3E2723] font-bold underline hover:text-[#81C784]">
          {DATA[language].ui.product_detail.back_home}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC]/20 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-8">
        <Link 
          to={`/product/${id}`}
          className="inline-flex items-center gap-2 text-[#3E2723] font-medium mb-8 hover:text-[#81C784] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {content.back_product}
        </Link>

        <MotionWrapper>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F5F5DC] flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-serif text-[#3E2723] mb-1">{product.name}</h2>
              <p className="text-[#81C784] font-medium">{product.price}</p>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={100}>
          <OrderForm />
        </MotionWrapper>
      </div>
    </div>
  );
};

export default OrderPage;
