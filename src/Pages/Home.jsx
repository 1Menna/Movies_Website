import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import View from '../Components/View';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]); 
  const [topSeries, setTopSeries] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);

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
        if (data.results) setTopMovies(data.results);
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
        if (data.results) setTopSeries(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err);
        setLoading(false);
      });

  }, []);

  const scrollTo = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = direction === 'left' 
      ? -carouselRef.current.clientWidth * 0.75 
      : carouselRef.current.clientWidth * 0.75;

    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollTo('right');
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="relative px-4 py-8 md:py-12 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Series</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => scrollTo('left')}
                className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scrollTo('right')}
                className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div 
            ref={carouselRef}
            className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {topSeries.map((show) => (
              <div 
                key={show.id}
                className="flex-none snap-start group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg w-full sm:w-[280px] md:w-[320px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name || show.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-8 md:py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">TOP SERIES</h2>
          <div className="flex flex-wrap justify-evenly">
            {topSeries.map((show) => (
              <View key={show.id} Show={show} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;