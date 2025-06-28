import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-blue-200'>
      <div className='text-8xl font-extrabold text-blue-500 animate-bounce mb-4'>
        404 <span role="img" aria-label="confused face">😕</span>
      </div>
      <h1 className='text-3xl font-bold text-gray-800 mb-2'>Oops! Page not found</h1>
      <p className='text-lg text-gray-600 mb-6'>The page you are looking for does not exist or has been moved.</p>
      <button onClick={() => navigate('/')} className='text-blue-500'>Go to Homepage</button>
      
    </div>
  )
}

export default NotFound
