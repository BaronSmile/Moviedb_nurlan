import React, {Component} from 'react';

import './app.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';

import SearchInput from '../search-input/search-input';
import MovieApi from '../../service/movie-api';
import MovieList from '../movie-list/movie-list';

const {Content} = Layout;
const movieApi = new MovieApi();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: 'return'
    };
  }

  componentDidMount() {
    const {searchTerm} = this.state;
    movieApi.searchMovie(searchTerm).then(movies=>{
      this.setMovie([...movies])
    })
  }

  setMovie = movies => {
    this.setState({movies})
  }

  render() {
    const {movies} = this.state;
    return (

        <Layout className="container">
          <SearchInput/>
          <Content className="site-layout">
            <MovieList movies={movies}/>
          </Content>
        </Layout>
    );
  }
}
