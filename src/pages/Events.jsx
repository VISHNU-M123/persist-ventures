import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets } from '../assets/assets'
import EventForm from '../components/EventForm'
import EventCard from '../components/EventCard'
import EventFilter from '../components/EventFilter'

const Events = () => {
    
    const [showModal, setShowModal] = useState(false)
    const [activeCategory, setActiveCategory] = useState(null);

    const handleModal = () => {
        setShowModal(!showModal)
    }

    const handleFilterChange = (category) => {
        setActiveCategory(category === activeCategory ? null : category);
    };

    return (
        <div className='bg-black'>
            <Navbar handleModal={handleModal} />
            <div className='lg:px-44 px-5'>
                <div className='py-8 mt-5 space-y-8'>
                    <div>
                        <h1 className='text-white text-center md:text-4xl text-[25px] font-semibold'>We Helped Communities Connect & Flourish</h1>
                        <h1 className='text-[#ec0a30] text-center md:text-4xl text-[25px] font-semibold'>✦ Upcoming Events</h1>
                    </div>
                    <EventFilter 
            onFilterChange={handleFilterChange}
            activeCategory={activeCategory}
          />
                </div>
            </div>

            {/* card section */}
            <EventCard category={activeCategory}/>

            {/* Add Event Button */}
            <div className='flex justify-center'>
                <button 
                    className='text-white bg-[#ec0a30] hover:bg-[#701313] px-5 py-2 rounded-full text-center text-sm font-light cursor-pointer' 
                    onClick={handleModal}>
                    Add New Event
                </button>
            </div>

            {/* Modal for Event Form */}
            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='relative rounded-lg '>
                        <button  className='absolute top-10 right-10 text-white hover:text-black md:text-2xl text-lg bg-red-500 rounded-full md:w-10 md:h-10 w-5 h-5 cursor-pointer flex items-center justify-center' onClick={handleModal}>x</button>
                        <EventForm />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default Events
