export default class MovieApi {

  apiBase = `https://api.themoviedb.org/3/`

  apiKey = `857253860db27ba39ef26a1af9ed0bf3`

  apiPostersUrlBase = `https://image.tmdb.org/t/p/w500`


  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`Could not fetch${url}, received ${res.status}`)
    }
    return res.json()
  }

  async searchMovie(keyword, page) {
    const res = await this.getResource(`search/movie?api_key=${this.apiKey}&query=${keyword}&language=en-US&page=${page}&include_adult=true`)
   return res.results
  }

  async getGenres() {
    return await this.getResource(`genre/movie/list?api_key=${this.apiKey}&language=en-US`)
  }

}

const movieApi = new MovieApi();

movieApi.searchMovie('matrix')
    .then(info => console.log('result:', info))


movieApi.getGenres().then(db => console.log(db.genres))