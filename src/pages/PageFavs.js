import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import { API_KEY } from '../globals/globals';
import { getStorage } from '../utilities/utilities';
import MovieCard from '../components/MovieCard';


function PageFavs() {

    const [favs, setFavs] = useState(getStorage());

    return (
        <section className="favs-page">
            <div className="input=wrapper">
                <input type="text" id="find-movie" name="search" className="search-name" placeholder="Search a movie by title"/>
            </div>
            <br></br>
            <div className="fav-container">
                {favs.length < 1 && <p>You have unsaved changes, Click on "Home" button to save the Movie.</p>}      
                {favs.length > 0 && favs.map(item => <MovieCard key={item.id} movie={item} />)}
            </div>
        </section>
       
    )
}

export default PageFavs
