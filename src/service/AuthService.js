import axios from 'axios'

export async function login(spe){
    try{
    const response = await axios.post('http://localhost:8080/auth/login',spe);
    localStorage.setItem("user",JSON.stringify(response.data))
    return {success:true,data:"You have registered"};
    }catch(error){
        return {success:false,data:error.response.data}
    }
}

class AuthService {
    authHeaders=()=>{
        const user=JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            return {Authorization:"Bearer "+user.accessToken}
        }else{
            return {}
        }
    }
}


export default new AuthService();