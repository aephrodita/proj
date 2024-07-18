import axios from 'axios'
import AuthService from './AuthService';

const CINEMA_REST_API_URL = 'http://localhost:8091/cinema';

class CinemaService {
    getCinemas(){
        return axios.get(CINEMA_REST_API_URL);
    }
}

export default new CinemaService();