import React from 'react';
import Images_front from './Total.jsx';
import './App.css'; 
import SoundEffect from './SoundEffect.jsx';

function App() {
  return (
    <div className="container">
      <h1 className='Heading_app'>Hello!</h1>
      <SoundEffect />
      <Images_front />
    </div>
  );
}

export default App;
