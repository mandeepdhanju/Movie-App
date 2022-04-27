import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import { API_KEY } from '../globals/globals';


function PageAbout() {

    return (
        <section className="about-page">
             <div className="input=wrapper">
             <input type="text" id="find-movie" name="search" className="search-name" placeholder="Search a movie by title"/>
            </div>
        </section>
    )
}

export default PageAbout
