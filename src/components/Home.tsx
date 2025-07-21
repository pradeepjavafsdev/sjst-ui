import React, { FC } from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

interface HomeProps {
    onDonateClick: () => void;
}

const Home: FC<HomeProps> = ({ onDonateClick }) => {
    return (
        <div className=" w-full relative bg-white">
            <Navbar onDonateClick={onDonateClick} />
            <Welcome onDonateClick={onDonateClick} />
            <div className=" absolute rounded-b-[40px] inset-0 bg-[url('/pic1.png')] bg-cover bg-center bg-gray-400 bg-blend-multiply z-0 mx-0 lg:mx-14"></div>
        </div>
    );
};

export default Home;
