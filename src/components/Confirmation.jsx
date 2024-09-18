function Confirmation({ formData }) {
    return (
        <div>
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold text-primary text-shadow">
                    Preview
                </h1>
            </div>
            <div className="mb-4 border-[1px] rounded-md">
                <h3 className="text-md font-bold p-2 text-center border-b-[1px] text-primary">
                    Personal Information
                </h3>
                <p className="p-2 flex ic justify-around border-b-[1px]">
                    <strong className="">Name:</strong> {formData.name}
                </p>
                <p className="p-2 flex ic justify-around border-b-[1px]">
                    <strong className="">Email:</strong> {formData.email}
                </p>
                <p className="p-2 flex ic justify-around border-b-[1px]">
                    <strong className="">Phone:</strong> {formData.phone}
                </p>
            </div>

            <div className="mb-4 border-[1px] rounded-md">
                <h3 className="text-md font-bold p-2 text-center border-b-[1px] text-primary">
                    Address Information
                </h3>
                <p className="p-2 flex ic justify-around border-b-[1px]">
                    <strong>Address Line 1:</strong> {formData.address1}
                </p>
                <p className="p-2 flex ic justify-around border-b-[1px]">
                    <strong>Address Line 2:</strong> {formData.address2}
                </p>
                <p className="p-2 flex ic justify-around border-b-[1px]">
                    <strong>City:</strong> {formData.city}
                </p>
                <p className="p-2 flex ic justify-around border-b-[1px]">
                    <strong>State:</strong> {formData.state}
                </p>
                <p className="p-2 flex ic justify-around border-b-[1px]">
                    <strong>Zip Code:</strong> {formData.zip}
                </p>
            </div>
        </div>
    );
}
export default Confirmation;
