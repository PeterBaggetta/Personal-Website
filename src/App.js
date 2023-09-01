import React from 'react';

import {Header} from './sections/Header/Header';
import {Hero} from './sections/Hero/Hero';
import {About} from './sections/About/About';
import {Skills} from './sections/Skills/Skills';
import {Projects} from './sections/Projects/Projects';
import {Contact} from './sections/Contact/Contact';
import {Footer} from './sections/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
