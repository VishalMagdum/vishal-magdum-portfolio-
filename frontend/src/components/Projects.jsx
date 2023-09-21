import React from 'react'
import { VerticalTimeline, } from 'react-vertical-timeline-component' //VerticalTimelineElement
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import ProjectCard from './ProjectCard'
import './Projects.css'
// import { toast } from 'react-toastify'
function Projects({ projectData }) {
    const textVariant = (delay) => {
        return {
            hidden: {
                y: -50,
                opacity: 0,
            },
            show: {
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1.25,
                    delay: delay,
                },
            },
        };
    };

    // const projectData = [
    //     {
    //         Title: "E-commerce",
    //         Des: "An e-commerce website of an online store where users can browse and purchase products. React is used for building the front-end user interface, while Express and Node would handle server-side logic and routing. MongoDB is used as the database to store product information, user data, and order details. Redux is used for state management, allowing the application to easily share and update data across components.",
    //         image: "https://res.cloudinary.com/dbuztntar/image/upload/v1684319790/projects/Screenshot_2023-05-14_134122_nwst0j.png",
    //         sourceCode: "https://github.com/VishalMagdum/E-commerce-",
    //         liveLink: 'https://spiffy-gumption-5ba85a.netlify.app/',
    //     },
    //     {
    //         Title: "Movix",
    //         Des: "Movix is the Trending Movies Database(TMDB) API-based web application. This application build on MERN Stack technologies. Vite build tool is used to improve the development process of modern web applications. For state management, I have used React Redux. User registration data will be saved in the MongoDB cluster. This application is fully responsive for all types of device",
    //         image: "https://res.cloudinary.com/dbuztntar/image/upload/v1684418754/projects/Screenshot_2023-05-18_193338_libee3.png",
    //         sourceCode: "https://github.com/VishalMagdum/E-commerce-",
    //         liveLink: 'https://spiffy-gumption-5ba85a.netlify.app/',
    //     },
    //     {
    //         Title: "",
    //         Des: "",
    //         image: "",
    //         sourceCode: "https://github.com/VishalMagdum/E-commerce-",
    //         liveLink: 'https://spiffy-gumption-5ba85a.netlify.app/',
    //     }

    // ]

    return (
        <div id='projects'>
            <motion.div className='projectHeadling mt-10 px-[50px]' variants={textVariant()}>
                <h2 className='text-5xl'>Projects</h2>
                <p className='mt-4 text-xl text-[#9e9e9e]'>My reacent projects</p>
            </motion.div>
            <div className='mt-9 px-[50px] flex flex-col'>
                <VerticalTimeline>
                    {projectData && projectData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Projects