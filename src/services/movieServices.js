import axios from "axios";
const baseURL = "https://62863528f0e8f0bb7c1250fb.mockapi.io";

export const movieServices = {
    getAllMovies(){
        const movies = axios
            .get(baseURL + "/movies")
            .then((res) => res.data );
        return movies;
    },

    deleteMovie(id){
        const movies = axios
            .delete (baseURL + "/movies/" + id)
            .then ((res) => res.data);
        return movies;
    },

    addMovie(data){
        const movies = axios
            .post (baseURL + "/movies", data)
            .then ((res) => res.data);
        return movies

    },

    updateMovie(id, newMovie) {
        const movies = axios 
            .put (baseURL + "/movies/"+ id, newMovie)
            .then ((res)=> res.data);
        return movies
    }
}