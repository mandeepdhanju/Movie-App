import { NavLink } from "react-router-dom"
import React from 'react';
import '../styles/nav.css';

const Nav = () => { 
    
    function blur(e){
        e.target.blur();
    }
    
    return (
 
    <ul className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>             
    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">    
    <nav className="main-sort" onClick={blur}></nav>      
        <nav>
            <ul>
            <li>< NavLink className="dropdown-item" to="/sort/popular">Popular</NavLink></li>
            <li><NavLink to="/sort/now-playing">Now Playing</NavLink></li>
            <li><NavLink to="/sort/upcoming">Upcoming</NavLink></li>
            <li><NavLink to="/sort/top-rated">Top Rated</NavLink></li>
            </ul>
        </nav>                
    </div>      
    </ul>
 
);  
};


export default Nav;


