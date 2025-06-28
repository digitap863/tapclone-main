import React from 'react'
import MobileNavbar from '../Components/Home/MobileNavbar'
import NavBar from '../Components/Home/NavBar'
import Footer from '../Components/Footer/Footer'
import BlogListContent from '../Components/Blog/BlogListContent'

const BlogPage = () => {
  return (
    <div className='bg-black'>
      <MobileNavbar/>
      <NavBar/>
      <BlogListContent/>
      <Footer/>
    </div>
  )
}

export default BlogPage
