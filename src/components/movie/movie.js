import React, {Component} from 'react';

import MovieApi from '../../service/movie-api';

import {Card, Space, Tag, Typography} from "antd";
import './movie.css';

const {Title, Text} = Typography;

export default class Movie extends Component {

  movieApi = new MovieApi();

  state = {
    posterPath: '',
    title: null,
    releaseDate: null,
    overview: null,
  }

  posterUrl = this.movieApi.apiPostersUrlBase;

  constructor(props) {
    super(props);
    this.updatePlanet();
  }

  updatePlanet() {
    this.movieApi.searchMovie('Matrix')
        .then(movie => {
          this.setState({
            posterPath: movie[0].backdrop_path,
            title: movie[0].title,
            releaseDate: movie[0].release_date,
            overview: movie[0].overview,
          })
        })
  }

  render() {

    const {title, overview, releaseDate, posterPath} = this.state;
    const img = `${(this.posterUrl)}${posterPath}`

    return (
        <>
          <Card
              hoverable
              style={{width: '45%', display: 'flex', margin: '24px'}}
              cover={
                <img
                    alt="example"
                    src={img}
                />
              }
          >
            <Space direction="vertical">
              <Title level={3}>{title}</Title>
              <Text type='secondary'>{releaseDate}</Text>
              <div>
                <Tag>
                  Action
                </Tag>
              </div>
              <Text>
                {overview}
              </Text>
            </Space>
          </Card>
        </>
    )
  }
}


