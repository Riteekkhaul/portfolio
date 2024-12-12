import React from 'react'

const Experience = () => {


  const Tab = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

  return (
    <div>
      <div class="flex-row text-center">
        <div className="bg-indigo-900 text-center md:py-4 lg:px-4">
          <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex flex-col" role="alert">
            <span className="flex rounded-full bg-indigo-500 uppercase px-3 py-1 text-2xl font-bold mr-3">Work Experience </span>
          </div>
        </div>
      </div>

      <div className='flex md:flex-row  flex-col md:pl-36 md:ml-12 md:my-10 mt-3  w-auto'>
        <div className='md:pt-4 self-center'>
          <img src="/crave.jpg" alt='prima' className=' pl-5 md:w-36 h-32 ' />
          <p className='text-xl py-3 text-center'>JAN 2023 - Present   <Tab /> </p>
        </div>
        <div className='md:w-3/5 h-auto md:py-3 md:px-3 px-2 md:ml-5 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
          <p className='md:text-3xl text-2xl font-bold text-capitalize text-slate-600 '>Crave Infotech Pvt. Ltd.  </p>
          <p className='py-2 md:text-xl text-orange-500 fw-bold '>Associated Software Engineer ( On-site )</p>
          <p className='text-slate-500 fw-bold'>Major responsibilities : </p>
          <p>- Design and Develop Integration Scenarios </p>
          <p>- Configure and Manage Integration Middleware</p>
          <p>- Optimize and Enhance Existing Integration Solutions</p>
          <p>- Collaborate with Stakeholders </p>
          <p>- Maintain Compliance and Security Standards</p>
        </div>
      </div>


      <div className='flex md:flex-row  flex-col md:pl-36 md:ml-12 md:my-10 mt-3  w-auto'>
        <div className='md:pt-4 self-center'>
          <img src="/prima.jpg" alt='prima' className=' pl-5 md:w-36 h-32 ' />
          <p className='text-xl py-3 text-center'>Oct 2021 - March 2022 </p>
        </div>
        <div className='md:w-3/5 h-auto md:py-3 md:px-3 px-2 md:ml-5 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
          <p className='md:text-3xl text-2xl font-bold text-capitalize text-slate-600 '>PrimaThink Technology Pvt. Ltd.</p>
          <p className='py-2 md:text-xl text-orange-500 fw-bold '>Project Intern ( On-site )</p>
          <p className='text-slate-500 fw-bold'>Major responsibilities : </p>
          <p>- Develop and Maintain Web Applications </p>
          <p>- Ensure Responsive and User-Friendly Design</p>
          <p>- Manage Databases and APIs</p>
          <p>- Debugging and Performance Optimization </p>
          <p>- Collaborate with Cross-Functional Teams </p>
        </div>
      </div>

    </div>
  )
}

export default Experience