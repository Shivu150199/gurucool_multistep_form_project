import Input from "./Input";

function PersonalInfo({ formData, setFormData }) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold text-primary text-shadow">
                    Personal information
                </h1>
            </div>

            <Input
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter your name"
            />

            <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter your email"
            />

            <Input
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter your phone number"
            />
        </div>
    );
}
export default PersonalInfo;
