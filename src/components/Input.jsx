import React from "react";

const Input = ({ label, type, name, value, onChange, placeholder }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                name={name}
                defaultValue={value}
                onChange={onChange}
                className="input input-bordered mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
