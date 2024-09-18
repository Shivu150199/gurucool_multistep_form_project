import React from "react";

const NavigationBtn = ({ step, prevStep, nextStep, submitForm }) => {
    return (
        <div className="flex justify-between items-center w-full">
            <button
                disabled={step === 1}
                className={`bg-gray-500 text-white px-4 py-2 rounded ${
                    step === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-600"
                }`}
                onClick={prevStep}
            >
                Back
            </button>
            {step < 3 ? (
                <button
                    className="bg-primary text-white px-4 py-2 rounded hover:shadow-md"
                    onClick={nextStep}
                >
                    Next
                </button>
            ) : (
                <button
                    className="bg-primary text-white px-4 py-2 rounded hover:shadow-md"
                    onClick={submitForm}
                >
                    Submit
                </button>
            )}
        </div>
    );
};

export default NavigationBtn;
