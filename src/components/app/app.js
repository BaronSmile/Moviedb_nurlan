import React, {Component} from 'react';

import './app.css';
import 'antd/dist/antd.css';
import {Layout, Pagination, Row} from 'antd';

import SearchInput from '../search-input/search-input';
import MovieApi from '../../service/movie-api';
import MovieList from '../movie-list/movie-list';

const {Content} = Layout;


export default class App extends Component {

  state = {
    totalPages: null,
    page: 1,
    movies: [],
    searchTerm: 'return',
    loading: true,
    error: false,
    mode:'search',
  };

  movieApi = new MovieApi();

  componentDidMount() {
    const {searchTerm, page} = this.state
    this.updateMoviesList(searchTerm, page)
  }

  componentDidUpdate(prevProps, prevState) {
    const {searchTerm, page, mode} = this.state;
    if (mode === 'search') {
      if ((prevState.searchTerm === searchTerm)
          && (prevState.page === page)
          && (prevState.mode === mode)) return
      this.updateMoviesList(searchTerm, page)
    }
  }

  // eslint-disable-next-line react/sort-comp
  changePage = (page) => {
    this.setState({
      page,
    })
  }

  updateSearchStr = (searchTerm) => {
    if (searchTerm === '') return
    this.setState({
      searchTerm,
      page: 1,
    })
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  // eslint-disable-next-line react/sort-comp
  updateMoviesList(str, page) {
    this.setState({
      loading: true,
    })

    this.movieApi.searchMovie(str, page)
        .then(res => {
          this.setState({
            movies: res.results,
            totalPages: res.total_pages,
            page,
            loading: false,
            error: false
          })
        })
        .catch(() => this.onError())
  }

  handleInputChange = (({target: {value}}) => {
    console.log(value)
    this.setState({
      searchTerm: value
    })
  })


  getSearch = ({key}) => {
    if (key === 'Enter') {
      const {searchTerm} = this.state;
      this.movieApi.searchMovie(searchTerm)
          .then(movies => {
            this.setMovie([...movies.results], movies.total_results)
          })
    }
  }

  setMovie = (movies) => {
    this.setState({
      movies,
      loading: false
    })
  };

  render() {

    const {movies, loading, error, searchTerm, page, totalPages}= this.state;
    const hasData = !(loading || error)

    const pagination = hasData ?
        <Pagination
            current={page}
            defaultPageSize={1}
            showSizeChanger={false}
            hideOnSinglePage
            onChange={(value) => this.changePage(value)}
            total={totalPages}
        /> : null

    return (
        <Layout className="container">
          <SearchInput onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchTerm}/>
          <Content className="site-layout">
            <MovieList
                movies={movies}
                loading={loading}
                error={error}
            />
            <Row className='pagination' justify="center">
              {pagination}
            </Row>
          </Content>
        </Layout>
    );
  }
}
