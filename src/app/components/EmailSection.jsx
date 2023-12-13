import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div>

                    <Link className='cursor-pointer' href={"https://github.com/rajeshtiwari2503"} target='_black'>
                        <GitHubIcon fontSize='large' style={{ color: "#c0b4b4" }} />
                    </Link>

                    <Link className='cursor-pointer ms-8' href={"https://www.linkedin.com/in/rajesh-tiwari-9162bb189"} target='_black'>
                        <LinkedInIcon fontSize='large' style={{ color: "#c0b4b4" }} />
                    </Link>

                </div>
            </div>
            <div>
                <form className='flex flex-col  '>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white mb-2 text-sm font-medium'>Your Email</label>
                        <input
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            type='email' id='email' required placeholder='hello@gmail.com' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white mb-2 text-sm font-medium'>Subject</label>
                        <input
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            type='text' id='subject' required placeholder='Just saying hi' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white mb-2 text-sm font-medium'>Message</label>
                        <textarea
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            id='message' required placeholder='Lets talk about...' />
                    </div>
                    <button className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection