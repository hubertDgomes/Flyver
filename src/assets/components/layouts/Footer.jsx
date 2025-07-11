import React from "react";
import Container from "../../Container";
import Flex from "../../Flex";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { BsPinterest } from "react-icons/bs";
const Footer = () => {
return (
    <div className="bg-[#1E1E1E]">
        <Container className={"py-[30px]"}>
            <Flex className={"justify-between"}>
                <div className="">
                    <p className="font-logo1 font-semibold text-[16px] text-white mb-[10px]">GET OUR EMAIL NEWSLETTER</p>
                    <input className="bg-white py-[5px] px-[20px]" placeholder="Enter your email"/>
                    <button className="py-[6px] px-[11px] bg-[#50A1FF] text-white">Subscribe</button>
                </div>

                <div className="text-center">
                    <p className="font-logo1 font-semibold text-[16px] text-white">FOLLOW US</p>
                    <Flex className={"justify-between gap-x-[10px] cursor-pointer"}>
                            <CiFacebook className="text-white text-[24px]" />
                            <FiYoutube className="text-white text-[24px]" />
                            <AiFillTikTok className="text-white text-[24px]" />
                            <FaInstagram className="text-white text-[24px]" />
                            <BsPinterest className="text-white text-[24px]" />
                    </Flex>
                </div>

                <div className="">
                    <p className="text-white font-semibold text-[16px] font-logo1">GET THE APP</p>
                    <button className="font-logo1 text-[16px] py-[6px] px-[10px] bg-white text-left rounded-[5px]">Download the App</button>
                </div>
                
            </Flex>

            <Flex className={"justify-between font-logo1 mt-[30px]"}>
                    <div className="">
                            <p className="text-[#50A1FF] font-logo1 font-medium text-[18px]">Places</p>
                            <ul className="font-logo1 font-semibold text-[16px] text-white">
                                    <li className="mb-2">All Places</li>
                                    <li className="mb-2">Latest Places</li>
                                    <li className="mb-2">Most Popular</li>
                                    <li className="mb-2">Places to Eat</li>
                                    <li className="mb-2">Random</li>
                                    <li className="mb-2">Nearby</li>
                                    <li>Add a Place</li>
                            </ul>
                    </div>
                    <div className="">
                        <p className="text-[#50A1FF] font-logo1 font-medium text-[18px]">Editorial</p>
                            <ul className="font-logo1 font-semibold text-[16px] text-white">
                                    <li className="mb-2">Stories</li>
                                    <li className="mb-2">Itineraries</li>
                                    <li className="mb-2">Lists</li>
                                    <li className="mb-2">Video</li>
                                    <li className="mb-2">Podcast</li>
                                    <li className="mb-2">Newsletters</li>
                            </ul>
                    </div>
                    <div className="">
                        <p className="text-[#50A1FF] font-logo1 font-medium text-[18px]">Trips</p>
                            <ul className="font-logo1 font-semibold text-[16px] text-white">
                                    <li className="mb-2">All Trips</li>
                                    <li className="mb-2">Family Trip</li>
                                    <li className="mb-2">Food & Drink</li>
                                    <li className="mb-2">History & Culture  </li>
                                    <li className="mb-2">Wildlife & Nature</li>
                            </ul>
                    </div>
                    <div className="">
                        <p className="text-[#50A1FF] font-logo1 font-medium text-[18px]">Community</p>
                            <ul className="font-logo1 font-semibold text-[16px] text-white">
                                    <li className="mb-2">Membership</li>
                                    <li className="mb-2">Feedback</li>
                                    <li className="mb-2">Guidelines</li>
                                    <li className="mb-2">Blog</li>
                                    <li className="mb-2">Gifts</li>
                                    <li className="mb-2">Ideas</li>
                                    <li className="mb-2">Work with Us</li>
                            </ul>
                    </div>
                    <div className="">
                        <p className="text-[#50A1FF] font-logo1 font-medium text-[18px]">Company</p>
                            <ul className="font-logo1 font-semibold text-[16px] text-white">
                                    <li className="mb-2">About us</li>
                                    <li className="mb-2">FAQ</li>
                                    <li className="mb-2">Privacy Policy</li>
                                    <li className="mb-2">Cookie Policy</li>
                                    <li className="mb-2">Terms of Use</li>
                                    <li className="mb-2">About Us</li>
                                    <li className="mb-2">Contact</li>
                            </ul>
                    </div>
            </Flex>
        </Container>
    </div>
);
};

export default Footer;
