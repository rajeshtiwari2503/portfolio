import React from 'react'


const ProjectTags = ({ name, onClick, isSelected }) => {

    const buttonsStyles = isSelected
        ? "border-purple-500"
        : " text-[#ADB7BE] border-slate-600  hover:border-white"

    return (
        <button className={` ${buttonsStyles} rounded-full border-2  px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}>
            {name}
        </button>
    )
}

export default ProjectTags