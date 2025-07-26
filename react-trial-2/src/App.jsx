import './App.css'
import MovieCard from './components/movieCard';

function App() {
  return (
    <>
      <MovieCard movie={{title: "Movie Component", releaseDate: "2023", description: "This is a movie component", poster: "https://via.placeholder.com/150"}}/>
    </>
  );
}

export default App
