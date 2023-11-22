import React from "react";

type ProviderProps = {
  item: {
    icon: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    iconFill: string;
    background: string;
    title: string;
    text: string;
  };
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const Provider = ({ item, Icon }: ProviderProps) => {
  return (
    <>
      <div className="group w-full h-fit flex flex-col items-start justify-center text-left px-5 py-6 mx-2 rounded-xl border-[1px] border-transparent transition-all ease-in-out duration-150 delay-100 hover:bg-gradient-to-tr hover:from-[#FFCC8D]/20 via-gray-100 hover:to-slate-500/80 hover:rounded-2xl hover:border-black">
        <div
          className={`rounded-tr-[24px] rounded-tl-[32px] rounded-br-[32px] rounded-bl-[25px] p-4 mb-4 transition-all ease-in delay-150 border-[1px] border-transparent group-hover:border-[#102742] group-hover:rotate-12 ${item.background}`}
        >
          <Icon
            className={`w-8 h-8 ${item.iconFill} group-hover:animate-pulse`}
          />
        </div>
        <h5 className="regular-18 lg:bold-20 font-bold text-[#102742]">
          {item.title}
        </h5>
        <p className="regular-14 lg:regular-16 indent-1 mt-2 text-gray-600 group-hover:text-[#102742] delay-100">
          {item.text}
        </p>
      </div>
    </>
  );
};

export default Provider;
