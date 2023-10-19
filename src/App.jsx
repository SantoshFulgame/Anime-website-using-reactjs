import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import './MovieCard.css'; // Import the CSS file


const API_URL = 'https://api.jikan.moe/v4';

const App = () => {
  const [animeName, setAnimeName] = useState('');
  const [animeData, setAnimeData] = useState([]);

  const searchAnime = async (title) => {
    const response = await fetch(`${API_URL}/anime?q=${title}`);
    const data = await response.json();

    console.log(data);

    setAnimeData(data.data);
    
  };

  useEffect(() => {
    searchAnime('demon slayer');
  }, []);

  

  return (
    <div className="app">
      <h1>MyAnimeList</h1>

      <div className="search">
        <input
          value={animeName}
          onChange={(event) => setAnimeName(event.target.value)}
          placeholder="Search for anime"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchAnime(animeName)}
        />
      </div>

        {animeData.length > 0 ? (
          <div className="container">
          {animeData.map((anime) => (
            <MovieCard anime={anime} key={anime.mal_id} />
          ))}
          </div>
        ) : (
          <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
