

import { MovieList } from './components/MovieList/MovieList';
import { NavBar } from './components/NavBar/NavBar';
import './components/main.css';
import { TrendingFilms } from './components/TrendingFilms/TrendingFilms';





function App() {
  return (
    <div>
      <NavBar/>
      <TrendingFilms/>
      <MovieList/>
    </div>
  );
}

export default App;
