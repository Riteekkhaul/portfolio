import React from 'react';
import '../App.css';
import { FaFileDownload } from 'react-icons/fa'; 
import Typical from 'react-typical';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';

const Header = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">

        <div  className='md:ml-12 mt-2 ml-4 md:mt-28 md:pb-5 flex flex-col'>
        <p className='my-2 md:ml-4 mt-5 pt-1 ml-1 text-2xl md:text-3xl md:mb-3 fw-bold text-white animate__animated animate__fadeInDown'> Hey..! <br /> <br />This is Riteek </p>
        <p className=' word my-2 md:ml-4 ml-2 text-lg md:text-4xl fw-bold text-white animate__animated animate__fadeInDown'>
        <Typical
            steps={[
              "SAP CPI Consultant",
              4000,
              "SAP PI/PO consultant",
              4000,
              "Associated Software Engineer",
              3000,
              "MERN Developer",
              4000,
              "Web Designer",
              4000,
              "D-Apps Developer",
              4000
            ]}
            loop={5}
            wrapper="span"
          />
        </p>
        <p className='md:mx-3 mt-4 text-lg md:text-3xl fw-bold  text-white pl-2 animate__animated animate__bounceInLeft'>B.Tech in Information Technology </p><br />
        <p className='md:ml-4 mx-1 my-1 text-lg md:text-2xl fw-bold flex  text-white animate__animated animate__bounceInLeft' ><img src='/gcoea.png' alt='logo' className='w-10 h-10 rounded-full mr-2 ' /> Governement college of engineering Amravati</p>
        <button  type="button" onClick={() => openInNewTab('https://drive.google.com/file/d/1bF2Pc06tIE6OFKGAAuqmzMoVlW8wCE_q/view?usp=sharing')} class="my-4 mb-5 flex transform transition duration-500 hover:scale-110  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... w-full md:w-48 md:ml-5 -ml-2 text-white text-xl fw-bold py-2 pl-5 rounded-lg animate_animated animate__heartBeat" >Get-Resume <FaFileDownload className=' ml-2 mt-1' /> </button>
        </div>
        <div className='md:w-80 md:h-80 md:relative mt-4 mr-4  lg:relative absolute lg:block md:block py-2 px-2 cursor-zoom-in ml-52 mt-28 rounded-lg bg-slate-200 shadow shadow-black border-1 border-slate-300 transform transition duration-500 hover:scale-110'>
          <img src='/pro.png' alt='profile' />
        </div>
        <div className='hidden md:block md:pt-8'>
            <BsFacebook className='mx-3 my-4 text-3xl text-white cursor-pointer' />
            <AiFillTwitterCircle className='mx-3 my-4 text-3xl text-white cursor-pointer' />
            <FaLinkedinIn onClick={() => openInNewTab('https://www.linkedin.com/in/riteek-khaul/')} className='mx-3 my-3 text-white text-3xl cursor-pointer' />
            <BsGithub onClick={() => openInNewTab('https://github.com/Riteekkhaul')} className='mx-3 my-4 text-3xl text-white cursor-pointer'/>
            <GrInstagram className='mx-3 my-4 text-3xl text-white cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Header;