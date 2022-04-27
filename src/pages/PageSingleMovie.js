import { Link } from 'react-router-dom';
import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import { isFav, addItemToStorage, removeItemFromStorage } from '../utilities/utilities';

function PageAbout() {

    const [movieData, setMovieData] = useState(null);
    const [faved, setFaved] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=92eea267e3bfd9dd7b5aeb872e757e70&langu-US`);
            const data = await res.json();
            setFaved(isFav(data))
            setMovieData(data);
        }
        fetchMovies();
    }, [id])

    function addToFave(movie) {
       addItemToStorage(movie);
       setFaved(true);
    }

    function removeFromFave(movie){
        removeItemFromStorage(movie);
        setFaved(false)
    }

    return (
        <section className="singleMovieWrapper">
        { movieData !== null && 
            <>
                <h2>{movieData.title}</h2>
                <div className="movie-poster">
                    { movieData.poster_path === null ?
                        <img src={noPoster} alt="No Poster" /> :
                        <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movieData.title} />
                    }
                </div>

            <div className='movieInfo'>
                <p className='title'>{movieData.title}</p>
                <p className='release_date'>Release Date<br/>{movieData.release_date}</p>
                <p className='overview'>Overview<br/>{movieData.overview}</p>
                <p className='vote_avg'>Rating<br/>{movieData.vote_average * 10}%</p>
            </div>
            {faved ? 
            <button className = "favButton" onClick={() => removeFromFave(movieData)}>Un-favourite</button> :
            <button className = "favButton" onClick={() => addToFave(movieData)}>Favourite</button>
            }          
            </>}

        </section>
    )
}

export default PageAbout
