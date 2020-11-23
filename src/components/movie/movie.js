import React, {Component} from 'react';
import PropTypes from 'prop-types'

import {Card, Space, Tag, Typography,Rate} from 'antd';
import './movie.css';
import MovieApi from '../../service/movie-api';
import formatPost from "./format-description";

const {Title, Text} = Typography;

class Movie extends Component {
  movieApi = new MovieApi();

  render() {
    const {image, title, releaseDate, overview,rateNumber} = this.props
    const posterUrl = this.movieApi.apiPostersUrlBase;
    const imgUrl = `${posterUrl}${image}`;

    const description = formatPost(overview, 200)

    return (
        <>
          <Card
              hoverable
              cover={image === null ?
                  (<img alt="example" src="picture.svg"/>)
                  : (<img alt="example" src={imgUrl}/>)
              }>
            <Space direction="vertical">
              <Title level={3}>{title}</Title>
              <span className='rate-number'>{rateNumber}</span>
              <Text type="secondary">{releaseDate}</Text>
              <div>
                <Tag>Action</Tag>
              </div>
              <Text>{description}</Text>
              <Rate count={10}/>
            </Space>
          </Card>
        </>
    )
  };
}

Movie.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  rateNumber:PropTypes.number.isRequired
};

Movie.defaultProps = {
  image: null
}

export default Movie;
