const API_KEY = "f19e7a7b82afad4eb5b2ac5b5c6c6076"

const requests = {
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals :`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies :`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaryMovies :`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAdultMovies :`/discover/movie?api_key=${API_KEY}&include_adult=true&with_genres=10749`
}
export default requests
