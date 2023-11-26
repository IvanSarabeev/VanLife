import React from "react";
import Button from "components/HTML/Button";
import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";

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
    </>
  );
};

export default ScheduleForm;
