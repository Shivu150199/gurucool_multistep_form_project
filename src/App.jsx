import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MultiStepFormComponent from "./pages/MultiStepForm";
function App() {
    return (
        <section className="flex items-center justify-center w-full flex-col">
            <ToastContainer />
            <Navbar />
            <MultiStepFormComponent />
        </section>
    );
}

export default App;
