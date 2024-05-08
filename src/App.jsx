import React from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
};

function App() {
  const images = imageData();

  return (
    <div className="app">
      {images.map((image) => (
        <div key={image.id} className="image-container">
          <img src={image.img} alt={`Elephant ${image.id}`} />
          
        </div>
      ))}
    </div>
  );
}

export default App;
