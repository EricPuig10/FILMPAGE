import { useState } from "react";
import { movieServices } from "../../services/movieServices";
import { useEffect } from "react";

export const TrendingFilms = () => {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = movies.length;

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = () => {
    movieServices.getAllMovies().then((res) => {
      setMovies(res);
    });
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //demanar sergi, no entes
  // if (!Array.isArray(movies) || movies.length <= 0) {
  //   return null;
  // }

  // console.log (current)

  // const changeImg = (e) => {
  //   setImgInit(newImg);
  // };

  return (
    <div>
      <div className="trendingFilms">
        {movies.map((movie, index) => (
          <div key={index} className={index === current ? "slide active" : "slide"}>
            {index === current && (
              <img id="imgTrendingFilm" alt="fotoTrending" src={movie.imgSlider} />
            )}
          </div>
        ))}
        <button className="butLeft" onClick={prevSlide}>
          <i className="fa-solid fa-angle-left fa-2xl"></i>
        </button>
        <button className="butRight" onClick={nextSlide}>
          <i className="fa-solid fa-angle-right fa-2xl   "></i>
        </button>
      </div>
    </div>
  );
};
