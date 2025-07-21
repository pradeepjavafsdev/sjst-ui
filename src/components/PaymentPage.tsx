import React, { useState } from "react";

const PaymentPage: React.FC = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Payment of ₹${amount} by ${name} initiated!`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 absolute z-auto">
            <form
                className="bg-white p-6 rounded-lg shadow-lg w-96"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4">Donate</h2>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Amount (₹)"
                    className="input input-bordered w-full mb-4"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <button className="btn btn-primary w-full" type="submit">
                    Proceed
                </button>
            </form>
        </div>
    );
};

export default PaymentPage;
