import React, { useState } from "react";
import "Components/LazyImage/LazyImage.css";

const LazyImage = ({ alt, thumb, src }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <img
        className="image thumb"
        alt={alt}
        src={thumb}
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="image full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={alt}
        src={src}
      />
    </>
  );
};

export default LazyImage;
