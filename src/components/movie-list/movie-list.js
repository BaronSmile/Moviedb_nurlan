import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './movie-list.css';
import {Row, Spin, Alert} from 'antd';
import Movie from '../movie/movie';


// eslint-disable-next-line react/prefer-stateless-function
export default class MovieList extends Component {

  static propTypes = {
    movies: PropTypes.instanceOf(Array).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  }

  render() {
    const {movies, error, loading} = this.props

    const hasData = !(loading || error);

    if (loading) {
      return (
          <div className="example">
            <Spin size="large"/>
          </div>
      )
    }
    const errorMessage = error ? <Alert message="Informational Notes" type="info" showIcon/> : null;


    const moviesList =
        movies.map(({id, poster_path: posterPath, title, release_date: releaseDate, overview, vote_average: voteAverage}) => {
          return (
              <Movie
                  key={id}
                  image={posterPath}
                  title={title}
                  releaseDate={releaseDate}
                  overview={overview}
                  rateNumber={voteAverage}
              />
          );
        })
    return (
        <div className="site-card-wrapper">
          <Row>
            {errorMessage}
            {hasData ? moviesList : null}
          </Row>
        </div>
    );
  }
};