import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/HTML/Button";
import Input from "../../components/HTML/Input";
import { Link } from "react-router-dom";

type FormProps = {
  state: { message?: string } | undefined;
  status: string;
  userData: {
    email: string;
    password: string;
  };
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({
  state,
  status,
  userData,
  handleSubmit,
  handleInputChange,
}: FormProps) => {
  return (
    <>
      <Layout>
        <main className="h-screen w-full flex flex-col items-center justify-center -mt-14 bg-coral font-inter">
          {state?.message && (
            <h3 className="text-4xl text-red-600 mb-10">{state.message}</h3>
          )}
          <h3 className="text-3xl leading-6 font-bold text-custom-black text-center pb-12">
            Sign in your account
          </h3>
          <form
            onSubmit={handleSubmit}
            className="w-[494px] h-20 flex flex-col bg-white"
          >
            <Input
              value={userData.email}
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleInputChange}
              className="py-2 px-3 rounded-t-md shadow-sm bg-white"
            />
            <Input
              value={userData.password}
              type="password"
              name="password"
              placeholder="Password"
              className="py-2 px-3 rounded-b-md shadow-sm bg-white"
              onChange={handleInputChange}
            />
          </form>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={status === "submitting"}
            className={`text-white py-5 px-[220px] mt-5 rounded-md shadow-sm bg-dark-coral ${
              status === "submitting" ? "cursor-not-allowed" : ""
            }`}
          >
            {status === "submitting" ? "Logging in" : "Sign in"}
          </Button>
          <span className="inline-flex items-center space-x-2 pt-12 font-inter font-medium leading-6">
            <h4 className="text-custom-black">Don't have an account ?</h4>
            <Link to="/login" className="text-[#FF8C38]">
              Create one now
            </Link>
          </span>
        </main>
      </Layout>
    </>
  );
};

export default Form;
