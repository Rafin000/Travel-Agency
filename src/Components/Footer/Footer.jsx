import React from 'react'
import './footer.css'
import video2 from "../../Assets/video.mp4"
import { FiSend } from "react-icons/fi"
import { MdOutlineTravelExplore } from "react-icons/md"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiOutlineYoutube } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa"
import { FiChevronRight } from "react-icons/fi"

const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type='video/mp4'></video>
            </div>

            <div className="seeContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv Flex">
                        <input type="text" placeholder='Enter Email Address' />
                        <button className="btn flex" type='submit'>
                            <FiSend className='icon' />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="" className="logo flex">
                                <MdOutlineTravelExplore className='icon' />
                                Travel.
                            </a>
                        </div>

                        <div className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at quam eveniet voluptate nam ex eius dignissimos illum! Officiis praesentium ipsa expedita architecto deserunt inventore voluptate temporibus at ipsum beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at quam eveniet voluptate nam ex eius dignissimos illum! Officiis praesentium ipsa expedita architecto deserunt inventore voluptate temporibus at ipsum beatae!
                        </div>

                        <div className="footerSocials">
                            <AiOutlineTwitter className='icon' />
                            <AiOutlineYoutube className='icon' />
                            <AiOutlineInstagram className='icon' />
                            <FaTripadvisor className='icon' />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Payment
                            </li>

                        </div>
                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Europe
                            </li>

                        </div>
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                RentCars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Tripadvisor
                            </li>

                        </div>


                    </div>

                    <div className="footerDiv flex">
                        <small>
                            BEST TRAVEL WEBSITE THEME
                        </small>
                        <small>
                            COPYRIGHTS RESERVED - Rafin000
                        </small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer