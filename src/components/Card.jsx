import React from "react";

const Card = ({ title, titleHref, description, Icon, Button, buttonHref }) => {
    return (
        <>
            {/*  */}
            <div className="mb-10 overflow-hidden rounded-lg bg-secondary-700 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
                <div className="object-cover">
                    {Icon && <Icon />}
                </div>
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                        <a
                            href={titleHref ? titleHref : "/#"}
                            className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                            {title}
                        </a>
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                        {description}
                    </p>

                    {Button && (
                        <a
                            href={buttonHref ? buttonHref : "#"}
                            className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
                        >
                            {Button}
                        </a>
                    )}
                </div>
            </div>
            {/*  */}
        </>
    );
}
export default Card;
/*
<div className="h-64 w-96 p-4 gap-4 flex bg-secondary-700 border border-secondary-800 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-secondary-800 cursor-pointer transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:rotate-1">
    <div className="w-15 flex items-center justify-center">
        {Icon && <Icon width={60} height={60} />}
    </div>
    <div className="flex flex-col gap-3 leading-normal">
        <h5 className="text-2xl font-bold tracking-tight text-gray-50 ">{title}</h5>
        <p className=" font-normal text-gray-200">{description}</p>
    </div>
</div>
*/
