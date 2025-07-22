import React, { FC } from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

interface HomeProps {
    onDonateClick: () => void;
}

const Home: FC<HomeProps> = ({ onDonateClick }) => {
    return (
        <div className=" w-full relative bg-white h-[93vh]">
            <Navbar />
            <Welcome onDonateClick={onDonateClick} />
            <div className=" absolute rounded-b-[60px] inset-0 bg-[url('/assets/portrait1.jpg')] lg:bg-[url('/assets/temple1.png')] bg-cover bg-center bg-gray-400 bg-blend-multiply z-0 mx-0 lg:mx-14"></div>
        </div>
    );
};

export default Home;
