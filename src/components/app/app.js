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

    state = {
      movies: [],
      searchTerm: 'return',
      loading: true,
      error: false,
    };


  // eslint-disable-next-line react/sort-comp
  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  componentDidMount() {
    const {searchTerm} = this.state;
    movieApi.searchMovie(searchTerm)
        .then(movies => {
          this.setMovie([...movies])
        })
        .catch(() => this.onError());
  }

  handleInputChange = (({target:{value}})=>{
    this.setState({
      searchTerm: value
    })
})

  getSearch = ({key}) => {
    if(key === 'Enter'){
      const {searchTerm} = this.state;
      movieApi.searchMovie(searchTerm)
          .then(movies => {
            this.setMovie([...movies])
          })
    }
  }

  setMovie = movies => {
    this.setState({
      movies,
      loading: false,
    })
  };

  render() {
    const {movies, loading, error,searchTerm} = this.state;

    return (
        <Layout className="container">
          <SearchInput onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchTerm}/>
          <Content className="site-layout">
            <MovieList
                movies={movies}
                loading={loading}
                error={error}
            />
          </Content>
        </Layout>
    );
  }
}
