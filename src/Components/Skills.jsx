import React from 'react'

const Skills = () => {
    return (
        <div className='md:my-5'>
           <div className="p-2 bg-white items-center text-indigo-100 leading-none lg:rounded-full flex flex-col" role="alert">
            <span className="flex rounded-full bg-indigo-500 uppercase px-4 py-2 text-white md:text-4xl md:mb-4 font-bold mr-3">Major Skills </span>
          </div>
            <div className='md:w-3/5 mx-auto'>
                <div className=' grid md:grid-cols-3 grid-cols-2 gap-1 ml-2 md:ml-16'>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110'>
                     <img src="/cpi.png" alt='skill' className='px-5 py-4' />
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                     <img src="pi.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                     <img src="boomi.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110'>
                     <img src="/postman.png" alt='skill' className='px-5 py-4' />
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                     <img src="apim.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                     <img src="groovy.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110'>
                     <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt='skill' className='px-5 py-4' />
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                     <img src="https://img.icons8.com/color/96/000000/css3.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                     <img src="https://img.icons8.com/fluency/96/000000/javascript.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110'>
                     <img src="https://img.icons8.com/officel/96/000000/react.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                    <img src="https://img.icons8.com/color/96/000000/redux.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                    <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110'>
                    <img src="https://img.icons8.com/fluency/96/000000/node-js.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                    <img src="https://img.icons8.com/ios/96/000000/express-js.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/96/000000/external-sql-mobile-app-development-flaticons-lineal-color-flat-icons.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                    <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                    <img src="https://img.icons8.com/color/96/000000/tailwindcss.png" alt='skill' className='px-5 py-4'/>
                    </div>
                    <div className='w-48 h-36 rounded-lg bg-slate-200 my-3 shadow shadow-black border-1 border-slate-100 transform transition duration-500 hover:scale-110' >
                    <img src="https://img.icons8.com/external-dygo-kerismaker/96/000000/external-Blockchain-cryprocurrency-dygo-kerismaker.png" alt='skill' className='px-5 py-4'/>
                    </div>
                </div>
            </div>
            <button onClick={() => {  window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }} 
            className="fixed px-2 py-3 fw-bold rounded-lg z-50 text-lg bottom-12 right-14 text-white text-center bg-gradient-to-r from-green-400 to-blue-500">
              To top
            </button>
        </div>
    )
}

export default Skills