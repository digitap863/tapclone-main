import React from 'react'
import StarPortal from '../Shared/StarPortal'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const CareerDetailContent = () => {
  const navigate = useNavigate()
  return (
    <StarPortal>
      <div className="container mx-auto p-8 md:p-20 min-h-screen">

        <div className="max-w-4xl mx-auto">
          <button className='text-white rounded-full border border-white text-2xl p-3 mb-10 hover:bg-white hover:text-black transition-all duration-300' onClick={() => navigate('/careers')}><IoArrowBackSharp /></button>
          {/* Job Title */}
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">UI/UX Designer</h1>

          {/* Job Description */}
          <div className="text-[#F0ECEC] text-base md:text-lg mb-6 space-y-2">
            <p>We Are Seeking A Talented And Creative UI/UX Designer To Join Our Team. As A UI/UX Designer, You Will Be Responsible For Designing And Implementing Intuitive And Engaging User Experiences For Our Web And Mobile Applications.</p>
            <p>In This Role, You Will Work Closely With Our Product And Development Teams To Understand User Needs And Develop User Flows, Wireframes, Prototypes, And High-Fidelity Designs. You Will Also Be Responsible For Conducting User Research And Testing To Validate Design Concepts And Ensure A Seamless User Experience.</p>
            <p>The Ideal Candidate Will Have A Strong Portfolio Of UI/UX Design Work, Excellent Communication Skills, And A Passion For Solving Complex Design Challenges.</p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h2 className="text-w text-xl font-semibold mb-2">Responsibilities:</h2>
            <ul className="list-disc pl-6 text-[#F0ECEC] space-y-1">
              <li>Collaborate With Cross-Functional Teams To Understand User Needs And Develop User Flows, Wireframes, Prototypes, And High-Fidelity Designs</li>
              <li>Conduct User Research And Testing To Validate Design Concepts And Ensure A Seamless User Experience</li>
              <li>Create And Maintain Design Systems And Style Guides</li>
              <li>Design Visually Appealing And Intuitive Interfaces For Web And Mobile Applications</li>
              <li>Stay Up-To-Date With Industry Trends And Best Practices In UI/UX Design</li>
              <li>Proficiency In Design Tools And Strong Portfolio Of UI/UX Design Work</li>
              <li>Excellent Communication And Problem-Solving Skills</li>
              <li>Experience With User Research And Testing Methods</li>
              <li>Familiarity With HTML, CSS, and JavaScript Is A Plus.</li>
            </ul>
          </div>

          {/* Application Form */}
          <div className=" rounded-xl p-6 md:p-10 shadow-md border border-[#e5e5e5]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">First name *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="First name *" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Last name *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Last name *" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Email id *</label>
                  <input type="email" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Email id *" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Select Location *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Select Location" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Select Position *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Select Position" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Experience *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Experience" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Current Salary *</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Current Salary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Qualification</label>
                  <input type="text" className="w-full border border-[#e5e5e5] rounded-md px-3 py-2 bg-black" placeholder="Qualification" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Gender *</label>
                  <div className="flex gap-3 mt-2">
                    <label className="inline-flex items-center">
                      <input type="radio" name="gender" className="form-radio" />
                      <span className="ml-2 text-[#F0ECEC]">Male</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="gender" className="form-radio" />
                      <span className="ml-2 text-[#F0ECEC]">Female</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="gender" className="form-radio" />
                      <span className="ml-2 text-[#F0ECEC]">Others</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#F0ECEC] mb-1">Upload Resume *</label>
                  <div className="flex items-center gap-2">
                    <input type="file" className="block w-full text-sm text-[#F0ECEC] border border-[#e5e5e5] rounded-md cursor-pointer bg-black" />
                    <span className="text-xs text-[#888]">No File Chosen</span>
                  </div>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <button type="submit" className="bg-w text-white px-8 py-2 rounded-md font-semibold mt-4 md:mt-0 w-full md:w-auto border border-[#F0ECEC]">Apply Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StarPortal>
  )
}

export default CareerDetailContent
