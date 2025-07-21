import React, { FC } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";

interface WelcomeProps {
    onDonateClick: () => void;
}

const Welcome: FC<WelcomeProps> = ({ onDonateClick }) => (
    <section
        id="welcome"
        className="h-screen flex flex-col items-center justify-center text-center p-6 text-white relative z-20 gap-12 lg:gap-9"
    >
        <div className=" border border-white p-4 rounded-lg mx-0 lg:mx-16 grid gap-3">
            <h1
                className=" text-lg xl:text-2xl font-mono flex gap-4 justify-center"
                style={{ fontFamily: "Darker Grotesque, sans-serif" }}
            >
                <sup>
                    <FaQuoteLeft />
                </sup>
                ମନ ଶାନ୍ତ ହେଉ, ଯେପରି କୃଷ୍ଣଙ୍କ ବାଂଶୀର ଧ୍ୱନି ଶାନ୍ତି ଦିଏ। ଆମ
                ଉଦ୍ଦେଶ୍ୟ ହେଉ ଶୁଦ୍ଧ, ଯେପରି ରାଧାଙ୍କ ଆନୁରାଗ ନିର୍ମଳ। ପ୍ରେମରେ ଅଛି
                ସମର୍ପଣ, ସମର୍ପଣରେ ଅଛି ଦିବ୍ୟ ଏକତା।
                <sup>
                    <FaQuoteRight />
                </sup>
            </h1>
            <p className=" text-sm mb-4">— ଜୟଦେବଙ୍କ ଗୀତା ଗୋବିନ୍ଦ ରେ ପ୍ରେରିତ</p>
        </div>
        <div className=" flex gap-4">
            <button className=" px-4 py-2 rounded-[20px] font-semibold hover:shadow-[inset_2px_3px_5px_rgba(0,0,0,0.1)] text-white bg-[#FF8243] flex gap-3 items-center">
                <b>
                    <GiBookshelf />
                </b>
                Learn More
            </button>
            <button
                onClick={onDonateClick}
                className=" px-4 py-2 rounded-[20px] font-semibold hover:shadow-[inset_2px_3px_5px_rgba(0,0,0,0.1)] text-white bg-[#FF8243] flex gap-3 items-center"
            >
                <b>
                    <GiPayMoney />
                </b>
                Donate
            </button>
        </div>
    </section>
);

export default Welcome;
