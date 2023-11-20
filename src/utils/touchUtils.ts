import { TouchEvent } from "react";

export const handleTouchStart = (
  e: TouchEvent<HTMLDivElement>,
  setStartX: React.Dispatch<React.SetStateAction<number>>
) => {
  setStartX(e.touches[0].clientX);
};

export const handleTouchMove = (
  e: TouchEvent<HTMLDivElement>,
  containerRef: React.RefObject<HTMLDivElement>,
  startX: number,
  setStartX: React.Dispatch<React.SetStateAction<number>>
) => {
  if (containerRef.current) {
    const delta = startX - e.touches[0].clientX;
    containerRef.current.scrollLeft += delta;
    setStartX(e.touches[0].clientX);
  }
};
