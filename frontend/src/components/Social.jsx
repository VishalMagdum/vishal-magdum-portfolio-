import React from 'react'
import { motion } from 'framer-motion'

function Social() {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center mt-10 py-8 bg-[#070b1f]'>

            <motion.h5
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={0.2}
                transition={{ delay: 0.2, type: "tween" }}
                className='contactNo text-[20px]'>Contact No. : 8805158006</motion.h5>
            <motion.div
                initial={{ scale: -1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "tween" }}
                className='flex gap-5'>
                <a href='https://www.instagram.com/vshaal_5592.exe/' target='_blank' rel="noreferrer"><i class="insta text-[30px] fa-brands fa-instagram"></i></a>
                <a href='https://github.com/VishalMagdum' target='_blank' rel="noreferrer"><i class="git text-[30px] fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/vishal-magdum-893166228' target='_blank' rel="noreferrer"><i class="linkdin text-[30px] fa-brands fa-linkedin"></i></a>
            </motion.div>
            <motion.h5
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "tween" }}
                viewport={0.2}
                className='copyRight text-[20px] text-gray-400'>@ 2023 Vishal Magdum</motion.h5>

        </div>
    )
}

export default Social