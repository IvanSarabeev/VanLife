import React from "react";
import Layout from "components/Layouts/Layout";
import Button from "components/HTML/Button";
import Input from "components/HTML/Input";
import { Link } from "react-router-dom";
import { UserData } from "../../types/types";
import { ReactComponent as IconSpinner } from "../../assets/svgs/spinner.svg";

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
        <main className="min-h-screen w-full flex flex-col items-center justify-center text-black py-0 md:py-8 bg-coral font-inter">
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
                name="email"
                type="email"
                required={true}
                placeholder="Email address"
                onChange={handleInputChange}
                className="form-inputs"
              />
              <Input
                value={userData.password}
                name="password"
                type="password"
                required={true}
                placeholder="Password"
                onChange={handleInputChange}
                className="form-inputs"
              />
            </div>
          </form>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={status === "loading" || status === "success"}
            className={`w-80 sm:w-96 text-white text-center py-4 mt-6 rounded-md shadow-md bg-dark-coral ${
              status === "loading" || status === "success"
                ? "cursor-not-allowed"
                : ""
            }`}
          >
            {status === "loading" ? <Procceding /> : "Sign in"}
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

function Procceding() {
  return (
    <span className="gap-2 inline-flex items-center justify-center">
      <IconSpinner className="w-4 h-4 animate-spin text-blue-500" />
      Procceding...
    </span>
  );
}
