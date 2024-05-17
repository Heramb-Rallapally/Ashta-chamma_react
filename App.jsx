import React, { useState } from 'react';
import Images_front from './Total.jsx';
import './App.css'; 

function App() {
  const [imagesVisible, setImagesVisible] = useState(false); 

  const handleButtonClick = () => {
    setImagesVisible(!imagesVisible); 
  };

  return (
    <div className="container">
      <h1 className='Heading_app'>Random Gavullu</h1>
      {imagesVisible && <Images_front />} {}
      <button onClick={handleButtonClick}>Show Random Images</button>
    </div>
  );
}

export default App;
