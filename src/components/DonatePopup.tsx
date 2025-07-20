import React, { useEffect } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const DonatePopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: 50000, // ₹500 in paise
      currency: "INR",
      name: "SJST Trust",
      description: "Donation",
      handler: (response: any) => {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      theme: { color: "#6366f1" }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Donate Now</h2>
        <p className="mb-4">Choose your donation method:</p>
        <div className="flex gap-4 mb-4">
          <button className="btn btn-primary w-full" onClick={handleRazorpay}>Pay with Razorpay</button>
        </div>
        <button className="btn btn-outline w-full" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DonatePopup;