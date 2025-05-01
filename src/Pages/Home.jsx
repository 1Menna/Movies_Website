import React from 'react';
import { useState, useEffect } from 'react';
import View from '../Components/View';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Spinner } from "@material-tailwind/react";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]); 
  const [topSeries, setTopSeries] = useState([]); 
  const [featuredContent, setFeaturedContent] = useState(null);
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
    
    // Fetch popular movies
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          setTopMovies(data.results);
          // Set the first movie as featured content if not already set
          if (!featuredContent && data.results.length > 0) {
            setFeaturedContent({
              ...data.results[0],
              type: 'movie'
            });
          }
        }
      })
      .catch(err => {
          console.error(err);
          setError(err);
      });
      
    // Fetch top rated series
    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          setTopSeries(data.results);
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
  );

  if (error) return <div>Error loading data</div>;

  return (
    <div className="pb-10">
      
      
      {/* Top Movies Section */}
      <div className="mt-10">
        <h1 className='my-5 text-center text-4xl'>TOP Movies</h1>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            loop
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 25 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 70 }
            }}
          >
            {topMovies.map((Show) => (
              <SwiperSlide key={Show.id}>
                <View key={Show.id} type={1} id={Show.id} Show={Show} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Top Series Section */}
      <div className="mt-10">
        <h1 className='my-5 text-center text-4xl'>TOP Series</h1>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            loop
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 25 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 70 }
            }}
          >
            {topSeries.map((Show) => (
              <SwiperSlide key={Show.id}>
                <View key={Show.id} type={2} id={Show.id} Show={Show} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;