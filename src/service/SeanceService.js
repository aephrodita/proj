import axios from 'axios'

const SEANCE_REST_API_URL = 'http://localhost:8091/seance';

class SeanceService {
    getSeances(){
        return axios.get(SEANCE_REST_API_URL);
    }
    getSeance(seanceId){
        return axios.get(SEANCE_REST_API_URL+"/"+seanceId);
    }
    getSeanceByMovieId(movieId){
        return axios.get(SEANCE_REST_API_URL+"/movie/"+movieId);
    }
}

export default new SeanceService();