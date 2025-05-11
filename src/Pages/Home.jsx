import React from 'react';
import { useState, useEffect } from 'react';
import View from '../Components/View';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Spinner } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]); 
  const [topSeries, setTopSeries] = useState([]); 
  const [movies, setMovies] = useState([]); 
  // const [featuredContent, setFeaturedContent] = useState(null);
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
    //====================================================================================
    // Fetch popular movies
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          setTopMovies(data.results);
        }
      })
      .catch(err => {
          console.error(err);
          setError(err);
      });
    //==================================================================================== 
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
    //====================================================================================
    // Fetch 
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
    <div className='w-screen bg-black'>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='mb-4 text-center'>Loading...</div>
        <Spinner className="w-16 h-16 text-blue-gray-100/50" />
      </div>
    </div>
  );
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

  // if (error) return <div>Error loading data</div>;

  return (
    <div className="min-h-screen pb-10 text-white bg-black bg-gradient-to-b">
      {/* Hero Section with Watch Now Button */}
      <div className="relative h-screen flex items-center justify-center">
           {/* Background image with gradient overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/home.jpg')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                 <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                      Unlimited Movies, TV Shows and More
                 </h1>
                 <Link to='/SignUp' 
                 className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                      Watch Now
                 </Link>
            </div>
      </div>
      {/*=========================================================================*/}
      {/* Top Movies Section */}
      <div className="mt-10">
        <h1 className='my-5 text-4xl text-center'>TOP Movies</h1>
        <div className="relative px-4 py-4 sm:px-6 md:px-8 lg:px-12">
            <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1} 
            navigation
            loop
            breakpoints={{
              // 1 slide on mobile (default)
              640: { slidesPerView: 2, spaceBetween: 25 }, // 2 slides on sm
              768: { slidesPerView: 3, spaceBetween: 25 }, // 3 slides on md
              1024: { slidesPerView: 4, spaceBetween: 70 }, // 4 slides on lg
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
      {/*=========================================================================*/}
      {/* Top Series Section */}
      <div className="mt-10">
        <h1 className='my-5 text-4xl text-center'>TOP Series</h1>
        <div className="relative px-4 py-4 sm:px-6 md:px-8 lg:px-12">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1} 
            navigation
            loop
            breakpoints={{
              // 1 slide on mobile (default)
              640: { slidesPerView: 2, spaceBetween: 25 }, // 2 slides on sm
              768: { slidesPerView: 3, spaceBetween: 25 }, // 3 slides on md
              1024: { slidesPerView: 4, spaceBetween: 70 }, // 4 slides on lg
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
      {/*=========================================================================*/}
      <div>  
            <h1 className='my-5 mt-4 text-4xl text-center'>Recommendations</h1>
            <div className="flex flex-wrap justify-evenly">
                {movies.map((Show) => (
                    <View key={Show.id} type={1} id={Show.id} Show={Show} />
                ))}
            </div>
        </div>
      {/*=========================================================================*/}  
    </div>
  );
}

export default Home;