import React, { useRef, useState } from "react";
import useIntersectionObserver from "Hooks/useIntersectionObserver";
import "Components/ImageContainer/ImageContainer.css";

import LazyImage from "Components/LazyImage";

const ImageContainer = ({ height, width, src, thumb, alt }) => {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useIntersectionObserver({
    target: containerRef,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        if (!isVisible) {
          setIsVisible(true);
          observerElement.unobserve(containerRef.current);
        }
      }
    },
  });

  const aspectRatio = (height / width) * 100;

  return (
    <div
      ref={containerRef}
      className="image-container"
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      {isVisible && <LazyImage src={src} thumb={thumb} alt={alt} />}
    </div>
  );
};

export default ImageContainer;
