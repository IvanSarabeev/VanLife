import React from "react";
import Input from "components/HTML/Input";
import Button from "components/HTML/Button";

const SubscribeBanner = () => {
  return (
    <aside className="gap-4 flex flex-col md:flex-row items-center justify-center px-14 py-10 rounded-lg bg-light-coral bg-cover bg-center bg-no-repeat text-[#102742] shadow-xl">
      <div className="flex flex-col flex-1 items-start justify-start">
        <h4 className="regular-18 md:bold-20 capitalize mb-3">
          Subscribe & get more information
        </h4>
        <p className="max-w-md regular-14 md:regular-16 whitespace-normal indent-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          suscipit impedit, magni exercitationem doloremque doloribus
        </p>
      </div>
      <span className="gap-4 flex flex-col md:flex-row items-center regular-16">
        <Input
          type="email"
          placeholder="Your Email"
          className="px-2.5 py-2 rounded-md indent-2 outline-none text-dark-coral focus:ring-1 focus:ring-orange-400"
        />
        <Button className="px-3.5 py-2.5 rounded-md bg-coral">Subscribe</Button>
      </span>
    </aside>
  );
};

export default SubscribeBanner;
