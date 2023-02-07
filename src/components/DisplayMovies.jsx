import MovieCard from "./MovieCard";
import './MovieCard.css';

const DisplayMovies = (props) => {
  const {movies} = props;

  const moviesComponents = movies.map((val) => {
    return (
      <MovieCard 
        title={val.Title} 
        year={val.Year} 
        poster={val.Poster} 
        key={val.imdbID}
        id={val.imdbID} 
      />
    )
  });

  return (
    <div className="display-movies">
      { moviesComponents }
    </div>
  );
}
  
export default DisplayMovies;