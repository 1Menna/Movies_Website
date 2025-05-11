import React, { useState, useEffect } from 'react';
import View from '../Components/View';
import { Spinner } from "@material-tailwind/react";

const Movies = () => {
    const [movies, setMovies] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // ✅ حالة البحث

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

    // ✅ فلترة الأفلام حسب نص البحث
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return (
        <div className='w-screen bg-black'>
          <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='text-center mb-4'>Loading...</div>
            <Spinner className="h-16 w-16 text-blue-gray-100/50" />
          </div>
        </div>
    );
    
    if (error) return <div>Error loading movies</div>;

    return (
        <div className="px-4">
            <h1 className='text-center text-4xl mt-4 mb-4'>MOVIES</h1>

            {/* ✅ مربع البحث */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="ابحث عن فيلم..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 w-full max-w-xl rounded-md text-black"
                />
            </div>

            {/* ✅ عرض الأفلام بعد الفلترة */}
            <div className="flex justify-evenly flex-wrap gap-4">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((Show) => (
                        <View key={Show.id} type={1} id={Show.id} Show={Show} />
                    ))
                ) : (
                    <p className="text-center w-full text-gray-400">لا توجد نتائج مطابقة.</p>
                )}
            </div>
        </div>
    );
};

export default Movies