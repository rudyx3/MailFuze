import React from "react";

export const LineBreak = ({cln}) => {
  return (
    <div className={cln ? cln : ""}>
      <div className="w-full flex items-center justify-center ">
        <div className="w-[250px] opacity-60 bg-AccentPurpleBord rounded-lg h-[6px] px-8"></div>
      </div>
    </div>
  );
};

export default LineBreak;
