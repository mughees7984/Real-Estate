import React from 'react';
import { MdLocationOn } from "react-icons/md";
import "./Hero.css";
import CountUp from 'react-countup';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className=" hero-container">
                {/* Left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                        initial = {{y: "2rem", opacity: 0}}
                        animate = {{y: 0, opacity: 1}}
                        transition={{ duration: 2, type: "spring" }}
                        >Discover<br />Most Suitable<br /> Property</motion.h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
                        <span className='secondaryText'>Forget all difficulties in findind a residence for you</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <MdLocationOn color="var(--blue)" size={25} />
                        <input type='text' />
                        <button className="button">Search</button>
                    </div>

                    <div className="flexStart stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='stat-title'>Premium Products</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='stat-title'>Happy Customers</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='stat-title'>Awards Winning</span>
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className="hero-right">
                    <motion.div
                    initial={{ x: "7rem", opacity: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    className="image-container">
                        <img src='./hero-image.png' alt='hero' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero