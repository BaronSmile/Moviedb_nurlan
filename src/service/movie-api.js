export default class MovieApi {

  apiBase = `https://api.themoviedb.org/3/`;

  apiKey = `857253860db27ba39ef26a1af9ed0bf3`;

  apiPostersUrlBase = `https://image.tmdb.org/t/p/w500`;


  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch${url}, received ${res.status}`);
    }
    return res.json();
  }

  async searchMovie(keyword, page) {
    return this.getResource(
        `search/movie?api_key=${this.apiKey}&query=${keyword}&language=en-US&page=${page}&include_adult=true`
    );
  }

  async getGenres() {
    return this.getResource(`genre/movie/list?api_key=${this.apiKey}&language=en-US`);
  }
}

