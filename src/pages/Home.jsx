import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventForm from '../components/EventForm'
import { Link } from 'react-router-dom'

const Home = () => {
  const [showModal, setShowModal] = useState(false);  // Add state for modal

  const handleModal = () => {  // Add handleModal function
    setShowModal(!showModal);
  }
  return (
    <div className='bg-black'>
      <Navbar handleModal={handleModal}/>
        {/* main div */}
      <div className='lg:px-44 px-5'>
        {/* left and right */}
        <div className='lg:flex mt-12'>
            {/* left side */}
            <div className='flex flex-col items-left justify-end lg:pr-15'>
                <h1 className='text-white text-[32px] lg:text-[55px] md:text-[44px] font-extrabold leading-[1.1] tracking-[-2px]'>Connecting People <br /> <span className='gradient-text'>Across Faiths & Interests</span> </h1>
                <p className='text-white mt-3'>Communion helps you discover events, connect with people of different faiths, and build a stronger community through shared experiences.</p>
                <div className='flex sm:flex-row flex-col mt-3 gap-5'>
                  <Link to={'/events'}><button className='text-white bg-[#ec0a30] hover:bg-[#701313] px-5 w-full py-2 rounded-lg cursor-pointer'>Explore Events</button></Link>
                  <button className='text-white border hover:bg-white hover:text-black border-white px-5 py-2 rounded-lg cursor-pointer'>Contact Us</button>
                </div>
                <div className='mt-3 flex flex-col md:flex-row items-center gap-3'>
                  <div className='flex'>
                    <img src={assets.user_1} alt="" className='w-10 h-10 rounded-full' />
                    <img src={assets.user_1} alt="" className='w-10 h-10 rounded-full ml-[-12px]' />
                    <img src={assets.user_1} alt="" className='w-10 h-10 rounded-full ml-[-12px]' />
                    <img src={assets.user_1} alt="" className='w-10 h-10 rounded-full ml-[-12px]' />
                  </div>
                  <p className='text-white text-sm font-light text-center'>Trusted by Over <span className='text-red-600 font-normal text-lg'>15k+</span> Individuals Worldwide</p>
                </div>
            </div>
            {/* right side */}
            <div className="grid md:grid-rows-2 md:grid-cols-2 gap-4 lg:w-[600px] md:mx-auto md:h-[400px] lg:mt-0 mt-8">
                <img src={assets.main_img_1} alt="" className='w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer' />
                <img src={assets.main_img_2} alt="" className='w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer' />
                <div className="md:col-span-2">
                    <img src={assets.main_img_3} alt="" className='w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer' />
                </div>
            </div>
        </div>
      </div>

        {/* Why Communion Rocks! div */}
        <div className='bg-neutral-900 lg:mt-28 mt-8 pt-8 lg:px-44 px-5 pb-24'>
            <div className=' text-center mt- py-15'>
                <h1 className='text-white text-4xl font-semibold'>Why Communion Rocks!</h1>
            </div>
            <div className="grid grid-cols-12 lg:gap-10">
              {/* Paragraph Section - 4 columns */}
              <div className="col-span-12 lg:col-span-4 lg:text-left text-center">
                <p className="text-white leading-7">
                  Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.
                </p>
                <div className='flex justify-center lg:justify-start'>
                  <p className='flex text-white mt-5 gap-3 items-center px-5 py-2 rounded-full cursor-pointer hover:bg-neutral-700 group'>Why join Us ? <img src={assets.right_arrow_icon} alt="" className='w-5 h-5 transition-transform duration-300 group-hover:rotate-90' /></p>
                </div>
              </div>

              {/* Cards Section - 8 columns */}
              <div className="col-span-12 lg:col-span-8 lg:mt-0 mt-5 flex lg:flex-row flex-col gap-8">
                {/* Card 1 */}
                <div className="bg-neutral-800 p-5 rounded-2xl space-y-5 transform transition-transform duration-300 hover:scale-110">
                  <div>
                    <img src={assets.card_icon_1} alt="" />
                  </div>
                  <h1 className="text-white text-xl">Unifying Communities</h1>
                  <p className="text-white text-sm">
                    Communion bridges diverse religious communities, becoming the social glue for faiths, beliefs, and traditions.
                  </p>
                  <div>
                    <button className="text-white flex border-2 border-white rounded-full px-5 py-2 gap-3 items-center bg-neutral-700 cursor-pointer group">
                      Learn More 
                      <img src={assets.right_arrow_icon} alt="" className='w-5 h-5 transition-transform duration-300 group-hover:rotate-90' />
                    </button>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-neutral-800 p-5 rounded-2xl space-y-5 transform transition-transform duration-300 hover:scale-110">
                  <div>
                    <img src={assets.card_icon_2} alt="" />
                  </div>
                  <h1 className="text-white text-xl">Innovative and Fun</h1>
                  <p className="text-white text-sm">
                  Experience faith in a fresh way through our interactive features, engaging events, and modern approach to
                  </p>
                  <div>
                    <button className="text-white flex border-2 border-white rounded-full px-5 py-2 gap-3 items-center bg-neutral-700 cursor-pointer group">
                      Learn More <img src={assets.right_arrow_icon} alt="" className='w-5 h-5 transition-transform duration-300 group-hover:rotate-90' />
                    </button>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-neutral-800 p-5 rounded-2xl space-y-5 transform transition-transform duration-300 hover:scale-110">
                  <div>
                    <img src={assets.card_icon_3} alt="" />
                  </div>
                  <h1 className="text-white text-xl">Promoting Unity</h1>
                  <p className="text-white text-sm">
                  We foster understanding and harmony between different faith communities through
                  </p>
                  <div>
                    <button className="text-white flex border-2 border-white rounded-full px-5 py-2 gap-3 items-center bg-neutral-700 cursor-pointer group">
                      Learn More <img src={assets.right_arrow_icon} alt="" className='w-5 h-5 transition-transform duration-300 group-hover:rotate-90' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* join the conversation  */}
        {/* main div */}
        <div className='lg:px-44 px-5 lg:py-20 pb-0 lg:pb-0 py-5'>
          {/* heading section */}
          <div>
            <div className='w-full space-y-5'>
              <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:py-0 py-5'>
                  <h1 className='text-white lg:text-4xl text-3xl font-semibold text-center lg:text-left'>Join the Conversation</h1>
                </div>
                <p className='text-gray-400 justify-start flex w-full font-light'>Discover a vibrant community, share your thoughts, and connect with like-minded individuals. Together, we grow.</p>
              </div>
              <div className='flex flex-col lg:flex-row lg:gap-0 gap-5'>
                <div className='flex w-full items-center gap-2'>
                  <img src={assets.gemini_icon} alt="" className='w-8 h-8' />
                  <h1 className='text-[#ec0a30] lg:text-4xl text-2xl font-semibold'>Build Connections</h1>
                </div>
                <div className='flex w-full justify-start'>
                  <button className='text-white text-sm flex items-center bg-gradient-to-r rounded-lg gap-3 px-5 sm:px-8 py-2 from-gray-900 to-blue-500 hover:from-blue-500 hover:to-gray-900 group'>
                    Join conversation <img src={assets.right_arrow_icon} alt="" className='w-4 h-4 transition-transform duration-300 group-hover:rotate-90' />
                  </button>
                </div> 
              </div>
            </div>
          </div>

          {/* images second and text */}
          <div>
            {/* images */}
            <div className='flex flex-col lg:flex-row w-full gap-4 mt-14'>
              {/* First Image */}
              <div className='w-full h-[200px] md:h-[300px] lg:h-[400px] lg:w-[65%]'>
                <img src={assets.second_img_1} alt="" className='object-cover h-full w-full rounded-xl' />
              </div>
              
              {/* Second Image */}
              <div className='w-full h-[200px] md:h-[300px] lg:h-[400px] lg:w-[35%]'>
                <img src={assets.second_img_2} alt="" className='object-cover h-full w-full rounded-xl' />
              </div>
            </div>

            <div className='text-center py-16'>
              <h1 className='text-white md:text-3xl text-xl font-semibold'>Where Connections Thrive</h1>
              <h1 className='text-white md:text-3xl text-xl font-semibold'>and Ideas Flourish <span className='text-red-600'>✦ 2x</span></h1>
            </div>
          </div>
        </div>

        {/* Moments of Connection We've div */}
        <div className='bg-neutral-900 lg:mt-28 mt-8 lg:px-44 px-5 py-24'>
          <div className='text-center flex flex-col items-center space-y-5'>
            <h1 className='text-white text-4xl font-semibold'>Moments of Connection We've <br /> Made So Far...</h1>
            <p className='text-zinc-500 font-light'>Explore the impactful connections we've fostered so far, bringing together diverse <br /> communities through shared experiences, collaboration, and innovation.</p>
            <button className='text-white font-light items-center border-1 border-white rounded-full px-5 py-3 flex gap-3 cursor-pointer group'>View all Moments <img src={assets.right_arrow_icon} alt="" className='transition-transform duration-300 group-hover:rotate-90' /></button>
          </div>

          {/* cards div */}
          <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* card 1 */}
            <div className='bg-neutral-800 rounded-2xl'>
              <div className='overflow-hidden rounded-t-2xl'>
                <img src={assets.card_img_1} alt="" className='rounded-t-2xl cursor-pointer transform transition-transform duration-300 hover:scale-110' />
              </div>
              <div className='px-5 py-8 space-y-5'>
                <h1 className='text-white text-lg'>Shared Service Projects</h1>
                <p className='text-zinc-500 font-light text-sm'>Make difference by joining hands to support impactful projects that uplift communities and brind positive change.</p>
                <button className='border border-white rounded-full px-5 py-3 text-white text-sm font-light cursor-pointer'>View Cast Study</button>
              </div>
            </div>

            {/* card 2 */}
            <div className='bg-neutral-800 rounded-2xl'>
              <div className='overflow-hidden rounded-t-2xl'>
                <img src={assets.card_img_1} alt="" className='rounded-t-2xl cursor-pointer transform transition-transform duration-300 hover:scale-110' />
              </div>
              <div className='px-5 py-8 space-y-5'>
                <h1 className='text-white text-lg'>Community Celebrations</h1>
                <p className='text-zinc-500 font-light text-sm'>Experience the joy of shared festivities as we honor traditions, embrace diversity, and strengthen communal bonds.</p>
                <button className='border border-white rounded-full px-5 py-3 text-white text-sm font-light cursor-pointer'>View Cast Study</button>
              </div>
            </div>

            {/* card 3 */}
            <div className='bg-neutral-800 rounded-2xl'>
              <div className='overflow-hidden rounded-t-2xl'>
                <img src={assets.card_img_1} alt="" className='rounded-t-2xl cursor-pointer transform transition-transform duration-300 hover:scale-110' />
              </div>
              <div className='px-5 py-8 space-y-5'>
                <h1 className='text-white text-lg'>Volunteer Gatherings</h1>
                <p className='text-zinc-500 font-light text-sm'>Join like-minded individuals in meaningful initiatives, giving back to communities and building lasting connections.</p>
                <button className='border border-white rounded-full px-5 py-3 text-white text-sm font-light cursor-pointer'>View Cast Study</button>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className='text-center px-5 py-5 lg:leading-14 mt-12 lg:space-y-0 space-y-5'>
          <h1 className='text-white text-4xl font-semibold'>Trusted by Over <span className='text-red-600'>1500+</span> Active Global Users</h1>
          <p className='text-zinc-500 font-light'>Join a growing community of over 1500 users worldwide who trust us to connect, engage, and thrive together.</p>
        </div>

        {/* three cards */}
        <div className='lg:px-44 px-5 py-5'>
          <div className='flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide'>
            {/* Card 1 */}
            <div className='bg-indigo-300 rounded-2xl px-8 py-12 min-w-full md:min-w-[80%] lg:min-w-[30%] snap-center'>
              <p className='text-slate-700'>Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths.</p>
              <div className='flex mt-5 gap-3'>
                <img src={assets.user_1} alt="" className='rounded-full w-12 h-12' />
                <div>
                  <p className='text-stone-800'>John M</p>
                  <p className='text-gray-500'>USA</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-indigo-300 rounded-2xl px-8 py-12 min-w-full md:min-w-[80%] lg:min-w-[30%] snap-center'>
              <p className='text-slate-700'>Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths.</p>
              <div className='flex mt-5 gap-3'>
                <img src={assets.user_1} alt="" className='rounded-full w-12 h-12' />
                <div>
                  <p className='text-stone-800'>John M</p>
                  <p className='text-gray-500'>USA</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className='bg-indigo-300 rounded-2xl px-8 py-12 min-w-full md:min-w-[80%] lg:min-w-[30%] snap-center'>
              <p className='text-slate-700'>Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths.</p>
              <div className='flex mt-5 gap-3'>
                <img src={assets.user_1} alt="" className='rounded-full w-12 h-12' />
                <div>
                  <p className='text-stone-800'>John M</p>
                  <p className='text-gray-500'>USA</p>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div className='bg-indigo-300 rounded-2xl px-8 py-12 min-w-full md:min-w-[80%] lg:min-w-[30%] snap-center'>
              <p className='text-slate-700'>Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths.</p>
              <div className='flex mt-5 gap-3'>
                <img src={assets.user_1} alt="" className='rounded-full w-12 h-12' />
                <div>
                  <p className='text-stone-800'>John M</p>
                  <p className='text-gray-500'>USA</p>
                </div>
              </div>
            </div>

            {/* card 5 */}
            <div className='bg-indigo-300 rounded-2xl px-8 py-12 min-w-full md:min-w-[80%] lg:min-w-[30%] snap-center'>
              <p className='text-slate-700'>Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths.</p>
              <div className='flex mt-5 gap-3'>
                <img src={assets.user_1} alt="" className='rounded-full w-12 h-12' />
                <div>
                  <p className='text-stone-800'>John M</p>
                  <p className='text-gray-500'>USA</p>
                </div>
              </div>
            </div>

            {/* card 6 */}
            <div className='bg-indigo-300 rounded-2xl px-8 py-12 min-w-full md:min-w-[80%] lg:min-w-[30%] snap-center'>
              <p className='text-slate-700'>Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths.</p>
              <div className='flex mt-5 gap-3'>
                <img src={assets.user_1} alt="" className='rounded-full w-12 h-12' />
                <div>
                  <p className='text-stone-800'>John M</p>
                  <p className='text-gray-500'>USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative rounded-lg'>
            <button className='absolute top-3 right-3 text-white hover:text-black text-2xl bg-red-500 rounded-full w-10 h-10 cursor-pointer' onClick={handleModal}>x</button>
            <EventForm />
          </div>
        </div>
      )}
        <Footer/>
    </div>
  )
}

export default Home
