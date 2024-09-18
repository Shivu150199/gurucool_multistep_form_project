import React from "react";

const Tabs = ({ step }) => {
    return (
        <div role="tablist" className="tabs tabs-boxed w-full">
            <a
                role="tab"
                className={`tab text-nowrap ${step == 1 && "tab-active"}`}
            >
                Personal info
            </a>
            <a
                role="tab"
                className={`tab text-nowrap overflow-hidden ${
                    step == 2 && "tab-active"
                }`}
            >
                Address Info
            </a>
            <a role="tab" className={`tab ${step == 3 && "tab-active"}`}>
                Preview
            </a>
        </div>
    );
};

export default Tabs;
