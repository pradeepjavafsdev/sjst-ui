import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => (
    <footer className="footer footer-horizontal footer-center rounded p-10 bg-white text-black shadow-[inset_2px_3px_5px_rgba(0,0,0,0.1)]">
        <nav className="grid grid-flow-col gap-4">
            <a className="link no-underline hover:text-[#FF8243]">Home</a>
            <a className="link no-underline hover:text-[#FF8243]">Contact</a>
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-4">
                <a className=" text-white bg-[#FF8243] cursor-pointer p-4 rounded-[50%] shadow-xl text-xl border border-gray-100 transition duration-300">
                    <FaFacebookF />
                </a>
                <a className=" text-white bg-[#FF8243] cursor-pointer p-4 rounded-[50%] shadow-xl text-xl border border-gray-100 transition duration-300">
                    <FaInstagram />
                </a>
                <a className=" text-white bg-[#FF8243] cursor-pointer p-4 rounded-[50%] shadow-xl text-xl border border-gray-100 transition duration-300">
                    <FaXTwitter />
                </a>
                <a className=" text-white bg-[#FF8243] cursor-pointer p-4 rounded-[50%] shadow-xl text-xl border border-gray-100 transition duration-300">
                    <FaWhatsapp />
                </a>
            </div>
        </nav>
        <aside>
            <p>
                Copyright © {new Date().getFullYear()} - All right reserved by
                ACME Industries Ltd
            </p>
        </aside>
    </footer>
);

export default Footer;
