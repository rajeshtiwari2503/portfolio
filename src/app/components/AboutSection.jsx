 "use client";
import React, { useState, useTransition } from 'react';
import TabButtons from './TabButtons';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AppsIcon from '@mui/icons-material/Apps';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloudIcon from '@mui/icons-material/Cloud';
import GitHubIcon from '@mui/icons-material/GitHub';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

const tabData = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-5 space-y-2'>
                <li>React.js</li>
                <li>Next.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Material UI</li>
                <li>Redux & Context API</li>
                <li>Node.js & Express.js</li>
                <li>MongoDB & Mongoose</li>
                <li>REST APIs & JSON</li>
                <li>Git & GitHub</li>
                <li>Responsive & Mobile-first Design</li>
            </ul>
        )
    },
    {
        title: "education",
        id: "education",
        content: (
            <ul className='list-disc pl-5 space-y-2'>
                <li>Bachelor of Computer Application (BCA) - MCRP University, Bhopal (M.P.)</li>
                <li>Master of Computer Application (MCA) - AKTU (U.P.)</li>
            </ul>
        )
    },
    {
        title: "certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-5 space-y-2'>
                <li>Fullstack Web Development Certification</li>
                <li>React.js Advanced Certification</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => setTab(id));
    };

    return (
        <section className='text-white py-12 sm:py-16 px-4 md:px-16'>
            <div className='md:grid md:grid-cols-2 gap-12 items-start'>

                {/* Left Column: About Text & Tabs */}
                <div className='flex flex-col'>
                    <h2 className='text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                        About Me
                    </h2>
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

                    <div className='flex flex-wrap mt-8 gap-4'>
                        <TabButtons selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButtons>
                        <TabButtons selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButtons>
                        <TabButtons selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButtons>
                    </div>

                    <div className='mt-6 pl-2'>
                        {tabData.find(f => f.id === tab)?.content}
                    </div>
                </div>

                {/* Right Column: Skill Icons */}
                <div className='flex flex-wrap gap-6 justify-start md:justify-center items-center mt-8 md:mt-20 '>
                    {[
                        { icon: <CodeIcon />, label: "React.js", color: "text-blue-400" },
                        { icon: <WebIcon />, label: "Next.js", color: "text-white" },
                        { icon: <IntegrationInstructionsIcon />, label: "Redux", color: "text-purple-600" },
                        { icon: <DeveloperModeIcon />, label: "Tailwind CSS", color: "text-blue-400" },
                        { icon: <AppsIcon />, label: "Material UI", color: "text-blue-500" },
                        { icon: <JavascriptIcon />, label: "JavaScript", color: "text-yellow-400" },
                        { icon: <HtmlIcon />, label: "HTML", color: "text-orange-500" },
                        { icon: <CssIcon />, label: "CSS", color: "text-blue-600" },
                        { icon: <StorageIcon />, label: "Node.js / MongoDB", color: "text-green-500" },
                        { icon: <DashboardIcon />, label: "Database", color: "text-yellow-500" },
                        { icon: <GitHubIcon />, label: "Git & GitHub", color: "text-white" },
                        { icon: <DashboardIcon />, label: "Admin Panels", color: "text-pink-500" },
                        { icon: <CloudIcon />, label: "Deployment / Cloud", color: "text-blue-300" },
                    ].map((skill, index) => (
                        <div key={index} className='flex flex-col items-center'>
                            {React.cloneElement(skill.icon, { className: `${skill.color} text-8xl sm:text-9xl hover:scale-110 transition-transform duration-300` })}
                            <span className='mt-2 text-white font-medium text-center'>{skill.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
