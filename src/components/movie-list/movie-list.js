import React from 'react';
import PropTypes from 'prop-types'

import './movie-list.css';
import { Row } from 'antd';
import Movie from '../movie/movie';

const MovieList = ({movies}) => {
  const moviesList = movies.map((movie) => {
    return (
        <Movie
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            overview={movie.overview}
        />
    );
  })
  return (
    <div className="site-card-wrapper">
      <Row>
        {moviesList}
      </Row>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired
}

export default MovieList;
