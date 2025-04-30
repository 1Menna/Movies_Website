import React, { useState, useEffect } from 'react';
import View from '../Components/View';
import { Spinner } from "@material-tailwind/react";
const Movies = () => {
    const [movies, setMovies] = useState([]); 
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
        
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(data => {
                if (data.results) {
                    setMovies(data.results);
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
    <>
    <div className='text-center'>Loading...</div>
    <Spinner className="h-16 w-16 text-gray-900/50" />;
    </>
    )
    if (error) return <div>Error loading movies</div>;

    return (
        <div>  
            <h1 className='text-center text-4xl mt-4'>MOVIES</h1>
            <div className="flex justify-evenly flex-wrap">
                {movies.map((Show) => (
                    <View key={Show.id} Show={Show} />
                ))}
            </div>
        </div>
    );
};

export default Movies;