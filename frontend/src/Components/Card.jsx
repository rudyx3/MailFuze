import React from 'react';

export const Card = ({ title, children, img }) => {
  return (
    <div className="w-[430px] border-2 border-TextBlack rounded-3xl flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-center py-5 mb-2">
        <h3 className="font-semibold text-[36px] text-DeepPurple">{title}</h3>
        <img
          src={img}
          alt={title}
          className="border-2 rounded-lg border-DeepPurple mt-2 w-[330px]"
        />
      </div>
      <div className="flex-grow rounded-b-3xl bg-AccentPurpleBord bg-opacity-25 px-6 py-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
