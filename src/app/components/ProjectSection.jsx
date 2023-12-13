"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags';
import { motion ,useInView} from "framer-motion"
import { useRef } from 'react';

const projectData = [
     
    {
        id: 1,
        title: "  SpareTrade  ",
        image: "sparetrade.png",
        des: "Using React Js,Next Js,HTML ,CSS Javascript,MUI ,Bootstrap and other libraries",
        tag: ["All", "Web"],
        gitUrl: "https://www.sparetrade.in/",
        previewUrl: "https://www.sparetrade.in/"
    },
    {
        id: 2,
        title: " After Passout ",
        image: "afterpassout.png",
        des: "Using React Js,Next Js,HTML ,CSS Javascript,MUI ,Bootstrap and other libraries",
        tag: ["All", "Web"],
        gitUrl: "https://afterpassout-frontend-chi.vercel.app/",
        previewUrl: "https://afterpassout-frontend-chi.vercel.app/"
    },
    {
        id: 3,
        title: "  Lybley  ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRdm4zyue6PGa2VZhO1EyqnRyK6V9NmCSnyfbxgBsOHse_53fD3V6&usqp=CAE&s",
        des: "Using React Js,Next Js,HTML ,CSS Javascript,MUI ,Bootstrap and other libraries",
        tag: ["All", ],
        gitUrl: "https://www.lybley.com/",
        previewUrl: "https://www.lybley.com/"
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
                {/* <ProjectTags onClick={handleChangeTag} name="All" isSelected={tag === "All"} />
                <ProjectTags onClick={handleChangeTag} name="Web" isSelected={tag === "Web"} /> */}
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