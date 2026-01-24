import React from 'react';
import Hero from './Hero.tsx';
import About from './About.tsx';
import Team from './Team.tsx';
import Products from './Products.tsx';
import Blog from './Blog.tsx';
import Contact from './Contact.tsx';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Products />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
