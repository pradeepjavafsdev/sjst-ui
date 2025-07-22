import React, { useState } from "react";
import { GiBookshelf, GiPayMoney } from "react-icons/gi";

const DonatePopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [amount, setAmount] = useState<number | string>("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);

  const handleDonate = () => {
    if (!amount || !name || !mobile) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Donation Details:", {
      amount,
      name,
      mobile,
    });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-1">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Icon */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Donate Now</h2>
        <p className="mb-4 text-center">Choose your donation amount:</p>

        {/* Fixed Amount Buttons */}
        <div className="flex gap-1 mb-4">
          {[200, 300, 500].map((fixedAmount) => (
            <button
              key={fixedAmount}
              className={`btn btn-outline btn-sm ${
                amount === fixedAmount ? "btn-primary" : ""
              }`}
              onClick={() => setAmount(fixedAmount)}
            >
              ₹{fixedAmount}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <input
          type="number"
          placeholder="Other Amount"
          className="input input-bordered w-full mb-4"
          value={amount === 0 ? "" : amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Mobile Number Input */}
        <input
          type="text"
          placeholder="Mobile Number"
          className="input input-bordered w-full mb-4"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <div className="flex flex-col items-center gap-4">
          {/* Donate Button */}
          <button className=" px-4 py-2 rounded-[20px] font-semibold hover:shadow-[inset_2px_3px_5px_rgba(0,0,0,0.1)] text-white bg-[#FF8243] flex gap-3 items-center">
            <b>
              <GiPayMoney />
            </b>
            Donate
          </button>
        </div>

        {/* QR Code Display */}
        {qrCodeData && (
          <div className="mt-4 text-center">
            <p className="mb-2">Scan this QR code for your donation details:</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonatePopup;
