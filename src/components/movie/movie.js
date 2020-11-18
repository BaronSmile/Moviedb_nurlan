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

  return (
      <>
        <Card
            hoverable
            style={{width: '45%', display: 'flex', margin: '24px'}}
            cover={
              image == null ? (
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
            <Text>{overview}</Text>
          </Space>
        </Card>
      </>
  );
};

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired
};

export default Movie;
