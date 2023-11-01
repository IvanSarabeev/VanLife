import { useEffect, useRef } from "react";

const useEffectOnUpdate = (effectFunction: Function, dependancyArr?: []) => {
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, dependancyArr);
};

export { useEffectOnUpdate };
