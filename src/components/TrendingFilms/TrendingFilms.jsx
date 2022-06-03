import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const TrendingFilms = (props) => {
  const [current, setCurrent] = useState(0);
  const [favList, setFavList] = useState(props.favList);

  const length = favList.length;

  // useEffect(() => {
  //   getAllMovies();
  // }, []);

  useEffect(() => {
    setFavList(props.favList);
  }, [props.favList]);

  useEffect(() => {
    let milisecs = 3500;
    let intervalChange = setInterval(nextSlide, milisecs);
    return () => clearInterval(intervalChange);
    // eslint-disable-next-line
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const changeCurrent = (i) => {
    setCurrent(i);
  };

  return (
    <div>
      {length !== 0 ? (
        <div className="trendingFilms">
          {props.favList.map((movie, index) => (
            <div
              key={index}
              className={index === current ? "slide active" : "slide"}
            >
              {index === current && (
                <Link to={`/movie-info/${movie.id}`}>
                  <img
                    id="imgTrendingFilm"
                    alt="fotoTrending"
                    src={movie.imgSlider}
                  />
                </Link>
              )}
            </div>
          ))}
          <button className="butLeft" onClick={prevSlide}>
            <i className="fa-solid fa-angle-left fa-2xl"></i>
          </button>
          <button className="butRight" onClick={nextSlide}>
            <i className="fa-solid fa-angle-right fa-2xl   "></i>
          </button>
          <div className="dots-container">
            {favList
              ? favList.map((movie, index) => (
                  <button
                    key={index}
                    onClick={() => changeCurrent(index)}
                    className="dot"
                  >
                    <i
                      className={
                        index === current
                          ? "fa-solid fa-circle selected-dot"
                          : "fa-solid fa-circle"
                      }
                    ></i>
                  </button>
                ))
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};
