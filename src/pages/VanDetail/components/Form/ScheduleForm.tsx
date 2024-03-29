import React, {useState, useEffect} from "react";
import Input from "components/HTML/Input";
import Button from "components/HTML/Button";
import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import Calendar from "./Calendar";
import { useToggle } from "hooks/useToggle";
import { calculatePrice, calculateDays } from "utils/calculator";
import { VanDataExtended } from "types/types";

type VanProps = {
  vanInfo: VanDataExtended;
}

const ScheduleForm = ({vanInfo}:VanProps) => {

  const [show, handleToggle] = useToggle();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<null>(null);
  const onChange = (dates:any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const [countDays, setCountDays] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if(startDate && endDate){
      const totalDays = calculateDays(startDate, endDate);
      setCountDays(totalDays);

      const totalPrice = calculatePrice(startDate, endDate, vanInfo.price);
      setPrice(totalPrice);

      localStorage.setItem("countDays", totalDays.toString());
      localStorage.setItem("price", totalPrice.toString());
    }
  },[startDate, endDate])

  console.log(vanInfo);

  return (
    <>
      <Button
        type="button"
        onClick={() => handleToggle()}
        className="relative h-16 w-full gap-4 flex items-center justify-center text-white font-semibold rounded-lg border-[1px] border-solid bg-[#0A2357] hover:bg-[#1A3760] hover:border-[#252525]"
      >
        <AiOutlineSchedule height={21} width={18} />
        Schedule an Trip
      </Button>
      
      {show ? (
        <div className="w-full flex flex-col items-center justify-center border-one rounded-lg p-4 bg-slate-50">
          <Calendar startDate={startDate} endDate={endDate} onChange={onChange}/> 
          {countDays > 0 ? (
            <div className="text-sm font-semibold mt-2.5">
              <p className="text-center">Total of {countDays} days <br/>
                Overall price: ${price}
              </p>
            </div>
          ) : (
            <p className="text-sm lg:text-base font-semibold mt-2.5">Unavailable</p>
          )}
        </div>
        ) : null}
        <Button
        type="button"
        className="h-16 w-full gap-4 flex items-center justify-center text-[#1A3760] font-semibold rounded-lg border-[1px] border-solid bg-[#F5C34B] hover:bg-[#E6AA1B] hover:border-[#252525]"
      >
        <BiSolidOffer height={21} width={18} />
        Save your Van
      </Button>
      <div className="w-full flex flex-col items-start justify-center p-5 border-one rounded-lg bg-white">
        <h4 className="regular-16 xl:regular-18 font-semibold text-[#1A3760] mb-5">
          Contact Us
        </h4>
        <form
          action="#"
          className="gap-y-4 md:gap-y-6 lg:gap-y-8 w-full flex flex-col items-start justify-center"
        >
          <Input
            type="text"
            placeholder="Name"
            required={true}
            // value=""
            className="contact-input"
          />
          <Input
            type="text"
            placeholder="Phone"
            required={true}
            // value=""
            className="contact-input"
          />
          <Input
            type="email"
            placeholder="Email"
            required={true}
            // value=""
            className="contact-input"
          />
          <div className="w-full gap-2 flex flex-col items-center justify-self-center">
          <Button className="message-btn regular-14">
            Send Message
          </Button>
          <Button className="phone-btn regular-14">
            + 359 981 731
          </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
