import React from "react";
import { podcasts as podcastsData } from "./data";
export default function GetFreePodcast() {
    function getFreePodcast(podcastsData) {
        const freePodcast = podcastsData.filter(podcast =>{ 
            if(podcast.paid === false){
                return [{
                    title: podcast.title,
                    duration: podcast.duration,
                    genre: podcast.genre,
                    rating: podcast.rating,
                    tags: podcast.tags,
                    paid: podcast.paid
                },];
            }
    });
        return <pre>{JSON.stringify(freePodcast, null, 2)}</pre>
    }

    const [result , setResult] = React.useState("");
    
    return(
        <div className="get-free-podcast-game">
            <p>Here is the podcasts data:</p>
            <pre>{JSON.stringify(podcastsData, null, 2)}</pre>
            <button onClick={() => setResult(getFreePodcast(podcastsData))}>
                Get Free Podcasts
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}