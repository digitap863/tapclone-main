import React from 'react'
import digitalfolio from '../../assets/home/digitalfolio.png'
import grid from "../../assets/home/grid.png"
import portfolio from "../../assets/home/portfoliopath.svg"


const Ourportfolio = () => {
    return (
        <section>
            <div className="container mx-auto p-20 mt-60">
                <div className='flex justify-between items-center w-full'>
                    <div className='w-1/2 flex flex-col items-center justify-center relative'>
                        <div className='relative self-end'>
                            <img src={digitalfolio} alt="digitalfolio" className='relative z-20' />
                            <p className='text-2xl font-poppins font-bold absolute bottom-10 left-1/2 -translate-x-1/2'>DIGITAL FOLIO</p>
                            <img src={grid} alt="grid" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0' />
                        </div>
                    </div>
                    <div className='w-1/2 text-right flex flex-col items-end justify-center heroTextServiceHome'>
                        <h1>Our <br /> <span className='text-[#AEEF24]'>Portfolio</span></h1>
                        <p className='max-w-sm text-2xl font-poppins font-thin'>Explore our portfolio to see a showcase of our expertise, creativity, and successful projects across various industries.</p>
                        <button className='border px-10 py-2 mt-10 rounded-full relative overflow-hidden group z-10'>
                            <span className='absolute left-0 top-0 w-0 h-full bg-white transition-all duration-500 group-hover:w-full -z-10'></span>
                            <span className='relative group-hover:text-black transition-colors duration-500'>OUR PROJECTS</span>
                        </button>
                        <img src={portfolio} alt="portfolio" className='absolute top-1/2 -translate-y-1/2 right-0' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourportfolio
