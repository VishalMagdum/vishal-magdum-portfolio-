import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-tilt'
import './About.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import AnimatedSphere from './Animations/AnimatedSphere'
import profileVideo from '../assets/profilevideo.mp4'
function About() {
    return (
        <div id='about' className='w-full mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 px-10'>
            <div className='col-span-2'><motion.h1 className='text-5xl aboutHeadline pt-5'
                initial={{ x: -200 }}
                whileInView={{ x: 0, }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 0.1, type: 'tween' }}>Introduction</motion.h1>
                <motion.p className='about-text-1 pt-5'
                    initial={{ x: -200 }}
                    whileInView={{ x: 0, }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: 0.1, type: 'tween' }}>
                    Hi, I am a Full Stack Web Developer. I love to work on new and exciting technology emerging nowadays. I am keenly interested in web development and always looking for new opportunities to learn and grow. I have worked with various technologies
                </motion.p>
                <motion.p className='about-text-2 pt-2'
                    initial={{ x: -200 }}
                    whileInView={{ x: 0, }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: 0.1, type: 'tween' }}>If  you are looking for a web developer who can deliver high-quality work. I would love to connect and discuss our next project. Contact Me.</motion.p>
            </div>
            <motion.div className='h-[350px] flex justify-center items-center relative'
                initial={{ x: -200 }}
                whileInView={{ x: 0, }}
                viewport={{ once: false, amount: 0 }}
                transition={{ duration: 0.3, delay: 0.3, type: 'tween' }}>
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.2} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />

                    <directionalLight />
                    <Suspense fallback={false}>
                        <AnimatedSphere />
                    </Suspense>
                </Canvas>
                <video className='absolute top-15  h-[250px] rounded-full profileImage' src={profileVideo}></video>
            </motion.div>

        </div >
    )
}

export default About