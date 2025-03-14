import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='lg:px-44 px-5 lg:mt-22 mt-8 bg-neutral-900'>
      <div className='flex flex-col lg:flex-row justify-between gap-8 py-8'>
        <div className='py-5 space-y-8 lg:max-w-md'>
            <div>
                <img src={assets.logo} alt="" className='lg:w-60 md:w-45 w-40' />
            </div>
            <div>
                <p className='text-zinc-500 font-light'>Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.</p>
            </div>
            <div className='flex gap-3'>
                <img src={assets.facebook_icon} alt="" className='h-8 w-8' />
                <img src={assets.twitter_icon} alt="" className='h-8 w-8' />
                <img src={assets.instagram_icon} alt="" className='h-8 w-8' />
                <img src={assets.youtube_icon} alt="" className='h-8 w-8' />
            </div>
        </div>
        <div className='lg:pt-5 lg:flex gap-22'>
            <div className='py-5 space-y-5'>
                <h3 className='text-white'>Company</h3>
                <ul className='space-y-2'>
                    <li className='text-zinc-500 font-light'>Home</li>
                    <li className='text-zinc-500 font-light'>Communities</li>
                    <li className='text-zinc-500 font-light'>Events</li>
                    <li className='text-zinc-500 font-light'>Leaders</li>
                    <li className='text-zinc-500 font-light'>Support</li>
                    <li className='text-zinc-500 font-light'>Profile</li>
                </ul>
            </div>
            <div className='py-5 space-y-5'>
                <h3 className='text-white'>Contact</h3>
                <ul>
                    <li className='text-zinc-500 font-light'>contact@communionhub.org</li>
                </ul>
            </div>
        </div>
      </div>

      <div className='border-t border-zinc-700 my-4'></div>
      <div className='py-8 text-center text-zinc-500 text-sm'>
        Copyright © 2024. All right reserved to Communion
      </div>
    </div>
  )
}

export default Footer
