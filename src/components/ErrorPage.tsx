import React, { FC } from "react";
import { Link } from "react-router-dom";

const ErrorPage: FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-2xl text-gray-600 mb-6">Page Not Found</p>
            <Link
                to="/"
                className="px-6 py-3 bg-[#FF8243] text-white font-semibold rounded-lg shadow hover:bg-[#e8702f] transition"
            >
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;
