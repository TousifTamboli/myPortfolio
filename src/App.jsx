import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero/Hero';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
      </div>
    </>
  );
}

export default App;
