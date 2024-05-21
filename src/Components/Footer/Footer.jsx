import React from 'react';
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='text-white mt-20'>
      <div data-aos = "fade-down" className='container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl'>
        <div>
          {/* Heading Section */}
          <h1 className='py-10 text-4xl font-bold text-white text-center'>Contact Us</h1>
          {/* Grid Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-white pb-6'>
            {/* Location Section */}
            <div className='text-center space-y-4'>
              <div className='flex justify-center'>
                <FaLocationDot className='text-5xl' />
              </div>
              <p>Aligarh (204215)</p>
            </div>
            {/* Email Section */}
            <div className='text-center space-y-4'>
              <div className='flex justify-center'>
                <MdEmail className='text-5xl' />
              </div>
              <div>
                <p>info@foodgoogle.com</p>
                <p>hr@goodfood.com</p>
              </div>
            </div>
            {/* Number Section */}
            <div className='text-center space-y-4'>
              <div className='flex justify-center'>
                <FaPhone className='text-5xl' />
              </div>
              <div>
                <p>+91 964332432 - Sales and Services</p>
                <p>+91 9623423456 - Hiring Queries</p>
                <p>+91 234523445 - Whatsapp</p>
              </div>
            </div>
          </div>
        </div>
      
      {/* Copyright Section */}
      <hr/>
      <div className='flex justify-between p-4 items-center bg-gradient-to-b from-primary to-primaryDark'>
        <p>© Bhawana Jadaun. All rights reserved</p>
        <div className='flex items-center gap-6'>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
