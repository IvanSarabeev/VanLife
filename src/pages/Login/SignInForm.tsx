import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/html/Button";
import Input from "../../components/html/Input";
import { Link } from "react-router-dom";
import { UserData } from "../../types/types";

type FormProps = {
  error: { message?: string } | undefined;
  status: "idle" | "loading" | "success" | "error";
  userData: UserData;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SignInForm = ({
  error,
  status,
  userData,
  handleSubmit,
  handleInputChange,
}: FormProps) => {
  return (
    <>
      <Layout>
        <main className="h-fit xl:min-h-screen w-full flex flex-col items-center justify-center py-6 md:py-8 bg-coral font-inter">
          {error?.message && (
            <h3 className="text-2xl md:text-3xl font-extrabold text-rose-700 mb-6">
              {error.message}
            </h3>
          )}
          <h3 className="text-2xl md:text-3xl leading-6 font-bold text-custom-black text-center pb-12">
            Sign in your account
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="w-80 sm:w-96 md:w-[448px] lg:max-w-lg flex flex-col gap-y-2 md:gap-y-3">
              <Input
                value={userData.email}
                type="email"
                required={true}
                placeholder="Email address"
                onChange={handleInputChange}
                className="form-input"
              />
              <Input
                value={userData.password}
                type="password"
                required={true}
                placeholder="Password"
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </form>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={status === "loading" || status === "success"}
            className={`w-80 sm:w-96 md:w-[448px] text-white text-center py-4 md:py-5 mt-6 rounded-md shadow-sm bg-dark-coral ${
              status === "loading" || status === "success"
                ? "cursor-not-allowed"
                : ""
            }`}
          >
            {status === "loading" ? "Logging in" : "Sign in"}
          </Button>
          <span className="inline-flex items-center space-x-2 pt-12 font-inter font-medium leading-6">
            <h4 className="text-custom-black">Don't have an account ?</h4>
            <Link
              to="/login"
              className="text-dark-coral hover:font-bold hover:underline underline-offset-4 transition-all"
            >
              Create one now
            </Link>
          </span>
        </main>
      </Layout>
    </>
  );
};

export default SignInForm;
