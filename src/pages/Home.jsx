
import { MovieList } from "../components/MovieList/MovieList";
import { NavBar } from "../components/NavBar/NavBar";
import { TrendingFilms } from "../components/TrendingFilms/TrendingFilms";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <TrendingFilms />
      <MovieList />
    </div>
  );
};
