import { Component } from "react";
// import { trendingServices } from "../../services/trendingServices";

export class TrendingFilms extends Component {
  constructor() {
    super();
    this.state = {
        imgInit:
        "https://m.media-amazon.com/images/S/sonata-images-prod/ES_TVOD_GO_Uncharted_EST/b145cb29-434b-4536-8aff-34c54f5f3ed3._UR3000,600_SX1500_FMwebp_.jpeg",
        newImg:
        "https://m.media-amazon.com/images/S/sonata-images-prod/ES_TVOD_NWH_VOD/4a66dffe-214d-4ae7-a90e-acd9ef415004._UR3000,600_SX1500_FMwebp_.jpeg",
      // trendingmovies: []
      
    };
  }

  // componentDidMount(){
  //     this.setState({trendingmovies: trendingServices.getAllMovies()})
  //     }

  changeImg = (e) => {
    this.setState({ imgInit: this.state.newImg });
  };



  render() {
    return (
      <div className="trendingFilms">
        <a>
          <img
            id="imgTrendingFilm"
            alt="fotoTrending"
            src={this.state.imgInit}
          />
        </a>

        <button className="butLeft" onClick={this.changeImg}>
          <i className="fa-solid fa-angle-left fa-2xl"></i>
        </button>
        <button className="butRight" onClick={this.changeImg}>
          <i className="fa-solid fa-angle-right fa-2xl   "></i>
        </button>
      </div>
    );
  }
}
