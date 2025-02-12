import React from "react";

const Card = ({ title, description, Icon }) => {
    return (
        <div className="h-40 w-80 p-4 gap-4 flex items-center bg-secondary-700 border border-secondary-800 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-secondary-800 cursor-pointer">
            <div className="w-10 h-10">
                {Icon && <Icon width={40} height={40} />}
            </div>
            <div className="flex flex-col gap-3 justify-between leading-normal">
                <h5 className="text-2xl font-bold tracking-tight text-gray-50 ">{title}</h5>
                <p className=" font-normal text-gray-200">{description}</p>
            </div>
        </div>
    );
}
export default Card;