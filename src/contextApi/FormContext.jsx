import { children, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
    });

    // Persist to local storage
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("formData"));
        if (savedData) {
            setFormData(savedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);
    const validateStep = () => {
        let isValid = true;

        // Validation for Step 1
        if (step === 1) {
            if (!formData.name) {
                toast.error("Name is required");
                isValid = false;
            }
            if (!formData.email) {
                toast.error("Email is required");
                isValid = false;
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(formData.email)) {
                    toast.error("Please enter a valid email");
                    isValid = false;
                }
            }
            if (!formData.phone) {
                toast.error("Phone number is required");
                isValid = false;
            }
        }

        // Validation for Step 2
        if (step === 2) {
            if (!formData.address1) {
                toast.error("Address 1 is required");
                isValid = false;
            }
            if (!formData.city) {
                toast.error("City is required");
                isValid = false;
            }
            if (!formData.state) {
                toast.error("State is required");
                isValid = false;
            }
            if (!formData.zip) {
                toast.error("ZIP code is required");
                isValid = false;
            }
        }

        return isValid;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep(step + 1);
        } else {
            toast("Please fill all fields correctly.");
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };
    const submitForm = () => {
        toast("Submitting form...");
        setTimeout(() => {
            toast("Form submitted successfully!");
            localStorage.removeItem("formData");
        }, 1000);
        setStep(1);
        setFormData({
            name: "",
            email: "",
            phone: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
        });
    };
    const variants = {
        hidden: { opacity: 0, rotateY: 180 },
        visible: { opacity: 1, rotateY: 0 },
        exit: { opacity: 0, rotateY: -180 },
    };
    console.log(formData);
    return (
        <FormContext.Provider
            value={{
                variants,
                formData,
                setFormData,
                submitForm,
                prevStep,
                nextStep,
                step,
                setStep,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};
