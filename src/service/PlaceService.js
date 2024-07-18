import axios from 'axios'

const MOVIES_REST_API_URL = 'http://localhost:8091/place';

class PlaceService {
    getPlaces(){
        return axios.get(MOVIES_REST_API_URL);
    }
    getHallPlace(hallId){
        return axios.get(MOVIES_REST_API_URL+"/"+hallId);
    }
}

export default new PlaceService();