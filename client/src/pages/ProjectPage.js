import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Home/NavBar'
import Projects from '../Components/Projects/Projects'

function ProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{backgroundColor:"black"}}>
        <Projects></Projects>
        <Footer></Footer>
    </div>
  )
}

export default ProjectPage