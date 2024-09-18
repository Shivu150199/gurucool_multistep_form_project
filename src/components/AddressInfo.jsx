import Input from "./Input";

function AddressInfo({ formData, setFormData }) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2 className="text-lg text-primary text-center font-bold mb-4 text-shadow">
                Address Information
            </h2>

            <Input
                label="Address Line 1"
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                className="input input-bordered mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter your address line 1"
            />

            <Input
                label="Address Line 2"
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                className="input input-bordered mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter your address line 2"
            />

            <Input
                label="City"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="input input-bordered mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter your city"
            />

            <Input
                label="State"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="input input-bordered mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter your state"
            />

            <Input
                label="Zip Code"
                type="number"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="input input-bordered mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter your zip code"
            />
        </div>
    );
}
export default AddressInfo;
