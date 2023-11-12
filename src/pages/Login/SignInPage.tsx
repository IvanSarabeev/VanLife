import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/apiService";
import Form from "./Form";
import { UserData } from "../../types/types";

const SignInPage = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<{ message?: string }>({});
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    try {
      const data = await loginUser(userData);

      if (data) {
        localStorage.setItem("loggedin", "loggedin");
        navigate("/host", { replace: true });
        setStatus("success");
        return data;
      }
    } catch (error) {
      setStatus("error");
      setError({ message: "Login failed. Please check your inputs" });
    } finally {
      setStatus("idle");
    }
  };

  return (
    <>
      <Form
        error={error}
        status={status}
        userData={userData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default SignInPage;
