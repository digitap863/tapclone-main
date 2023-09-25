import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Home/NavBar'
import Team from '../Components/Team/Team'

function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{backgroundColor:'black'}}>
      <Team></Team>
      <Footer></Footer>
    </div>
  )
}

export default TeamPage