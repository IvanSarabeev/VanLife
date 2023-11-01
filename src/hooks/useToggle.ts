import { useState } from "react";

export const useToggle = () => {
  const [on, setOn] = useState<boolean>(false);

  const handleToggle = () => {
    setOn(!on);
  };

  return [on, handleToggle];
};
