import axios from 'axios'

const MOVIES_REST_API_URL = 'http://localhost:8091/hall';

class HallService {
    getHalls(){
        return axios.get(MOVIES_REST_API_URL);
    }
    getHall(hallId){
        return axios.get(MOVIES_REST_API_URL+"/"+hallId);
    }
}

export default new HallService();