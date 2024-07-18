import axios from 'axios'

const MOVIES_REST_API_URL = 'http://localhost:8091/movie';

class MovieService {
    getMovies(){
        return axios.get(MOVIES_REST_API_URL);
    }
}

export default new MovieService();