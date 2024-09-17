import { useContext, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonalInfo from "../components/PersonalInfo";
import AddressInfo from "../components/AddressInfo";
import Confirmation from "../components/Confirmation";
import fillForm from "../assets/fill_form.svg";
import { motion } from "framer-motion";
import { FormContext } from "../contextApi/FormContext";
function MultiStepFormComponent() {
    const {
        variants,
        formData,
        setFormData,
        submitForm,
        prevStep,
        nextStep,
        step,
        setStep,
    } = useContext(FormContext);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 md:mt-10 lg:w-[90%]">
            <div className="flex flex-col gap-6 p-8 items-center justify-center lg:w-[80%] w-full">
                <div role="tablist" className="tabs tabs-boxed w-full">
                    <a
                        role="tab"
                        className={`tab text-nowrap ${
                            step == 1 && "tab-active"
                        }`}
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
                    <a
                        role="tab"
                        className={`tab ${step == 3 && "tab-active"}`}
                    >
                        Preview
                    </a>
                </div>

                {/* Render Steps */}
                <motion.div
                    key={step} // This helps Framer Motion identify when step changes
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 1 }} // Adjust the duration as needed
                    className="mb-6 w-full"
                >
                    {step === 1 && (
                        <PersonalInfo
                            formData={formData}
                            setFormData={setFormData}
                        />
                    )}
                    {step === 2 && (
                        <AddressInfo
                            formData={formData}
                            setFormData={setFormData}
                        />
                    )}
                    {step === 3 && <Confirmation formData={formData} />}
                </motion.div>

                {/* Navigation Buttons */}
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
            </div>
            <div>
                <img src={fillForm} alt="" />
            </div>
        </div>
    );
}

export default MultiStepFormComponent;
