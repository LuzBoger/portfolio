import React from "react";

const CardEmoji = ({ title, description, emoji }) => {
  return (
    <div className="h-40 w-80 p-4 gap-4 flex items-center bg-secondary-700 border border-secondary-800 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-secondary-800 cursor-pointer transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:rotate-1">
      <div className="w-10 h-10 text-3xl transform transition duration-300 hover:rotate-12">
        {emoji}
      </div>
      <div className="flex flex-col gap-3 justify-between leading-normal">
        <h3 className="text-2xl font-bold tracking-tight text-gray-50">
          {title}
        </h3>
        <p className="font-normal text-gray-200">{description}</p>
      </div>
    </div>
  );
};
export default CardEmoji;
