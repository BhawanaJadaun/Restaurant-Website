import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Popup = ({ showPopup, setshowPopup }) => {
  return (
    <>
      {showPopup && (
        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]'>
            {/* Header-section */}
            <div className='flex items-center justify-between'>
              <h1 className='text-2xl font-bold text-dark'>Login</h1>
              <AiOutlineClose 
                className='text-2xl cursor-pointer' 
                onClick={() => setshowPopup(false)}
              />
            </div>
            {/* Login Form Section */}
            <div className='mt-4'>
              <input 
                type='email' 
                placeholder='Enter Email' 
                className='w-full rounded-md border bg-gray-300 dark:border-gray-500 px-2 py-1 mb-4'
              />
              <input 
                type='password' 
                placeholder='Enter Password' 
                className='w-full rounded-md border bg-gray-300 dark:border-gray-500 px-2 py-1 mb-4'
              />
              {/* Login Button Section */}
              <button 
                className='w-full bg-primary text-white p-2 rounded-md' 
                onClick={() => setshowPopup(false)}
              >
                Login
              </button>
              {/* Social login */}
              <div className='mt-4'>
                <p className='text-center'>or login with</p>
                <div className='flex justify-center gap-2 mt-2'>
                  <FaFacebook className='text-3xl hover:text-blue-500 duration-200 cursor-pointer'/>
                  <FaGoogle className='text-3xl hover:text-primary duration-200 cursor-pointer'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

