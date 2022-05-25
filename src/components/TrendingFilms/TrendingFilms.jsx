import { useState } from "react";

export const TrendingFilms = () => {
  const [imgInit, setImgInit] = useState(
    "https://m.media-amazon.com/images/S/sonata-images-prod/ES_TVOD_GO_Uncharted_EST/b145cb29-434b-4536-8aff-34c54f5f3ed3._UR3000,600_SX1500_FMwebp_.jpeg"
  );
  const [newImg] = useState(
    "https://m.media-amazon.com/images/S/sonata-images-prod/ES_TVOD_NWH_VOD/4a66dffe-214d-4ae7-a90e-acd9ef415004._UR3000,600_SX1500_FMwebp_.jpeg"
  );

  const changeImg = (e) => {
    setImgInit(newImg);
  };

  return (
    <div className="trendingFilms">
      <a href=".">
        <img id="imgTrendingFilm" alt="fotoTrending" src={imgInit} />
      </a>

      <button className="butLeft" onClick={changeImg}>
        <i className="fa-solid fa-angle-left fa-2xl"></i>
      </button>
      <button className="butRight" onClick={changeImg}>
        <i className="fa-solid fa-angle-right fa-2xl   "></i>
      </button>
    </div>
  );
};
