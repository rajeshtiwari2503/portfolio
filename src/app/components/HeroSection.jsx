"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';



const HeroSection = () => {
    return (
        <section className='md:py-16 py-5 '>
            <div className='grid grid-cols-1  sm:grid-cols-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-8 place-self-center text-left sm:text-left justify-self-start'
                >

                    <div className="text-left mb-8 mt-10">
                        <div className="flex mb-8 flex-col md:flex-row justify-between items-center">
                            {/* Gradient Text */}
                            <div className="mt-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 
                  text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-4 md:mb-0">
                                Hi, I'm RAJESH TIWARI.
                            </div>

                            {/* Profile Image (hidden on small screens) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="md:hidden block  "
                            >
                                <div className="rounded-full bg-[#c0b4b4] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Profile"
                                        fill
                                        className="object-cover rounded-full"
                                    />
                                </div>
                            </motion.div>
                        </div>
                        <div className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl font-medium space-y-3">
                            <p>
                                💻 Fullstack <span className="text-white font-semibold">MERN Developer</span> with <span className="text-white font-semibold">6+ years of experience.</span>
                            </p>
                            <p>
                                ⚛️ Expert in <span className="text-white font-semibold">React.js, Next.js, and Redux</span> for building modern, interactive, and responsive UIs.
                            </p>
                            <p>
                                🚀 Skilled in <span className="text-white font-semibold">Node.js, Express.js, and REST APIs</span> for high-performance backend development.
                            </p>
                            <p>
                                📊 Proficient in <span className="text-white font-semibold">MongoDB & Database Architecture</span> for scalable data-driven applications.
                            </p>
                            <p>
                                📱 Experienced in <span className="text-white font-semibold">Mobile App Development</span> and delivering cross-platform solutions.
                            </p>
                            <p>
                                ⚙️ Specialized in designing <span className="text-white font-semibold">
                                    Admin Panels, Dashboards, CRM Solutions, E-commerce Platforms, ERP Systems, SaaS Applications, Inventory Management Systems,
                                    Project Management Tools, Analytics Platforms, and Booking/Reservation Systems.
                                </span>
                            </p>
                            <p>
                                ✨ Passionate about building <span className="text-white font-semibold">clean, user-friendly, and scalable</span> digital solutions.
                            </p>
                        </div>
                    </div>



                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='hidden md:block col-span-4 place-self-center  '>
                     <div className="rounded-full bg-[#c0b4b4] w-[250px] h-[250px]  relative overflow-hidden">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Profile"
                                        fill
                                        className="object-fit rounded-full"
                                    />
                                </div>
                </motion.div>

            </div>
            {/* <div className="mt-10">
             <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-8 place-self-center text-left sm:text-left justify-self-start'
                >
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl font-medium mb-6 text-left">
                        I am a Fullstack (MERN) Developer with <span className="text-white font-semibold">6+ years of professional experience</span>
                        in designing, developing, and deploying scalable web and mobile applications. My expertise lies in
                        <span className="text-white font-semibold"> JavaScript, React.js, Redux, Next.js, Tailwind CSS, Material UI, Bootstrap, HTML, and CSS</span>
                        for crafting sleek and modern frontends, as well as
                        <span className="text-white font-semibold"> Node.js, Express.js, MongoDB, and REST APIs</span>
                        for robust backends and database management. I am passionate about creating seamless digital experiences, writing clean and maintainable code,
                        and delivering solutions that combine performance with great design. I am also proficient in version control tools like
                        <span className="text-white font-semibold">Git & GitHub</span>, with hands-on experience deploying applications on
                        <span className="text-white font-semibold"> Vercel, Netlify, and AWS</span>.
                    </p>
                </motion.div>
                </div> */}
        </section>
    )
}

export default HeroSection