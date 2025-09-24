 "use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2  py-14 gap-8 relative px-4 md:px-16'>
            
            {/* Background Blur Circle */}
            <div className='bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2'></div>

            {/* Left Side: Contact Info */}
            <div className='z-10 flex flex-col justify-center'>
                <h5 className='text-3xl sm:text-4xl font-extrabold text-white mb-4'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-6 max-w-md'>
                    I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                {/* Contact Details */}
                <div className='flex flex-col gap-3 mb-4'>
                    <div className='flex items-center gap-2 text-[#ADB7BE]'>
                        <PhoneIcon className='text-purple-500' />
                        <span className='text-white font-medium'>+91 9565892772</span>
                    </div>
                    <div className='flex items-center gap-2 text-[#ADB7BE]'>
                        <EmailIcon className='text-purple-500' />
                        <span className='text-white font-medium'>rajeshtiwari2503@gmail.com</span>
                    </div>
                </div>

                {/* Social Icons */}
                <div className='flex gap-6 mt-4'>
                    <Link href="https://github.com/rajeshtiwari2503" target='_blank' className='hover:scale-110 transition-transform'>
                        <GitHubIcon fontSize='large' className='text-white' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/rajesh-tiwari-9162bb189" target='_blank' className='hover:scale-110 transition-transform'>
                        <LinkedInIcon fontSize='large' className='text-white' />
                    </Link>
                </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className='z-10'>
                {/* <form className='flex flex-col gap-5'>
                    <div>
                        <label htmlFor='email' className='text-white mb-2 text-sm font-medium'>Your Email</label>
                        <input
                            type='email'
                            id='email'
                            required
                            placeholder='hello@gmail.com'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-purple-500 transition'
                        />
                    </div>
                    <div>
                        <label htmlFor='subject' className='text-white mb-2 text-sm font-medium'>Subject</label>
                        <input
                            type='text'
                            id='subject'
                            required
                            placeholder='Just saying hi'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-purple-500 transition'
                        />
                    </div>
                    <div>
                        <label htmlFor='message' className='text-white mb-2 text-sm font-medium'>Message</label>
                        <textarea
                            id='message'
                            required
                            placeholder='Let’s talk about...'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-purple-500 transition resize-none h-32'
                        />
                    </div>
                    <button className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-lg w-full transition'>
                        Send Message
                    </button>
                </form> */}

                  <form
                    action="mailto:rajeshtiwari2503@gmail.com"
                    method="POST"
                    encType="text/plain"
                    className="flex flex-col gap-4"
                >
                    <input
                        type="text"
                        name="Name"
                        placeholder="Your Name"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white rounded-lg p-3 w-full"
                        required
                    />
                    <input
                        type="email"
                        name="Email"
                        placeholder="Your Email"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white rounded-lg p-3 w-full"
                        required
                    />
                    <input
                        type="text"
                        name="Subject"
                        placeholder="Subject"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white rounded-lg p-3 w-full"
                        required
                    />
                    <textarea
                        name="Message"
                        placeholder="Your Message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white rounded-lg p-3 w-full h-32 resize-none"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-lg w-full transition"
                    >
                        Send Email
                    </button>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
