import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieServices } from "../../services/movieServices";
import { useState } from "react";
import Loader from "../Loader/Loader";

export const MovieInfo = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(
    () => {
      getMovieById(id);
    }, // eslint-disable-next-line
    []
  );

  const getMovieById = (id) => {
    setIsLoading(true);
    movieServices.getMovieById(id).then((res) => {
      setMovie(res);
      console.log(res);
      setIsLoading(false);
    });
  };

  return (
    <div>
      {isLoading ? (
        <div className="loaderZone">
          <Loader />
        </div>
      ) : (
        <div className="filmInfoCont">
          <div className="textCont">
            <h1>{movie.title}</h1>
            <h2>Sinopsis</h2>
            <p>{movie.sinopsis}</p>
          </div>

          <div className="imageCont">
            <img src={movie.imgUrl} alt="filmfoto" />
          </div>
        </div>
      )}
    </div>
  );
};
