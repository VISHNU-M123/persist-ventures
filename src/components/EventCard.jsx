import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const EventCard = ({ category }) => {
  const [showDetails, setShowDetails] = useState({});
  const [events, setEvents] = useState([]);

  // Fetch events from localStorage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  // Filter events based on category
  const filteredEvents = category ? 
    events.filter(event => event.category === category) : 
    events;

  const toggleDetails = (cardId) => {
    setShowDetails(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={event.id} className="w-full p-3 bg-white rounded-lg">
              <div className="relative">
                {event.image && (
                  <img 
                    src={event.image} 
                    alt="" 
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                )}
                <div className="absolute top-3 right-3 bg-white flex flex-col items-center px-3 py-2 rounded-lg">
                  <span className="text-gray-600 text-sm">
                    {new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                  </span>
                  <span className="font-semibold text-xl">
                    {new Date(event.date).getDate()}
                  </span>
                </div>
              </div>
              <div className="p-2 space-y-5">
                <h3 className="text-xl font-medium mt-5">{event.title}</h3>
                {!showDetails[index] ? (
                  <div className="space-y-3">
                    <div className="flex gap-2 items-center">
                      <img src={assets.calendar_icon} alt="" className="w-5 h-5" />
                      <span>{new Date(event.date).toDateString()}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src={assets.location} alt="" className="w-5 h-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 font-light">{event.description}</p>
                )}
                <div>
                  <button 
                    onClick={() => toggleDetails(index)}
                    className="text-white bg-slate-800 hover:bg-slate-700 transition duration-300 w-full flex justify-center items-center py-2.5 gap-2 rounded-lg cursor-pointer"
                  >
                    Event description <img src={assets.arrow_right_up} alt="" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events added yet.</p>
        )}
      </div>
    </div>
  );
};

export default EventCard;