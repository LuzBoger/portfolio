import clsx from "clsx";
import React from "react";

const Header = ({ title, subtitle, className }) => {
  return (
    <header className={clsx("bg-secondary-800 text-white relative", className)}>
      <div className="text-center py-16">
        <div className="relative z-10">
          {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
          {subtitle && <p className="text-lg mb-8">{subtitle}</p>}
        </div>
      </div>
    </header>
  );
};

export default Header;
