import React, { FC } from "react";
import Navbar from "./Navbar";
import ContactWelcome from "./ContactWelcome";

const ContactHome: FC = () => {
    return (
        <div className=" w-full relative bg-white h-[60vh]">
            <Navbar />
            <ContactWelcome />
            <div className=" absolute rounded-b-[60px] inset-0 bg-[url('/assets/sea2.jpg')] lg:bg-[url('/assets/sea1.png')] bg-cover bg-center z-0 mx-0 lg:mx-14"></div>
        </div>
    );
};

export default ContactHome;
