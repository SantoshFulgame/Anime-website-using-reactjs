import React from 'react';


const MovieCard = ({ anime: { mal_id, title, title_japanese, type, episodes, images } }) => {
  return (
    <div className="movie-card" key={mal_id}>
      <img
        src={images?.jpg?.image_url ?? 'https://via.placeholder.com/400'}
        alt={title}
      />
      <div className="movie-info">
      <div className="play-button"></div>

         
        <h4><b className='color'>Anime Name :</b>{title}</h4>
        <span><b className='color'>Type :</b>{type}</span>
        <span><b className='color'>Episodes :</b>{episodes}</span>

      </div>
    </div>
  );
};

export default MovieCard;

