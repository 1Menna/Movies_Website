import React, { useState, useEffect } from 'react';
import View from '../Components/View';
import { Spinner } from "@material-tailwind/react";

const Series = () => {
    const [Series, setSeries] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWQxZTUyY2E1MTI4MWJkNmU1YjBmMTIyZmJmYjQ1ZCIsIm5iZiI6MTc0NTc3ODM4NS43ODIsInN1YiI6IjY4MGU3NmQxM2M3MThlOGM1NTM4MDYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PsrBzXMtzkJG0pskxZb0gDVBd9f6O8QAFETLP-1jUNg'
        }
      };
        
      fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(data => {
                if (data.results) {
                    setSeries(data.results);
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
        <div className='w-screen bg-black'>
          <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='text-center mb-4'>Loading...</div>
            <Spinner className="h-16 w-16 text-blue-gray-100/50" />
          </div>
        </div>
      )
    // if (error) return <div>Error loading movies</div>;
    if (error) return (
    <div className='w-screen bg-black'>
      <div className='flex flex-col items-center justify-center min-h-screen gap-4 text-center'>
        <ExclamationCircleIcon className="w-16 h-16 text-red-500" />
        <h2 className='text-xl font-medium text-white'>Failed to Load Movies</h2>
        <p className='text-blue-gray-100/70 max-w-md px-4'>
          {error.message || "Please check your connection and try again."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
    );

    return (
        <div>  
            <h1 className='text-center text-4xl mt-4'>SERIES</h1>
            <div className="flex justify-evenly flex-wrap">
                {Series.map((Show) => (
                    <View key={Show.id} type={2} id={Show.id} Show={Show} />
                ))}
            </div>
        </div>
    );
};

export default Series;