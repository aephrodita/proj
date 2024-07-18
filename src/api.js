import axios from 'axios';

// Функция для получения заголовка авторизации
const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
        return { Authorization: "Bearer " + user.token };
    } else {
        return {};
    }
}

// Функция для входа в систему
export const Login = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:8091/auth/sign-in', 
            {
                username: username,
                password: password
            },
            { headers: authHeader() }
        );

        localStorage.setItem("user", JSON.stringify(response.data));
        return { success: true, data: "Вы вошли в систему..." };

    } catch (error) {
        return { success: false, data: error.response.data };
    }
}

// Функция для регистрации нового пользователя
export const signUp = async (username, email, password) => {
    try {
        const response = await axios.post('http://localhost:8091/auth/sign-up',
            {
                email: email,
                password: password,
                username: username
            },
            { headers: authHeader() }
        );

        return { success: true, data: "тіркелді" };

    } catch (error) {
        return { success: false, data: error.response.data };
    }
}

// Функция для проверки прав администратора
export async function checkAdmin() {
    try {
        const response = await axios.get(`http://localhost:8091/admin`, { headers: authHeader() });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, data: "у вас нету разрешении" };
    }
}

// Функция для получения всех кинотеатров
export const getAllCinema = async () => {
    try {
        const response = await axios.get(`http://localhost:8091/cinema`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения всех фильмов
export const getAllMovie = async () => {
    try {
        const response = await axios.get(`http://localhost:8091/movie`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения всех сеансов
export const getAllSeance = async () => {
    try {
        const response = await axios.get(`http://localhost:8091/seance`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения всех залов
export const getAllHall = async () => {
    try {
        const response = await axios.get(`http://localhost:8091/hall`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения всех пользователей (для администратора)
export const getAllUser = async () => {
    try {
        const response = await axios.get(`http://localhost:8091/admin/user`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения информации о конкретном кинотеатре
export const getOneCinema = async (cinemaId) => {
    try {
        const response = await axios.get(`http://localhost:8091/cinema/${cinemaId}`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения информации о конкретном фильме
export const getOneMovie = async (movieId) => {
    try {
        const response = await axios.get(`http://localhost:8091/movie/${movieId}`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения информации о конкретном сеансе
export const getOneSeance = async (seanceId) => {
    try {
        const response = await axios.get(`http://localhost:8091/seance/${seanceId}`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения информации о конкретном билете
export const getOneTicket = async (ticketId) => {
    try {
        const response = await axios.get(`http://localhost:8091/ticket/${ticketId}`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для покупки билета
export const buyTicket = async (ticketId, userId) => {
    try {
        const response = await axios.put(`http://localhost:8091/ticket/${ticketId}/user/${userId}`, { headers: authHeader() });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для возврата билета
export const returnTicket = async (ticketId) => {
    try {
        const response = await axios.put(`http://localhost:8091/ticket/${ticketId}`, { headers: authHeader() });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения сеансов по ID фильма
export const getSeanceByMovieId = async (movieId) => {
    try {
        const response = await axios.get(`http://localhost:8091/movie/seance/${movieId}`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения билетов по ID сеанса
export const getTicketBySeanceId = async (seanceId) => {
    try {
        const response = await axios.get(`http://localhost:8091/seance/ticket/${seanceId}`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для получения билетов по ID пользователя
export const getTicketByUserId = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8091/user/ticket/${userId}`);
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для добавления нового фильма (для администратора)
export async function addMovie(movie) {
    try {
        const response = await axios.post('http://localhost:8091/admin/movie', movie, { headers: authHeader() });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для добавления нового кинотеатра (для администратора)
export async function addCinema(cinema) {
    try {
        const response = await axios.post('http://localhost:8091/admin/cinema', cinema, { headers: authHeader() });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для добавления нового сеанса (для администратора)
export async function addSeance(seance) {
    try {
        const response = await axios.post('http://localhost:8091/admin/seance', seance, { headers: authHeader() });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для добавления нового зала (для администратора)
export async function addHall(hall) {
    try {
        const response = await axios.post('http://localhost:8091/admin/hall', hall, { headers: authHeader() });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для обновления информации о фильме (для администратора)
export const updateMovie = async (movie) => {
    try {
        const response = await axios.put(`http://localhost:8091/admin/movie/${movie.id}/edit`, movie, { headers: authHeader() });
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для обновления информации о кинотеатре (для администратора)
export const updateCinema = async (cinema) => {
    try {
        const response = await axios.put(`http://localhost:8091/admin/cinema/${cinema.id}/edit`, cinema, { headers: authHeader() });
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для удаления фильма (для администратора)
export const deleteMovie = async (movieId) => {
    try {
        const response = await axios.delete(`http://localhost:8091/admin/movie/${movieId}`, { headers: authHeader() });
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для удаления кинотеатра (для администратора)
export const deleteCinema = async (cinemaId) => {
    try {
        const response = await axios.delete(`http://localhost:8091/admin/cinema/${cinemaId}`, { headers: authHeader() });
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}

// Функция для добавления мест в зал (для администратора)
export const addPlace = async (hallId) => {
    try {
        const response = await axios.post(`http://localhost:8091/admin/placehall/${hallId}`, { headers: authHeader() });
        console.log(response);
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, data: error.response.data.error };
    }
}
