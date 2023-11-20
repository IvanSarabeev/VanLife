import { MouseEvent } from "react";

export const onMouseDown = (
  e: MouseEvent<HTMLDivElement>,
  setStartX: (value: React.SetStateAction<number>) => void,
  setIsGrabbing: (value: React.SetStateAction<boolean>) => void
) => {
  setIsGrabbing(true);
  setStartX(e.clientX);
};

export const onMouseUp = (
  e: MouseEvent<HTMLDivElement>,
  setIsGrabbing: (value: React.SetStateAction<boolean>) => void
) => {
  setIsGrabbing(false);
};

export const onMouseMove = (
  e: MouseEvent<HTMLDivElement>,
  containerRef: React.RefObject<HTMLDivElement>,
  isGrabbing: boolean,
  setStartX: (value: React.SetStateAction<number>) => void,
  startX: number
) => {
  if (isGrabbing && containerRef.current) {
    const delta = startX - e.clientX;
    containerRef.current.scrollLeft += delta;
    setStartX(e.clientX);
  }
};
