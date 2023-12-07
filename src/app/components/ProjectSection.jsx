"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags';
import { motion ,useInView} from "framer-motion"
import { useRef } from 'react';

const projectData = [
    {
        id: 1,
        title: "React PortFolio Website",
        image: "next.svg",
        des: "1 description",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 1,
        title: "React SpareTrade Website",
        image: "next.svg",
        des: "2 description",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 1,
        title: "React SpareTrade Admin Panel  ",
        image: "next.svg",
        des: "3 description",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 1,
        title: "React Lybley Website Admin Panel",
        image: "next.svg",
        des: "4 description",
        tag: ["All", ],
        gitUrl: "/",
        previewUrl: "/"
    },

]

const ProjectSection = () => {

const ref=useRef(null)

const isInView=useInView(ref,{once:true})

    const [tag, setTag] = useState("All");
    const handleChangeTag = (newTag) => {
        setTag(newTag)
    }

    const filtredProjects=projectData?.filter((project)=>
    project?.tag.includes(tag)
    );

    const cardVarients={
        initial:{y:50,opacity:0},
        animate:{y:0,opacity:1},
    }
    return (
        <section>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
            <div className='  flex flex-row justify-center items-center gap-2 text-white py-6'>
                <ProjectTags onClick={handleChangeTag} name="All" isSelected={tag === "All"} />
                <ProjectTags onClick={handleChangeTag} name="Web" isSelected={tag === "Web"} />
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filtredProjects?.map((item,index) => (
                     <motion.li
                     key={index}
                     variants={cardVarients}
                     initial="initial"
                     animate={ isInView ? "animate" :"initial"}
                     transition={{duration:0.3,delay: index * 0.4}}>
                    <ProjectCard
                        key={item?.id}
                        title={item?.title}
                        des={item?.des}
                        imgUrl={item?.image}
                        tags={item?.tag}
                        gitUrl={item?.gitUrl}
                        previewUrl={item?.previewUrl}
                    />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection