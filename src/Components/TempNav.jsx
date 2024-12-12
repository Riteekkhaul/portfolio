import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';


const Tabs=()=>{
  return(
    <div className="md:hidden flex w-full rounded-lg mt-3 bg-blue-900 animate__animated animate__fadeInLeft">
    <ul className="flex flex-col mb-1 mt-2 animate__animated animate__bounceInDown border-gray-100 text-lg font-medium dark:bg-gray-800  dark:border-gray-700">
      <li>
        <NavLink className="mx-3 text-black-600 mt-2 fw-bold animate__animated animate__bounceInDown"   to="/" exact > Home  </NavLink>
      </li>
      <li> 
        <NavLink className="mx-3  mt-2 fw-bold animate__animated  animate__bounceInDown"  to="/services" exact > Certifications   </NavLink>
      </li>
      <li>
      <NavLink className="mx-3 mt-2 fw-bold animate__animated  animate__bounceInDown"   to="/skills" exact > Skills  </NavLink>
      </li>
      <li>
      <NavLink className="mx-3 mt-2 fw-bold animate__animated  animate__bounceInDown"  to="/experience" exact > Experience </NavLink>
      </li>
      <li>
      <NavLink className="mx-3 mt-2 fw-bold animate__animated  animate__bounceInDown"   to="/projects" exact > Projects  </NavLink>
      </li>
      <li>
      <NavLink className=" mx-3  mt-2 fw-bold animate__animated  animate__bounceInDown"   to="/contact" exact > Contact  </NavLink>
      </li>
    </ul>
  </div>
  )
}



const TempNav = () => {

  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }

  return (
    <>

      <nav className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">      
            <img src="https://flowbite.com/docs/images/logo.svg" className="hidden md:block mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="hidden md:flex md:-ml-20 text-2xl font-semibold whitespace-nowrap dark:text-white transform transition duration-500 hover:scale-110 animate__animated animate__fadeInLeft">Portfolio</span>
            <button data-collapse-toggle="navbar-cta"  type="button" onClick={toggle} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg  className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          <div className="flex md:order-2">
            <button type="button" className=" text-white w-auto focus:ring-4 focus:outline-none md:mr-0  border-slate-400 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 font-bold text-lg animate__animated animate__bounceInRight transform transition duration-500 hover:scale-110 ">+91-9767735958 <span className='ml-2 px-2 py-2 bg-white rounded-full'>📞</span></button>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col p-2 mb-1 mt-2 rounded-lg border animate__animated animate__bounceInDown border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800  dark:border-gray-700">
              <li>
                <NavLink className="mx-2 text-black-600 text-xl pt-2 fw-bold animate__animated animate__bounceInDown"   to="/" exact > Home  </NavLink>
              </li>
              <li> 
                <NavLink className="mx-2 text-xl pt-2 fw-bold animate__animated  animate__bounceInDown"  to="/services" exact > Services  </NavLink>
              </li>
              <li>
              <NavLink className="mx-2 text-xl pt-2 fw-bold animate__animated  animate__bounceInDown"   to="/skills" exact > Skills  </NavLink>
              </li>
              <li>
              <NavLink className="mx-2 text-xl pt-2 fw-bold animate__animated  animate__bounceInDown"  to="/experience" exact > Experience </NavLink>
              </li>
              <li>
              <NavLink className="mx-2 text-xl pt-2 fw-bold animate__animated  animate__bounceInDown"   to="/projects" exact > Projects  </NavLink>
              </li>
              <li>
              <NavLink className=" mx-2 text-xl fw-bold animate__animated  animate__bounceInDown"   to="/contact" exact > Contact  </NavLink>
              </li>
            </ul>
          </div>

           { /* for mobile view */}
             {
               isOpened && ( <Tabs />)
             }

        </div>
      </nav>

    </>
  )
}

export default TempNav;