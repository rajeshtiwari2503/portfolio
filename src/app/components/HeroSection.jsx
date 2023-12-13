"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
    return (
        <section className='py-16 '>
            <div className='grid grid-cols-1  sm:grid-cols-12'>
                <motion.div
                initial={{opacity:0 ,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.5}}
                  className='col-span-8 place-self-center text-left sm:text-left justify-self-start'
                 >
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>Hi  I'm  </span>
                        
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'RAJESH TIWARI',
                                1000, ' React js, Next js Web Developer',
                                'Mobile Developer',
                                1000,
                                'Design Admin Panel ',
                                1000,
                                'Design CRM ',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}

                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl'>
                    I am a Web frontend developer with a passion for creating interactive and responsive web applications. I have 2.6 year experience working with Javascript, React, Redux, Tailwind CSS, Material UI, Bootstrap, HTML,CSS and Git
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:lg-slate-200 text-white' >Hire Me</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white   mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Downloade CV</span>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                 initial={{opacity:0 ,scale:0.5}}
                 animate={{opacity:1,scale:1}}
                 transition={{duration:0.5}}
                 className='col-span-4 place-self-center mt-8 lg-mt-0'>
                    <div className='rounded-full bg-[#c0b4b4] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative' >
                        <Image className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' src="/profile.jpg" alt='image' width={200} height={180} />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection