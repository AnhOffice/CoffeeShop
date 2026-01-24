import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { DATA } from '../constants.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

const OrderForm: React.FC = () => {
  const { language } = useLanguage();
  const content = DATA[language].ui.order_page;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Order Submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#F5F5DC] p-8 rounded-2xl text-center">
        <CheckCircle className="w-16 h-16 text-[#81C784] mx-auto mb-4" />
        <h3 className="text-2xl font-serif text-[#3E2723] mb-2">{content.success_title}</h3>
        <p className="text-[#3E2723]/70">{content.success_desc}</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[#3E2723] font-bold underline hover:text-[#81C784]"
        >
          {content.place_another}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F5F5DC]">
      <h3 className="text-2xl font-serif text-[#3E2723] mb-2">{content.form_title}</h3>
      <p className="text-sm text-[#6D4C41] mb-6">
        {language === 'vn' 
          ? 'Vui lòng điền đầy đủ thông tin bên dưới để hoàn tất đơn hàng. Chúng tôi sẽ liên hệ xác nhận trong vòng 24 giờ.'
          : 'Please fill in all the information below to complete your order. We will contact you for confirmation within 24 hours.'}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-[#3E2723] mb-1">{content.fields.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#F5F5DC]/30 border border-[#F5F5DC] focus:outline-none focus:border-[#81C784] transition-colors"
            placeholder={content.fields.name_placeholder}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[#3E2723] mb-1">{content.fields.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#F5F5DC]/30 border border-[#F5F5DC] focus:outline-none focus:border-[#81C784] transition-colors"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-[#3E2723] mb-1">{content.fields.phone}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#F5F5DC]/30 border border-[#F5F5DC] focus:outline-none focus:border-[#81C784] transition-colors"
              placeholder="+84 90 123 4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-bold text-[#3E2723] mb-1">{content.fields.address}</label>
          <textarea
            id="address"
            name="address"
            required
            rows={3}
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#F5F5DC]/30 border border-[#F5F5DC] focus:outline-none focus:border-[#81C784] transition-colors resize-none"
            placeholder={content.fields.address_placeholder}
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-[#3E2723] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#3E2723]/90 transition-colors mt-4"
        >
          <span>{content.confirm_order}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
