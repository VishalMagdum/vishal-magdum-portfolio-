import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { toast } from 'react-toastify'
import { MessageCanvas } from './Animations/message'
function Contact() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [loading, setLoading] = useState(false);
    const handlechange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        emailjs.send(
            "service_87xsl5a",
            "template_b2qs7us",
            {
                from_name: form.name,
                to_name: "Vishal Magdum",
                from_email: form.email,
                to_email: "vishalmagdum17899@gmail.com",
                message: form.message
            }, "j0_weUymECoRlhje8").then(() => {
                setLoading(false)
                toast.success(`Thank You ${form.name}. I will get back to you as soon as possible`)
                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false)
                console.log(error)
                toast.error("Something went wrong.")

            })


    }
    return (
        <div id='contacts' className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={0.4}
                transition={{ delay: 0.2, type: "tween" }}
                className='flex-[0.75] contact p-8 rounded-2xl'>
                <p>Get in touch</p>
                <h3 className='text-5xl'>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-5 flex flex-col gap-8'>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Name</span>
                        <input type='text' name='name' value={form.name}
                            onChange={handlechange}
                            placeholder='Enter your name'
                            className='bg-[#090e25] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Email</span>
                        <input type='email' name='email' value={form.email}
                            onChange={handlechange}
                            placeholder='Enter your Email'
                            className='bg-[#090e25] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Message</span>
                        <textarea
                            rows='7'
                            name='message'
                            value={form.message}
                            onChange={handlechange}
                            placeholder='What is your message'
                            className='bg-[#090e25] py-3 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
                    </label>

                    <button
                        type='submit'
                        className='bg-[#090e25] py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-lg'>
                        {loading ? "Sending..." : "Send"}
                    </button>


                </form>



            </motion.div>
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={0.4}
                transition={{ delay: 0.2, type: "tween" }}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>

                <MessageCanvas />
            </motion.div>



        </div>
    )
}

export default Contact