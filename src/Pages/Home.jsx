import React from 'react';
import { useState, useEffect } from 'react';
import View from '../Components/View'; // Make sure to import your View component
import { Carousel } from "@material-tailwind/react";

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
           
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <Carousel className="m-5rounded-xl">
        {topSeries.map((show) => (
           <div key={show.id} className="p-2 aspect-[2/3] w-64 "> 
           <img
             src={`https://media.themoviedb.org/t/p/w440_and_h660_face${show.poster_path}`}
             alt={show.name || show.title}
            className="w-56 h-full object-cover rounded-lg"
           />
          </div>
          
        ))}
      </Carousel>
      
      <div>  
        <h1 className='my-5 text-center text-4xl'>TOP SERIES</h1>
        <div className="flex justify-evenly flex-wrap">
          {topSeries.map((Show) => (
            <View key={Show.id} Show={Show} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;