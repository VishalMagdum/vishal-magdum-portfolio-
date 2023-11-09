import React from 'react' //, { Suspense }
import './Main.css'

// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { ComputerCanvas } from './Animations/Computer'
import { motion } from 'framer-motion'
import MouseIcon from '@mui/icons-material/Mouse';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Main() {

    return (
        <section className='relative w-full h-screen main mx-auto'>
            <div className='absolute px-5 top-[20px] max-w-7x1 mx-auto flex flex-row items-start gap-5'>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 title-side-line violet-gradient' />
                </div>
                <div className='mt-8'>
                    <motion.h1
                        initial={{ x: -100 }}
                        animate={{ x: 0, }}
                        transition={{ duration: 0.2, delay: 0.1, type: 'tween' }}
                        className='italic text-6xl font-bold'>Welcome</motion.h1>

                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2, type: 'tween' }}
                        className='text-5xl font-bold pt-3'>Hi, I am <span className='text-[#915eff]'>Vishal Magdum</span></motion.h1>
                    <motion.p initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4, type: 'tween' }}
                        className='pt-3 text-indigo-500'>Full-Stack Web Developer</motion.p>

                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6, type: 'tween' }}
                        className='flex gap-5 mt-1'>
                        <a href='https://github.com/VishalMagdum' target='_blank' rel="noreferrer"><i class="git text-[30px] fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/vishal-magdum-893166228' target='_blank' rel="noreferrer"><i class="linkdin text-[30px] fa-brands fa-linkedin"></i></a>
                    </motion.div>

                </div>

            </div>
            {/* <Canvas frameloop='demand' camera={{ position: [20, 3, 5], fov: 25 }} >
                <OrbitControls enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />
                <Suspense fallback={null}>
                    <Computer3d />
                </Suspense>
            </Canvas> */}




            <div className='w-full z-[100] flex flex-col justify-center items-center'>
                <div className='mt-[500px] z-[100] '>
                    <a href='#about'>
                        <motion.div
                            animate={{ y: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}><MouseIcon /></motion.div>
                        <motion.div

                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}><KeyboardDoubleArrowDownIcon /></motion.div></a>

                </div>
            </div>

        </section>
    )
}

export default Main