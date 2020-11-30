import React, {Component} from 'react';
import PropTypes from 'prop-types'

import {Card, Space, Tag, Typography, Rate} from 'antd';
import './movie.css';
import MovieApi from '../../service/movie-api';
import formatPost from "./format-description";
import {Consumer} from '../../service/movie-api_context';

const {Title, Text} = Typography;

export default class Movie extends Component {

  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    rateNumber: PropTypes.number.isRequired,
    genreID: PropTypes.instanceOf(Array).isRequired,
    id: PropTypes.number.isRequired,
  };

  static defaultProps = {
    image: null
  }

  movieApi = new MovieApi();

  render() {
    const {image, title, releaseDate, overview, genreID, rateNumber, id} = this.props
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
              <Consumer>
                {
                  (genres) => {
                    console.log('genre:', genres)
                    const list = genreID && genreID.map((arr) => {
                      const genre = genres && genres.find(elem => elem.id === arr).name

                      return <Tag key={arr}>{genre}</Tag>
                    })
                    return (<div key={id}>{list}</div>)
                  }
                }
              </Consumer>
              <Text>{description}</Text>
              <Rate count={10}/>
            </Space>
          </Card>
        </>
    )
  };
}
