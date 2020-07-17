import { useEffect } from "react";

const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 0.1, //callback onIntersect called when (threshold * 100)% of the item is visible
  rootMargin = "0px",
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      //no root, defaults to viewport
      rootMargin,
      threshold,
    });
    const current = target.current;
    observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  });
};

export default useIntersectionObserver;
