import axios from "axios";

export const movieServices = {
    getAllMovies(){
        const movies = axios
            .get("https://62863528f0e8f0bb7c1250fb.mockapi.io/movies")
            .then((res) => res.data );
        return movies;
    }
}