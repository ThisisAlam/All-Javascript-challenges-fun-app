import React from "react";
import { flightPodcasts as PodcastsData } from "./data";
export default function PodcastsAwards() {
    const awards = ["🏆", "⭐", "💎", "🥇", "👑"];
    function podcastsAwards(PodcastsData) {
        const AwardsGuests  = PodcastsData.reduce((acc,obj)=>{
            return acc.concat(obj.hosts);
        },[])
        const uniqueGuests = [...new Set(AwardsGuests)];
        return <>
        <p>The unique guests who have won awards are:</p> 
        <ul>{uniqueGuests.map((guest, index) => 
            <li key={index}>{guest}</li>)}
        </ul>
        <p>Awards won by these guests:</p>
        <ul>
            {uniqueGuests.map((guest, index) => {
                const randomAward = awards[Math.floor(Math.random() * awards.length)];
                return (
                    <li key={index}>{randomAward} {guest}</li>
                );
            })}
        </ul>
    </>
    }
    const [result, setResult] = React.useState([]);
    return(
        <div className="podcasts-awards-game">
            <p>Here is the podcasts data:</p>
            <pre>{JSON.stringify(PodcastsData, null, 2)}</pre>
            <button onClick={() => 
                setResult(podcastsAwards(PodcastsData))}>
                Get Unique Guests who won awards
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}