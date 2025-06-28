import React from 'react'
import MobileNavbar from '../Components/Home/MobileNavbar'
import NavBar from '../Components/Home/NavBar'
import Footer from '../Components/Footer/Footer'
import BlogDetailContent from '../Components/Blog/BlogDetailContent'

const BlogDetailPage = () => {
  return (
    <div className='bg-black'>
      <MobileNavbar/>
      <NavBar/>
      <BlogDetailContent/>
      <Footer/>
    </div>
  )
}

export default BlogDetailPage