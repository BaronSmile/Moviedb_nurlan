import React from 'react';
import PropTypes from 'prop-types'

import {Card, Space, Tag, Typography} from 'antd';
import './movie.css';
import MovieApi from '../../service/movie-api';

const movieApi = new MovieApi();
const {Title, Text} = Typography;

const Movie = ({image, title, releaseDate, overview}) => {
  const posterUrl = movieApi.apiPostersUrlBase;
  const imgUrl = `${posterUrl}${image}`;

  // функция для сокрашения слов в описании
  const formatPost = (str = '', length) => {
    if (str.length <= length) return str
    const newLength = str.lastIndexOf(' ', length)
    return `${str.slice(0, newLength)} ...`
  }
  const description = formatPost(overview, 200)

  return (
      <>
        <Card
            hoverable
            style={{width: '45%', height: '280px', display: 'flex', margin: '24px'}}
            cover={
              image === null ? (
                  <img
                      alt="example"
                      src="https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
                  />
              ) : (
                  <img alt="example" src={imgUrl}/>
              )
            }
        >
          <Space direction="vertical">
            <Title level={3}>{title}</Title>
            <Text type="secondary">{releaseDate}</Text>
            <div>
              <Tag>Action</Tag>
            </div>
            <Text>{description}</Text>
          </Space>
        </Card>
      </>
  );
};

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Movie;
