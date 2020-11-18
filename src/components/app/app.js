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
      searchTerm: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {searchTerm} = this.state
    movieApi.searchMovie(searchTerm).then((data) => {
      this.setState({movies: [...data]});
    });
  };

  startPage = () => {
    // eslint-disable-next-line no-unused-vars
    const {movies} = this.state
    movieApi.startMoviePage().then(data => {
      this.setState({movies: [...data]})
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    const {movies} = this.state;
    return (

        <Layout className="container">
          <SearchInput handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <Content className="site-layout">
            <MovieList movies={movies}/>
          </Content>
        </Layout>
    );
  }
}
