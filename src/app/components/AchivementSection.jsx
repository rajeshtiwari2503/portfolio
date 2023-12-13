"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const AnimatedNumbers=dynamic(
    ()=>{
    return import("react-animated-numbers");
    },
    {ssr:false}
);

const achivementsList = [
    {
        metric: "Projects",
        value: "10",
        postfix:"+"
    },
    {
        prefix:"~",
        metric: "Users",
        value: "100,000"
    },
    {
        metric: "Years",
        value: "2",
        postfix:"+"
    },
]

const AchivementSection = () => {
    return (
        <div className='py-8 lg:px-4 xl:gap-16 sm:py-16  xl:px-16'>
            {/* <div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between'> */}
            <div className=' bg-[#c0b4b4] md:px-8  py-8 rounded-full flex flex-row items-center justify-between'>
                {achivementsList?.map((achive, i) => {
                    return (
                        <div key={i} className='flex flex-col items-center justify-center mx-4'>
                            <h2 className='text-black text-4xl   font-bold flex flex-row'>
                                {/* {achive?.prefix} */}
                                <AnimatedNumbers includeComma 
                                animateToNumber={parseInt(achive?.value)} 
                                locale='en-US'
                                className='text-black text-2xl md:text-4xl font-bold'
                                configs={((_,index)=>{
                                    return{
                                        mass:1,
                                        friction:100,
                                        tensions:140 * (index + 1)
                                    }
                                })}
                                />
                                 {achive?.postfix}
                                </h2>
                            <p className='text-[#6d6f70]  font-bold  text-base'>{achive?.metric}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AchivementSection