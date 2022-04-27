import React from 'react'
import { useState } from 'react';

function Filter({createFilter}) {
    const [filter, setFilter] = useState("");
    
    function handleChange(event) {
        setFilter(event.target.value)
        createFilter(event.target.value)
    }

    return (
        <div>
                <select name="filter" onChange={handleChange}>
                <option value="popular">Popular</option>
                <option value="now_playing">Now Playing</option>
                <option value="upcoming">Upcoming</option>
                <option value="top_rated">Top Rated</option>
            </select>
        </div>
    )
}

export default Filter;