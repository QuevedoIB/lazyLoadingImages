import React, { useEffect, useState } from "react";
import ImageContainer from "Components/ImageContainer";
import "./App.css";

import apiService from "Services/apiService";
const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const data = await apiService.getImages();
    setImages(data);
  };

  return (
    <div className="app">
      <div className="container">
        {images.map(res => {
          return (
            <div key={res.id} className="wrapper">
              <ImageContainer
                src={res.urls.regular}
                thumb={res.urls.thumb}
                height={res.height}
                width={res.width}
                alt={res.alt_description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
