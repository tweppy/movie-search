import './SearchMovies.css';

const SearchMovies = (props) => {

    return (
      <div className="search-movies">
        <h1>movie search</h1>
        <input
				className="search-input"
				value={ props.searchValue }
				onChange={ (event) => props.setSearchValue(event.target.value) }
				placeholder="type a movie title..." />
      </div>
    )

  }
  
  export default SearchMovies;