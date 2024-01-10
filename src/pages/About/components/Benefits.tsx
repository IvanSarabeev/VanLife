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
      <div className="w-full h-fit flex flex-col items-start justify-center text-left px-5 py-6 mx-2 rounded-xl border-transparent transition-all ease-in-out duration-150 delay-100">
        <div
          className="flex items-center gap-2 rounded-tr-[24px] rounded-tl-[32px] rounded-br-[32px] rounded-bl-[25px] p-4 transition-all ease-in delay-150 border-[1px] border-transparent"
        >
          <Icon
            className={`w-8 h-8 ${item.iconFill} group-hover:animate-pulse`}
          />
        <h5 className="regular-18 lg:bold-20 font-bold text-[#102742]">
          {item.title}
        </h5>
        </div>
        <p className="regular-14 lg:regular-16 indent-1 mt-2 text-gray-600 delay-100">
          {item.text}
        </p>
      </div>
    </>
  );
};

export default Provider;
