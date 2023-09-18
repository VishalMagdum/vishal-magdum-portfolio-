import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion'
import AWS from '../assets/skill/aws.png'
import Bootstrap from '../assets/skill/bootstrap.png'
import CSS from '../assets/skill/css.png'
import Express from '../assets/skill/express.png'
import HTML from '../assets/skill/html.png'
import JS from '../assets/skill/js.png'
import Mongodb from '../assets/skill/mongodb.png'
import MySql from '../assets/skill/mysql.png'
import Netlify from '../assets/skill/netlify.png'
import Nodejs from '../assets/skill/nodejs.png'
import ReactJS from '../assets/skill/react.png'
import Render from '../assets/skill/render.jpg'
import Tailwind from '../assets/skill/tailwind.png'
import VSCode from '../assets/skill/vscode.png'
import Github from '../assets/skill/github.png'
import Postman from '../assets/skill/postman.png'
import MaterialUI from '../assets/skill/matrialui.png'
function Skills() {
    let skillList = [
        {
            title: "HTML5",
            image: HTML
        },
        {
            title: "CSS3",
            image: CSS
        },
        {
            title: "Javascript",
            image: JS
        },
        {
            title: "Bootstrap",
            image: Bootstrap
        },

        {
            title: "Tailwind",
            image: Tailwind
        },
        {
            title: "React.js",
            image: ReactJS
        },
        {
            title: "Mongodb",
            image: Mongodb
        },
        {
            title: "Expess.js",
            image: Express
        }
        , {
            title: "Node.js",
            image: Nodejs
        },
        {
            title: "MySql",
            image: MySql
        },
        {
            title: "VScode",
            image: VSCode
        },
        {
            title: "AWS",
            image: AWS
        },
        {
            title: "Render",
            image: Render
        },
        {
            title: "Netlify",
            image: Netlify
        },
        {
            title: "Github",
            image: Github
        },
        {
            title: "Postman",
            image: Postman,
        },
        {
            title: "Material UI",
            image: MaterialUI,
        }

    ]
    return (
        <div id='skills' className='w-full px-10 mt-10'>
            <motion.h1 className='text-5xl skillsHeadline pt-5'>Skills & Tech</motion.h1>
            <div className='mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-10 mt-10 border-solid border-2 border-indigo-500 rounded'>
                {skillList.map((skill, i) => (
                    <motion.div className='flex m-5 skillBox'
                        key={skill.title}
                        initial={{ opacity: 0, x: 50, y: 50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.3, delay: i * 0.2 }}
                    >
                        <div>
                            <img className="h-[40px]" src={skill.image} style={{ color: skill.color }}></img>
                        </div>
                        <div>
                            <h4 className='px-2'>{skill.title}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills