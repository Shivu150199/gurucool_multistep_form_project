import { useContext, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonalInfo from "../components/PersonalInfo";
import AddressInfo from "../components/AddressInfo";
import Confirmation from "../components/Confirmation";
import fillForm from "../assets/fill_form.svg";
import { motion } from "framer-motion";
import { FormContext } from "../contextApi/FormContext";
import Tabs from "../components/Tabs";
import NavigationBtn from "../components/NavigationBtn";
import address from "../assets/address.svg";
import detail from "../assets/detail.svg";
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
                <Tabs step={step} />

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

                <NavigationBtn
                    step={step}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    submitForm={submitForm}
                />
            </div>
            <div>
                {step == 1 && <img src={fillForm} alt="" />}
                {step == 2 && <img src={address} alt="" />}
                {step == 3 && <img src={detail} alt="" />}
            </div>
        </div>
    );
}

export default MultiStepFormComponent;
