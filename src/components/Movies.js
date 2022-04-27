import MovieCard from './MovieCard'

function Movies({ moviesData }) {
    return (
        <div className="movies-container">
            {moviesData.map(movieObj => <MovieCard movie={movieObj} key={movieObj.id} />)}
        </div>
    )
}

export default Movies
