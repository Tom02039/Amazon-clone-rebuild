import React from "react";

const HomePageCard = ({ title, image, link }) => {
  return (
    <div className="h-[420px] bg-white m-3 z-30">
      <div className="text-lg xl:text-xl font-semibold mt-4 ml-4">{title}</div>
      <div className="h-[300px] m-4">
        <img className="h-full w-full object-cover" alt="card" src={image} />
      </div>
      <div className="text-blue-500 ml-4">{link}</div>
    </div>
  );
};

export default HomePageCard;
