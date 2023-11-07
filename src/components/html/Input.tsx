import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...restProps }: InputProps) => {
  return (
    <>
      <input {...restProps} />
    </>
  );
};

export default Input;
