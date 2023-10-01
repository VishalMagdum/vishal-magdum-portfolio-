import React from 'react'
import "./Experience.css"

function Experience() {
    return (
        <div id='experience'>
            <div className='projectHeadling mt-10 px-[50px]'>
                <h2 className=' text-5xl' style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 700 }}>Experience</h2>
                <p className='mt-4 text-xl text-[#9e9e9e]'>My experience till now</p>
            </div>
            <div className="px-[150px] pt-20">
                <div className="">
                    <div className="col">
                        <div className="main-timeline">
                            <div className="timeline">
                                <div className="timeline-content">
                                    <span className="timeline-year" style={{ fontSize: "25px" }}>Jun 2023 - Present</span>
                                    <div className="content">
                                        <h3 className="title">Full Stack Developer - Aptachain Solution</h3>
                                        <p className="description" style={{ textAlign: "justify" }}>
                                            At Aptachain Solution PVT LTD, I am a Full Stack Developer specializing in MERN stack technologies. My primary focus is on frontend development using React and Next.js. I am responsible for crafting dynamic and responsive web applications, ensuring exceptional user experiences. Collaborating with cross-functional teams, I contribute to the delivery of high-quality solutions and stay updated with the latest web development practices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-content">
                                    <span className="timeline-year" style={{ fontSize: "25px" }}>Apr 2021 - Jul 2021</span>
                                    <div className="content">
                                        <h3 className="title">Wide Softtech Freelance</h3>
                                        <p className="description" style={{ textAlign: "justify" }}>
                                            During my tenure as a freelance web developer at Wide SoftTech, I excelled in MERN stack web development, creating scalable websites. Additionally, I provided mentorship to MCA students, guiding them in their final year projects. This experience allowed me to contribute to the tech community while enhancing my expertise in web development and leadership.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-content">
                                    <span className="timeline-year" style={{ fontSize: "25px" }}>05/2021 - 09/2021</span>
                                    <div className="content">
                                        <h3 className="title">Internship - Virag Vigyan</h3>
                                        <p className="description" style={{ textAlign: "justify" }}>
                                            At Virag Vigyan, I completed an internship where I gained hands-on experience in web development technologies, including HTML, CSS, JavaScript, and Bootstrap. I actively contributed to multiple web projects, honing my skills in front-end development and responsive design. My internship experience also involved collaborating with a dynamic team and developing strong problem-solving abilities, laying the foundation for my career in web development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience