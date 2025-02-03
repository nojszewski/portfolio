import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0A192F] scroll-smooth">
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;