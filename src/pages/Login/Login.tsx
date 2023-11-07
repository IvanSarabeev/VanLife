import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/apiService";
import Form from "./Form";

const Login = () => {
  const [status, setStatus] = useState("idle");
  const [state, setState] = useState<{ message?: string }>({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await loginUser(userData);
      if (data) {
        localStorage.setItem("loggedin", "loggedin");
        navigate("/host", { replace: true });
        return data;
      }
    } catch (error) {
      setState({ message: "Login failed. Please check your inputs" });
    } finally {
      setStatus("idle");
    }
  };

  return (
    <>
      <Form
        state={state}
        status={status}
        userData={userData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default Login;
