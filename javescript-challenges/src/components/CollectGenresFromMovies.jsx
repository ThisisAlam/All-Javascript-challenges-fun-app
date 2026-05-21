import React from "react";
import {moviesList as moviesListData} from "./data";
export default function CollectGenresFromMovies() {
    function sortGenres(moviesListData) {
        const generesArray = []
        moviesListData.forEach(movie => {
            movie.tags.forEach(tag =>{
                if(!generesArray.includes(tag)) {
                    generesArray.push(tag);
                }
            })
        })
        return <>
            <p>These are the genres collected from movies:</p>
            <ul>{generesArray.map((genre, index) => 
            <li key={index}>{genre}</li>)}</ul>;
        </>
    }

    const [result, setResult] = React.useState([]);
    
    return(
        <div className="collect-genres-from-movies-game">
            <p>Here is the movies data:</p>
            <pre>{JSON.stringify(moviesListData, null, 2)}</pre>
            <button onClick={() => 
                setResult(sortGenres(moviesListData))}>
                Collect Genres from Movies
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}