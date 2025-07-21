import React, { useState, useEffect } from "react";
import { FaHome, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC<{ onDonateClick: () => void }> = ({ onDonateClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 z-50 p-4 transition-all duration-300 grid grid-cols-[92%] justify-center ${
                scrolled
                    ? "bg-white/80 shadow-md backdrop-blur text-black"
                    : "bg-transparent text-white"
            }`}
        >
            {/* Large screens layout */}
            <div className="hidden lg:flex justify-between items-center">
                {/* Left */}
                <div className="flex gap-4">
                    <a
                        href="#welcome"
                        className="px-4 py-2 rounded-[20px] font-semibold hover:shadow-[inset_2px_3px_5px_rgba(0,0,0,0.1)] text-white bg-[#FF8243] flex gap-3 items-center"
                    >
                        <FaHome />
                        Home
                    </a>
                </div>

                {/* Center */}
                <div className="text-xl font-bold">SJST Trust</div>

                {/* Right */}
                <div className="flex gap-4">
                    <a
                        href="#contact"
                        className="px-4 py-2 rounded-[20px] font-semibold hover:shadow-[inset_2px_3px_5px_rgba(0,0,0,0.1)] text-white bg-[#FF8243] flex gap-3 items-center"
                    >
                        <FaEnvelope />
                        Contact
                    </a>
                </div>
            </div>

            {/* Mobile/Tablet layout */}
            <div className="flex lg:hidden justify-between items-center">
                {/* Left: Logo */}
                <div className="text-xl font-bold">SJST Trust</div>

                {/* Right: Menu toggle button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl focus:outline-none"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="lg:hidden mt-4 flex flex-col gap-3 text-center rounded shadow-md py-4">
                    <a
                        href="#welcome"
                        onClick={() => setMenuOpen(false)}
                        className="px-4 py-2 flex justify-center items-center gap-2 font-medium text-white bg-[#FF8243]"
                    >
                        <FaHome />
                        Home
                    </a>
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="px-4 py-2 flex justify-center items-center gap-2 font-medium text-white bg-[#FF8243]"
                    >
                        <FaEnvelope />
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
