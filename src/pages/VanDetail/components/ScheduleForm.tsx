import React from "react";
import Button from "components/HTML/Button";
import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import Input from "components/HTML/Input";

const ScheduleForm = () => {
  return (
    <>
      <Button
        type="button"
        className="h-16 w-full gap-4 flex items-center justify-center text-[#1A3760] font-semibold rounded-lg border-[1px] border-solid bg-[#F5C34B] hover:bg-[#E6AA1B] hover:border-[#252525]"
      >
        <BiSolidOffer height={21} width={18} />
        Save your Van
      </Button>
      <Button
        type="button"
        className="h-16 w-full gap-4 flex items-center justify-center text-white font-semibold rounded-lg border-[1px] border-solid bg-[#0A2357] hover:bg-[#1A3760] hover:border-[#252525]"
      >
        <AiOutlineSchedule height={21} width={18} />
        Schedule an Trip
      </Button>
      <div className="w-full flex flex-col items-start justify-center p-5 border-one rounded-lg bg-white">
        <h4 className="regular-16 xl:regular-18 font-semibold text-[#1A3760] mb-5">
          Contact Us
        </h4>
        <form
          action="#"
          className="gap-y-5 w-full flex flex-col items-start justify-center"
        >
          <Input
            type="text"
            placeholder="Name"
            required={true}
            // value=""
            className="w-full h-12 border-2 border-gray-500 pl-5 border-one text-[#5F6973] regular-14 rounded-lg"
          />
          <Input
            type="text"
            placeholder="Phone"
            required={true}
            // value=""
            className="w-full h-12 border-2 border-gray-500 pl-5 border-one text-[#5F6973] regular-14 rounded-lg"
          />
          <Input
            type="email"
            placeholder="Email"
            required={true}
            // value=""
            className="w-full h-12 border-2 border-gray-500 pl-5 border-one text-[#5F6973] regular-14 rounded-lg"
          />
          <Button className="w-full h-12 regular-14 font-semibold rounded-lg text-[#1A3760] bg-[#F5C34B] transition-all ease-in-out hover:text-white hover:bg-[#E6AA1B]">
            Send Message
          </Button>
          <Button className="w-full h-12 regular-14 font-semibold rounded-lg text-white bg-[#28A745] transition-all ease-in-out">
            + 359 981 731
          </Button>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
