import React from 'react';
import {FiPhoneCall} from 'react-icons/fi';
import {ImMail4} from 'react-icons/im';
import {ImLocation2} from 'react-icons/im';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';

const Footer = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };    

  return (
    <div className='bg-slate-800 text-white '>
     <div className='flex grid lg:grid-cols-3 flex-wrap'>
        <div className='text-center flex'>
            <FiPhoneCall className='text-5xl ml-8 mr-4 mt-5' />
            <div className='text-2xl mt-5'>
                +91-9767735958
                <p>Mon-Fri 10am-7pm </p>
            </div>
        </div>
        <div  className='text-center flex'>
        <ImMail4 className='text-5xl mx-4 mt-5' />    
        <div className='text-2xl mt-5'>
            rkhaul2000@gmail.com
            <p>Online Support</p>
        </div>
        </div>
        <div  className='text-center flex'>
         <ImLocation2 className='text-5xl mx-4 mt-5' />   
        <div className='text-2xl ml-0 mt-5'>
            Pune , India
            <p>Pin Code : 411057 </p>
        </div>
        </div>
     </div>
     <div className='flex md:flex-row flex-col bg-slate-800'>
        <div className=' mx-10 lg:py-12 md:py-12 hidden md:block lg:block flex '>Connect with me on social media</div>
        <div className='flex flex-end mx-10 py-10 place-self-end'>
            <BsFacebook className='mx-3 my-2 text-3xl cursor-pointer' />
            <AiFillTwitterCircle className='mx-3 my-2 text-3xl cursor-pointer' />
            <FaLinkedinIn onClick={() => openInNewTab('https://www.linkedin.com/in/riteek-khaul/')} className='mx-3 my-2 text-3xl cursor-pointer' />
            <BsGithub onClick={() => openInNewTab('https://github.com/Riteekkhaul')} className='mx-3 my-2 text-3xl cursor-pointer'/>
            <GrInstagram className='mx-3 my-2 text-3xl cursor-pointer'/>
        </div>
     </div>
    </div>
  )
}

export default Footer