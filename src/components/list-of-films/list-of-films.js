import React from 'react';

import './list-of-films.css';
import Movie from "../movie/movie";
import {Row} from "antd";

const ListOfFilms = () => {
  return (
      <div className="site-card-wrapper">
        <Row>
          <Movie/>
        </Row>
      </div>

  )
}

export default ListOfFilms;