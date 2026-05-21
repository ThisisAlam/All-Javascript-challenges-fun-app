import React from "react";
import { flightPodcasts as flightPodcastsData } from "./data";
export default function SortFlightPodcasts() {
    function sortPodcasts(flightPodcastsData, flightTime) {
        
        const sortedPodcastsInAccendingOrder = flightPodcastsData
            .filter(podcast => podcast.duration < flightTime)
            .sort((a, b) => a.duration - b.duration);
        const assendingOrder = sortedPodcastsInAccendingOrder.map(podcast => {
            return { 
                title: podcast.title, 
                duration: podcast.duration
            };
        });
        return <pre>{JSON.stringify(assendingOrder, null, 2)}</pre>;
    }
    
    const [result, setResult] = React.useState([]);
    return(
        <div className="sort-flight-podcasts-game">
            <p>Here is the flight podcasts data:</p>
            <pre>{JSON.stringify(flightPodcastsData, null, 2)}</pre>
            <button onClick={() => 
                setResult(sortPodcasts(flightPodcastsData, 60))}>
                Sort Flight Podcasts by Duration (less than 60 minutes)
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}