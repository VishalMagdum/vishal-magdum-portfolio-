import React, { useState } from 'react' //useEffect,
import { Link } from 'react-router-dom'
import Logo from '../assets/vshaal2.png'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function NavBar() {
    // let [active, setActive] = useState('')
    let [toggle, setToggle] = useState(false)
    return (
        <nav className='p-5'>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link to='/' className='flex items-center gap-2' onClick={() => {
                    // setActive("")
                    window.scroll(0, 0)
                }}><img src={Logo} alt='logo' className='w-25 h-9 object-contain' />
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10 nav-Link'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contacts'>Contacts</a></li>
                    <li><a href="https://drive.google.com/file/d/1YlM2gticI_20jWbNxmycPtw0iSQxmxDx/view?usp=drive_link" download="Vishal_Magdum_Resume.pdf" target='_blank' rel="noreferrer">Resume &nbsp; &nbsp;<i class="fa-solid fa-download"></i></a></li>
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <div onClick={() => setToggle(!toggle)}>{toggle ? <CloseIcon /> : <MenuIcon />}</div>
                    <div className={`${toggle ? 'flex' : 'hidden'} z-10 toggleMenu absolute top-20 mx-4 my-2 min-w-[140px] rounded-md`}>
                        <ul className='list-none font-sans p-2 flex justify-end items-start flex-col gap-4 nav-Link font-medium'>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#contacts'>Contacts</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar