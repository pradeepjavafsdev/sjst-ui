import React, { FC } from "react";
import { BiSolidMessageCheck } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa6";

const ContactForm: FC = () => {
    return (
        <div className="hero bg-white min-h-screen py-10">
            <div className="hero-content grid lg:grid-cols-2">
                <div className="text-center lg:text-left">
                    <div className=" w-full flex items-center justify-center lg:justify-start">
                        <img
                            src="/assets/world.png"
                            alt=""
                            className=" w-[80%]"
                        />
                    </div>
                    <h1 className="text-5xl font-bold text-[#FF8243]">
                        Get In Touch
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <div className=" grid gap-4 mb-6 justify-center lg:justify-start">
                        <div className=" flex items-center gap-4">
                            <FaMapLocationDot className=" text-2xl text-[#FF8243]" />
                            <p className="text-black">
                                1234 Street Name, City, State, 12345
                            </p>
                        </div>
                        <div className=" flex items-center gap-4">
                            <FaPhone className=" text-2xl text-[#FF8243]" />
                            <p className="text-black">+91-123-456-7890</p>
                        </div>
                        <div className=" flex items-center gap-4">
                            <FaEnvelopeOpenText className=" text-2xl text-[#FF8243]" />
                            <p className="text-black">demo.example@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white w-full shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <h1 className=" text-center text-3xl font-bold mb-4 text-[#FF8243]">
                                Send Us A Message
                            </h1>
                            <div className=" grid">
                                <label className="label text-black text-lg font-mono font-semibold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="input w-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8243] rounded-lg"
                                    placeholder="Name"
                                />
                            </div>
                            <div className=" grid">
                                <label className="label text-black text-lg font-mono font-semibold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="input w-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8243] rounded-lg"
                                    placeholder="Email"
                                />
                            </div>
                            <div className=" grid">
                                <label className="label text-black text-lg font-mono font-semibold">
                                    Message
                                </label>
                                <textarea
                                    className="textarea w-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8243] rounded-lg"
                                    placeholder="Your message here..."
                                    rows={4}
                                ></textarea>
                            </div>
                            <button className=" px-4 py-2 rounded-[20px] font-semibold hover:shadow-[inset_2px_3px_5px_rgba(0,0,0,0.1)] text-white bg-[#FF8243] flex gap-3 items-center mt-4">
                                <b>
                                    <BiSolidMessageCheck />
                                </b>
                                Send Message
                            </button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
