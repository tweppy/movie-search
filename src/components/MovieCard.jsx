import './MovieCard.css';
import noimg from '../assets/no-img.png'

const MovieCard = (props) => {
    const { title, year, poster, id } = props; 

    return (
      <article className="movie-card">
        <a href={`https://www.imdb.com/title/${id}/`} target="_blank">
          <img className="movie-card__poster" 
          src={ poster } 
          onError={ (event) => {event.target.onError = null; event.target.src = noimg; event.target.className = 'no-poster'} }
          title={title.length > 40 ? title : ''}
          alt="poster" />
        </a>

        <h4 className="movie-card__year">{ year }</h4>

        <h2 className="movie-card__title">
          { title.length > 40 ? `${title.substring(0, 40)}...` : title }
        </h2>
      </article>
    );
  }
  
export default MovieCard;