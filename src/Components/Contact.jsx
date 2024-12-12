import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const initialState = { name: "", email: "", message: "" };
  const [userData, setuserData] = useState(initialState);
  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  const SendEmail = (e) => {
    e.preventDefault();

    if(!userData.email || !userData.message || !userData.name ){
      return;
    }

    emailjs.sendForm('service_4zytp29', 'template_ctbp1ly', e.target, '00JPgKkpAawmAdMFZ')
      .then((result) => {
        alert("Email sent successfully ✔");
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className=' w-full pt-3 lg:mb-20 mb-4 md:mb-20'>
      <div class="bg-indigo-900 text-center md:py-4 lg:px-4">
        <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex flex-col" role="alert">
          <span class="flex rounded-full bg-indigo-500 uppercase px-3 py-1 text-2xl font-bold mr-3">Get Started </span>
          <span class="font-semibold mx-auto my-3 hidden md:block lg:block text-left flex-auto">Do start your Commercial journey With Us ! feel free to Contact us regarding any doubts 👇</span>
        </div>
      </div>
      <div className='flex md:flex-row flex-col border-box mx-auto lg:mx-auto my-auto mt-4 shadow shadow-black border-2 border-slate-100 rounded-xl lg:w-4/5 md:w-4/5 w-5/6 '>
        <div className='md:w-2/5 hidden md:block lg:block bg-purple-500 '>
          <img src='/myphoto.jpg' alt='tp' className='rounded-full' />
        </div>
        <div className='md:w-3/5 flex-col bg-slate-100'>
          <h3 className='text-3xl font-bold text-purple-700 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 py-4 ' >Start your project</h3>
          <form onSubmit={SendEmail} className='md:ml-20 lg:ml-20 '>
            <input type='text' placeholder="Full name" name='name' onChange={handleChange} className='text-lg  md:w-4/5 lg:w-4/5 w-full  h-12 px-2 border-2 border-slate-300 pt-1 md:ml-5 lg:ml-5 mt-3 shadow shadow-black rounded ' />
            <input type='email' placeholder="email address" name='email' onChange={handleChange} className='text-lg  h-12 px-2 border-2 w-full border-slate-300 pt-1 md:ml-5 lg:ml-5 mt-4 lg:w-4/5 md:w-4/5 shadow shadow-black rounded' />
            <textarea type='text' placeholder="message..." name='message' onChange={handleChange} className='text-lg md:w-4/5 lg:w-4/5 w-full h-48 border-2 border-slate-300 px-2 pt-1  md:ml-5 lg:ml-5 mt-4 shadow shadow-black ' />
            <button type='submit' className='md:w-4/5 lg:w-4/5 md:ml-5 lg:ml-5 mt-3 font-bold rounded bg-purple-600 hover:bg-purple-800 text-white text-2xl w-full rounded mb-3 lg:py-2 md:py-2 shadow shadow-black ' >Send </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;