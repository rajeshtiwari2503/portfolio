"use client";
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButtons from './TabButtons';


const tabData = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>React Js</li>
                <li>Next Js</li>
                <li>Javascript</li>
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Tailwind CSS</li>
                <li>Material UI</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Bachelor of Computer Application (BCA) from MCRP Univercity Bhopal (M.P.)</li>
                <li>Master in Computer Application (MCA) from AKTU (U.P.)</li>


            </ul>
        )
    },
    {
        title: "certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>certification</li>
                <li>certification</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2    gap-8  items-center py-8    sm:py-16    '>
                <div className='flex items-center justify-between'>
                <div className=''>
                        <Image src="reacticon.svg" height={200} width={200} />
                    </div>
                    <div className='bg-white ml-4'>
                        <Image src="next.svg" height={200} width={200} />
                    </div>
                    
                </div>

                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-fold text-white mb-4'>About Me</h2>
                    <p>
                        I am a Web frontend developer with a passion for creating interactive and responsive web applications.
                        I have 2.6 year experience working with Javascript, React, Redux, Tailwind CSS, Material UI, Bootstrap, HTML,CSS and Git.
                        I am a quick learner and I am always looking to expand my knowledge and skill set.
                        I am excited to work with others to create amazing applications.

                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButtons
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}>
                            Skills
                        </TabButtons>

                        <TabButtons
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}>
                            Education
                        </TabButtons>
                        {/* <TabButtons
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}>
                            Certifications
                        </TabButtons> */}
                    </div>
                    <div className='mt-8 pl-2'>
                        {tabData?.find((f) => f?.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection