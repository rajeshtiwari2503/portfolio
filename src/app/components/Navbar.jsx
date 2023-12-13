"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navLinks = [
    {
        title: "About",
        path: "about"
    },
    {
        title: "Projects",
        path: "projects"
    },
    {
        title: "Contact",
        path: "contact"
    },
    {
        title: "Bio",
        path: "bio"
    },

]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className='fixed top-0 border border-[#33353F] left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold' >
                    RJESH TIWARI
                </Link>

                {/* <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ? 
                    (<>
                    <button onClick={()=>setNavbarOpen(true)}
                    className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <Bars3Icon  className='w-5 h-5' /> 
                        </button>
                        </> 
                    )
                        :  
                       ( <>
                       <button  onClick={()=>setNavbarOpen(false)} 
                       className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                         
                        <div className='w-5 h-5'>X</div>
                        </button>
                        </>)
                        }
                </div> 
            */}
                {/* <div className='menu hidden md:block md:w-auto ' id='navbar'> */}
                <div className='menu   ' id='navbar'>
                    <ul className='flex pt-2 pb-2 md:p-0  md:flex-row md:space-x-8 mt-0'>
                        {/* {navLinks?.map((item, i) =>
                            <li key={i}>
                                <NavLink href={item?.path} title={item?.title} />
                            </li>
                             
                        )} */}
                        <li className='cursor-pointer'>
                            <Link href={"https://github.com/rajeshtiwari2503"} target='_black'>
                                <GitHubIcon fontSize='large' style={{ color: "#c0b4b4" }} />
                            </Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link href={"https://www.linkedin.com/in/rajesh-tiwari-9162bb189"} target='_black'>
                                <LinkedInIcon fontSize='large' style={{ color: "#c0b4b4" }} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar