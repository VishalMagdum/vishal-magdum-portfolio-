import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component' //VerticalTimeline,


function ProjectCard({ project }) {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1839", color: "#fff", }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={project.Title}

            iconStyle={{ backgroundColor: "#1d1839" }}
            icon={<div className='flex justify-center items-center h-full'>
                <i class="fa-solid fa-diagram-project"></i>
            </div>}>

            <div className='flex justify-center items-center'>
                <img className='h-[200px]' alt='project snap' src={project.image}>
                </img>
            </div>
            <p>
                {project.Des}
            </p>
            <div className='gap-[100px] flex justify-center items-center mt-5'>
                <div className='border-solid border-2 border-indigo-500 hover:bg-violet-600 p-3 w-[150px] rounded-md flex justify-center items-center'>
                    <a href={project.sourceCode} target='_blank' rel="noreferrer"><i class="fa-brands fa-github px-1"></i> Source Code</a>
                </div>
                <div className='border-solid border-2 hover:bg-violet-600 border-indigo-500 p-3 w-[150px] rounded-md flex justify-center items-center'>
                    <a href={project.liveLink} target='_blank' rel="noreferrer"> <i class="fa-solid fa-globe px-3"></i> Demo</a>
                </div>
            </div>




        </VerticalTimelineElement>
    )
}

export default ProjectCard