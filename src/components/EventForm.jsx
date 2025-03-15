import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { title, date, category, location, description, image };
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    localStorage.setItem("events", JSON.stringify([...storedEvents, newEvent]));
    navigate("/events");
    window.location.reload()
  };

  return (
    <div className="flex items-center justify-center w-full lg:w-[900px]">
      <div className="w-full flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side: Form */}
        <div className="w-full md:w-1/2 p-4 md:p-6">
          <img src={assets.logo} alt="Logo" className="w-24 md:w-32 mb-4" />
          <h1 className="text-red-500 text-2xl md:text-3xl font-bold mb-2 text-center md:text-left">Create a New Event</h1>
          <h2 className="text-black text-lg md:text-xl font-semibold mb-4 text-center md:text-left">Fill in the details to create your event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded outline-none border-gray-300 px-5 py-2" required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded outline-none border-gray-300 px-5 py-2" required />
            <input type="text" placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} className='w-full p-2 border rounded outline-none border-gray-300 px-5 py-2' required/>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded outline-none border-gray-300 px-5 py-2" required/>
            <textarea name="description" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} className='w-full p-2 border rounded outline-none border-gray-300 px-5 py-2 h-20 md:h-24'></textarea>
            <div className="border border-gray-300 rounded p-2">
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" required/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Add Event
            </button>
          </form>
        </div>
        {/* Right side: Event Image */}
        <div className="hidden md:block md:w-1/2">
          <img src={assets.main_img_1} alt="Event" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default EventForm;