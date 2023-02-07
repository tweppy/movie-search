import { useState, useEffect } from 'react';
import './App.css';
import DisplayMovies from './components/DisplayMovies';
import SearchMovies from './components/SearchMovies';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovies = async (searchValue) => {
		const url = `http://www.omdbapi.com/?apikey=37fe945a&s=${searchValue}`;

		const response = await fetch(url);
		const data = await response.json();

		if (data.Search && data.Search.length == 10) {
			setMovies(data.Search);
		}
	}

	useEffect(() => {
		getMovies(searchValue);
	}, [searchValue]);

    return (
        <div className="App">

            <SearchMovies searchValue={searchValue} 
            setSearchValue={setSearchValue} />
            <DisplayMovies movies={movies} />

        </div>
    )
}

export default App;