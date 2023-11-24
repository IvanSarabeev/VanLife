import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center mx-auto">
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#FF8C38"
        innerCircleColor="#FFCC8D"
        middleCircleColor="#AAAAAA"
      />
    </div>
  );
};

export default Loader;
