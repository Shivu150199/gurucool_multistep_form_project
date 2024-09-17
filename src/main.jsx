import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FormProvider } from "./contextApi/FormContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FormProvider>
            <App />
        </FormProvider>
    </StrictMode>
);
