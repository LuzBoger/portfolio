import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    const isNotOnHome = location.pathname !== '/';
    const isNotCV = location.pathname !== '/about-me';
    const isNotAboutMe = location.pathname !== '/curriculum-vitae';
    return (
        <nav className="flex w-screen justify-center gap-6 py-6 fixed z-50 bg-secondary-900 text-white">
            {isNotOnHome && <Link to="/" className={"relative inline-block underline-animation"}>Accueil</Link>}
            {isNotCV && <Link to="/about-me" className={"relative inline-block underline-animation"}>About me</Link>}
            {isNotAboutMe && <Link to="/curriculum-vitae" className={"relative inline-block underline-animation"}>Curriculum vitæ</Link>}
        </nav>
    )
}
export default Navigation;