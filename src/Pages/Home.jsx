import React from 'react';
import { useState, useEffect } from 'react';
import View from '../Components/View'; // Make sure to import your View component
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Spinner } from "@material-tailwind/react";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]); 
  const [topSeries, setTopSeries] = useState([]); 
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
          setTopMovies(data.results);
        }
        setLoading(false);
      })
      .catch(err => {
          console.error(err);
          setError(err);
          setLoading(false);
      });
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
      )
  if (error) return <div>Error loading data</div>;

  return (
    <div>
    {/*========================================================================*/}
    <h1 className='my-5 text-center text-4xl'>TOP Movies</h1>
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 relative">
  <Swiper
    modules={[Navigation]}
    spaceBetween={10}
    slidesPerView={2}
    navigation
    loop
    breakpoints={{
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }}
  >
    {topMovies.map((show) => (
      <SwiperSlide key={show.id}>
        <div className=" aspect-[2/3] w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] xl:max-w-none">
          <img
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face${show.poster_path}`}
            alt={show.name || show.title}
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    {/*========================================================================*/}
    <h1 className='my-5 text-center text-4xl'>TOP Series</h1>
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 relative">
  <Swiper
    modules={[Navigation]}
    spaceBetween={10}
    slidesPerView={2}
    navigation
    loop
    breakpoints={{
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }}
  >
    {topSeries.map((show) => (
      <SwiperSlide key={show.id}>
        <div className="p-1 sm:p-2 aspect-[2/3] w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] xl:max-w-none">
          <img
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face${show.poster_path}`}
            alt={show.name || show.title}
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    {/*========================================================================*/}
    
    {/*========================================================================*/}
    </div>
  );
}

export default Home;