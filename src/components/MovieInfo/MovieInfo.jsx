import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieServices } from "../../services/movieServices";
import { useState } from "react";



export const MovieInfo = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id);
  }, []);

  const getMovieById = (id) => {
    movieServices.getMovieById(id).then((res) => {
      setMovie(res);
      console.log(res)
    });
  };


  return (
    <div className="filmInfoCont">
      <div className="textCont">
        <h1>{movie.title}</h1>
        <h2>Sinopsis</h2>
        <p>
          {movie.sinopsis}
        </p>
      </div>


      <div className="imageCont">
        <img
          src={movie.imgUrl}
          alt="filmfoto"
        />
      </div>
    </div>
    
  );
};
