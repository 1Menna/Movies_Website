import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Spinner } from "@material-tailwind/react";

const Details = () => {
    const { state } = useLocation();
    const { id } = state;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [details, setdetails] = useState({}); 

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWQxZTUyY2E1MTI4MWJkNmU1YjBmMTIyZmJmYjQ1ZCIsIm5iZiI6MTc0NTc3ODM4NS43ODIsInN1YiI6IjY4MGU3NmQxM2M3MThlOGM1NTM4MDYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PsrBzXMtzkJG0pskxZb0gDVBd9f6O8QAFETLP-1jUNg'
            }
          };
            
            fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log(data);
                        setdetails(data);
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setError(err);
                    setLoading(false);
                });
        }, []);
    
        if (loading) return (
            <div className='w-screen bg-neutral'>
              <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className='text-center mb-4'>Loading...</div>
                <Spinner className="h-16 w-16 text-blue-gray-100/50" />
              </div>
            </div>
          )
        if (error) return <div>Error loading movies</div>; 
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 max-w-6xl mx-auto m-5">
    {/* Movie Poster - Fixed width, centered */}
    <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
      <img
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face${details.poster_path}`}
        alt={details.title}
        className="w-full max-w-xs rounded-lg shadow-xl object-cover"
      />
    </div>
  
    {/* Movie Details - Flexible width */}
    <div className="w-full md:w-2/3 space-y-6">
      {/*================================================*/}
      {/* Title Section */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-content">
          {details.title}
        </h1>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-lg text-orange-500">
            {details.release_date}
          </span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
            {details.runtime} min
          </span>
        </div>
      </div>
      {/*================================================*/}
      {/* Genres */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-blue-gray-800 dark:bg-gray-700 rounded-full text-sm">
            {details.genres[0].name}
        </span>
        <span className="px-3 py-1 bg-blue-gray-800 dark:bg-gray-700 rounded-full text-sm">
            {details.genres[1].name}
        </span>
        <span className="px-3 py-1 bg-blue-gray-800 dark:bg-gray-700 rounded-full text-sm">
            {details.genres[2].name}
        </span>
      </div><br />
      {/*================================================*/}
      {/* Overview */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-orange-500">Overview</h2>
        <p className="text-neutral-content leading-relaxed max-w-3xl">
          {details.overview}
        </p>
      </div> <br />
      {/*================================================*/}
      {/* Additional Info (optional) */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <h3 className="font-medium  text-orange-500">Status</h3>
          <p>{details.status}</p>
        </div>
        <div>
          <h3 className="font-medium  text-orange-500">Budget</h3>
          <p>${details.budget?.toLocaleString() || 'N/A'}</p>
        </div>
      </div>
    </div>
    {/*================================================*/}
  </div> 
  )
}

export default Details