import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets } from '../assets/assets'

const Events = () => {

    const [showDetails, setShowDetails] = useState({})
    const toggleDetails = (cardId) => {
        setShowDetails(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }))
    }
  return (
    <div className='bg-black'>
      <Navbar/>
      <div className='lg:px-44 px-5'>
        <div className='py-8 mt-5 space-y-8'>
            <div>
                <h1 className='text-white text-center md:text-4xl text-[25px] font-semibold'>We Helped Communities Connect & Flourish</h1>
                <h1 className='text-[#ec0a30] text-center md:text-4xl text-[25px] font-semibold'>✦ Upcoming Events</h1>
            </div>
            <div className='flex gap-3 md:gap-8 justify-center'>
                <button className='text-white hover:bg-white hover:text-black border border-white px-5 py-2 rounded-full text-center text-sm font-light cursor-pointer'>Religious</button>
                <button className='text-white hover:bg-white hover:text-black border border-white px-5 py-2 rounded-full text-center text-sm font-light cursor-pointer'>Social</button>
                <button className='text-white hover:bg-white hover:text-black border border-white px-5 py-2 rounded-full text-center text-sm font-light cursor-pointer'>Charity</button>
            </div>
        </div>
      </div>

      {/* card */}
      <div className='container mx-auto px-5 md:px-10 lg:px-20 py-12'>
        {/* full card div */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* card 1 div */}
            <div className='w-full p-3 bg-white rounded-lg'>
                {/* img */}
                <div className='relative'>
                    <img src={assets.event_card_img_1} alt="" className='w-full h-[200px] object-cover rounded-lg' />
                    <div className='absolute top-3 right-3 bg-white flex flex-col items-center px-3 py-2 rounded-lg'>
                        <span className='text-gray-600 text-sm'>MAR</span>
                        <span className='font-semibold text-xl'>15</span>
                    </div>
                </div>

                {/* description */}
                <div className='p-2 space-y-5'>
                    <h3 className='text-xl font-medium mt-5'>Christmas Charity Drive</h3>
                    {/* main */}
                    {!showDetails["card1"] ? (
                        <div>
                            <div className='space-y-3'>
                                <div className='flex gap-2 items-center'>
                                    <img src={assets.calendar_icon} alt="" className='w-5 h-5' />
                                    <span className=''>Saturday, March 15, 2025</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <img src={assets.clock_icon} alt="" className='w-5 h-5' />
                                    <span className=''>5:30 AM IST</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className='text-gray-600 font-light'>Join us for a meaningful charity event to support underprivileged communities. Your presence will make a difference.</p>
                    )}

                    {/* button div */}
                    <div>
                        <button onClick={() => toggleDetails("card1")} className='text-white bg-slate-800 hover:bg-slate-700 transition duration-300 w-full flex justify-center items-center py-2.5 gap-2 rounded-lg cursor-pointer'>Event details <img src={assets.arrow_right_up} alt="" className='w-5 h-5' /></button>
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div className='w-full p-3 bg-white rounded-lg'>
                {/* img */}
                <div className='relative'>
                    <img src={assets.event_card_img_1} alt="" className='w-full h-[200px] object-cover rounded-lg' />
                    <div className='absolute top-3 right-3 bg-white flex flex-col items-center px-3 py-2 rounded-lg'>
                        <span className='text-gray-600 text-sm'>MAR</span>
                        <span className='font-semibold text-xl'>15</span>
                    </div>
                </div>

                {/* description */}
                <div className='p-2 space-y-5'>
                    <h3 className='text-xl font-medium mt-5'>Christmas Charity Drive</h3>
                    {/* main */}
                    {!showDetails["card2"] ? (
                        <div>
                        <div className='space-y-3'>
                            <div className='flex gap-2 items-center'>
                                <img src={assets.calendar_icon} alt="" className='w-5 h-5' />
                                <span className=''>Saturday, March 15, 2025</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={assets.clock_icon} alt="" className='w-5 h-5' />
                                <span className=''>5:30 AM IST</span>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <p className='text-gray-600 font-light'>Join us for a meaningful charity event to support underprivileged communities. Your presence will make a difference.</p>
                    )}

                    {/* button div */}
                    <div>
                        <button onClick={() => toggleDetails("card2")} className='text-white bg-slate-800 hover:bg-slate-700 transition duration-300 w-full flex justify-center items-center py-2.5 gap-2 rounded-lg cursor-pointer'>Event details <img src={assets.arrow_right_up} alt="" className='w-5 h-5' /></button>
                    </div>
                </div>
            </div>

            {/* card 3 */}
            <div className='w-full p-3 bg-white rounded-lg'>
                {/* img */}
                <div className='relative'>
                    <img src={assets.event_card_img_1} alt="" className='w-full h-[200px] object-cover rounded-lg' />
                    <div className='absolute top-3 right-3 bg-white flex flex-col items-center px-3 py-2 rounded-lg'>
                        <span className='text-gray-600 text-sm'>MAR</span>
                        <span className='font-semibold text-xl'>15</span>
                    </div>
                </div>

                {/* description */}
                <div className='p-2 space-y-5'>
                    <h3 className='text-xl font-medium mt-5'>Christmas Charity Drive</h3>
                    {/* main */}
                    {!showDetails["card3"] ? (
                        <div>
                        <div className='space-y-3'>
                            <div className='flex gap-2 items-center'>
                                <img src={assets.calendar_icon} alt="" className='w-5 h-5' />
                                <span className=''>Saturday, March 15, 2025</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={assets.clock_icon} alt="" className='w-5 h-5' />
                                <span className=''>5:30 AM IST</span>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <p className='text-gray-600 font-light'>Join us for a meaningful charity event to support underprivileged communities. Your presence will make a difference.</p>
                    )}

                    {/* button div */}
                    <div>
                        <button onClick={() => toggleDetails("card3")} className='text-white bg-slate-800 hover:bg-slate-700 transition duration-300 w-full flex justify-center items-center py-2.5 gap-2 rounded-lg cursor-pointer'>Event details <img src={assets.arrow_right_up} alt="" className='w-5 h-5' /></button>
                    </div>
                </div>
            </div>

            {/* card 4 */}
            <div className='w-full p-3 bg-white rounded-lg'>
                {/* img */}
                <div className='relative'>
                    <img src={assets.event_card_img_1} alt="" className='w-full h-[200px] object-cover rounded-lg' />
                    <div className='absolute top-3 right-3 bg-white flex flex-col items-center px-3 py-2 rounded-lg'>
                        <span className='text-gray-600 text-sm'>MAR</span>
                        <span className='font-semibold text-xl'>15</span>
                    </div>
                </div>

                {/* description */}
                <div className='p-2 space-y-5'>
                    <h3 className='text-xl font-medium mt-5'>Christmas Charity Drive</h3>
                    {/* main */}
                    {!showDetails["card4"] ? (
                        <div>
                        <div className='space-y-3'>
                            <div className='flex gap-2 items-center'>
                                <img src={assets.calendar_icon} alt="" className='w-5 h-5' />
                                <span className=''>Saturday, March 15, 2025</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={assets.clock_icon} alt="" className='w-5 h-5' />
                                <span className=''>5:30 AM IST</span>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <p className='text-gray-600 font-light'>Join us for a meaningful charity event to support underprivileged communities. Your presence will make a difference.</p>
                    )}

                    {/* button div */}
                    <div>
                        <button onClick={() => toggleDetails("card4")} className='text-white bg-slate-800 hover:bg-slate-700 transition duration-300 w-full flex justify-center items-center py-2.5 gap-2 rounded-lg cursor-pointer'>Event details <img src={assets.arrow_right_up} alt="" className='w-5 h-5' /></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Events
