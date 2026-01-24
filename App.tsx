import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './components/Home.tsx';
import ProductDetail from './components/ProductDetail.tsx';
import OrderPage from './components/OrderPage.tsx';
import BlogDetail from './components/BlogDetail.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';

const App: React.FC = () => {
  // Basename for GitHub Pages - only in production
  const basename = import.meta.env.MODE === 'production' ? '/CoffeeShop' : '';
  
  return (
    <ThemeProvider>
      <LanguageProvider>
      <Router basename={basename}>
        <div className="min-h-screen custom-scrollbar">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/order/:id" element={<OrderPage />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
