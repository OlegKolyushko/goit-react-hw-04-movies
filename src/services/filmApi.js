import axios from 'axios';

const API_KEY = '3def45d5b9cd22d82787931fa90534aa';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchPopularFilm = () => {
    return axios
    .get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

const fetchFilmDetails = (id) => {
    return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data)
};

const fetchCast = (id) => {
    return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => response.data.cast)
};

const fetchReviews = (id) => {
    return axios
    .get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.data.results)

}

const fetchQuery = (query) => {
    return axios
    .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(response => response.data.results)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {fetchPopularFilm, fetchFilmDetails, fetchCast, fetchReviews, fetchQuery };
