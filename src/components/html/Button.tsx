import React, { ButtonHTMLAttributes } from "react";

type ButtonProp = {
  children: React.ReactNode;
};

type ButtonEvents = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...restProps }: ButtonProp & ButtonEvents) => {
  return (
    <button {...restProps} type="button">
      {children}
    </button>
  );
};

export default Button;
