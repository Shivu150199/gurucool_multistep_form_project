import React from "react";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0 shadow-md z-10">
            <a className="btn btn-ghost text-2xl font-bold text-shadow">
                <span>Multi step</span>{" "}
                <span className="text-primary">Form</span>
            </a>
        </div>
    );
};

export default Navbar;
