import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
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
  }

  render() {
    const images = this.imageData();

    return (
      <div className="app">
        <h2>Kalvium gallary</h2>
        <div className="image-grid"> {/* Use image-grid class */}
          {images.map((image) => (
            <div key={image.id} className="image-container">
              <img src={image.img} alt={`Elephant ${image.id}`} />
         
            </div>
          ))}
        </div>
      </div>
    );
  }
}

