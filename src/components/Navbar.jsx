import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({ handleModal }) => {

  const [menu, setMenu] = useState(false);
  const [showEventOptions, setShowEventOptions] = useState(false);

  const toggleEventOptions = () => {
    setShowEventOptions(!showEventOptions);
  };

  return (
    <div>
      <div className='flex items-center justify-between w-full bg-transparent lg:px-40 px-5 py-5'>
        <div>
            <img src={assets.logo} alt="" className='w-80 h-auto' />
        </div>
        <div className='flex justify-center w-full'>
          <div className='hidden sm:block'>
            <ul className='flex text-slate-800 gap-10 text-md'>
                <Link to={'/'}><li className='cursor-pointer text-white hover:text-red-500 text-sm font-normal'>Home</li></Link>
                <li className='cursor-pointer text-sm font-normal' onClick={toggleEventOptions}>
                  <p className='text-white hover:text-red-500'>Events</p>
                  {showEventOptions && (
                    <div className='absolute bg-red-500 rounded mt-2 py-2 shadow-md w-50'>
                      <div className='py-1 px-3 font-normal text-white hover:bg-red-100 hover:text-red-500 cursor-pointer' onClick={handleModal}>Create Event</div>
                      <Link to={'/events'}><div className='py-1 px-3 font-normal text-white hover:bg-red-100 hover:text-red-500 cursor-pointer'>All Events</div></Link>
                    </div>
                  )}
                </li>
                <li className='cursor-pointer text-white hover:text-red-500 text-sm font-normal'>About</li>
            </ul>
          </div>
        </div>
        <div >
        <button className='text-white bg-[#ec0a30] rounded-full px-5 py-2 items-center hidden sm:block justify-center w-30 cursor-pointer hover:bg-[#701313]'>Sign In</button>
        </div>
        {menu !== true && (
        <div onClick={() => setMenu(true)} className='block sm:hidden'>
          <img src={assets.menu_icon} alt="" />
        </div>
        )}
        {menu === true && (
        <div className='block sm:hidden'>
          <button onClick={() => setMenu(false)}>
            <img src={assets.close_icon} alt="" />
          </button> 
        </div>
        )}
      </div>

      {/* Mobile Menu */}
      {menu && (
      <div className='px-5 py-5'>
        <ul className='space-y-3'>
          <li className='hover:text-red-500 text-white text-sm font-normal'>Home</li>
          <hr className='border-gray-300' />
          <li className='hover:text-red-500 text-white text-sm font-normal' onClick={toggleEventOptions}>Event
            {showEventOptions && (
              <div className='bg-red-500 rounded-xl mt-2 p-2 px-5 shadow-md'>
                <div className='py-1 px-3 font-normal hover:bg-gray-100 cursor-pointer' onClick={(e) => {
                  e.stopPropagation();
                  handleModal();
                  setMenu(false); // Close menu after clicking "Create Event"
              }}>Create Event</div>
                <Link to={'/events'}><div className='py-1 px-3 font-normal hover:bg-gray-100 cursor-pointer'>All Events</div></Link>
              </div>
            )}
          </li>
          <hr className='border-gray-300' />
          <li className='hover:text-red-500 text-white text-sm font-normal'>About</li>
          <hr className='border-gray-300' />
        </ul>
        <div className='mt-5'>
          <button className='text-white bg-red-600 rounded px-5 py-2 flex items-center justify-center w-full cursor-pointer hover:bg-red-500'>Sign In</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default Navbar;
