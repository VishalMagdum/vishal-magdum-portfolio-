import { BrowserRouter } from 'react-router-dom'
// import { About, Contact, Projects, NavBar, Skills, } from './components'
import NavBar from './components/NavBar'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Main from './components/Main';
import { motion, useScroll } from 'framer-motion';
import { StarsCanvas } from './components/Animations/Stars';
import Social from './components/Social';
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react';
function App() {
  const { scrollYProgress } = useScroll()
  let [projectData, setProjectData] = useState()
  const loadprojects = async () => {
    const { data } = await axios('https://644a8c6979279846dcebdb23.mockapi.io/projects')
    setProjectData(data)
  }
  useEffect(() => {
    loadprojects()
  }, [])
  console.log(projectData)
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#050816]'>

        <NavBar />
        <motion.div className='progress-bar'
          style={{ scaleX: scrollYProgress }}>

        </motion.div>
        <Main />
        <About id='about' />
        <Skills />
        <Projects projectData={projectData} />
        <div className='relative z-0 px-10'>
          <Contact />
          <StarsCanvas />
        </div>
        <Social />

      </div>
      <ToastContainer />
    </BrowserRouter>

  );
}

export default App;