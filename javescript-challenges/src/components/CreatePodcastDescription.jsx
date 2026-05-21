import React from "react";
import { flightPodcasts as PodcastsData } from "./data";
export default function CreatePodcastDescription() {
    function createPodcastDescription(PodcastsData) {
        const AllPodcastsDescriptions = PodcastsData.map(podcast => {
            return {
                title: podcast.title,
                description: `The podcast "${podcast.title}" is hosted by ${podcast.hosts.join(", ")} and has a duration of ${podcast.duration} minutes.`
            };
        });
        return AllPodcastsDescriptions;
    }
    const [result, setResult] = React.useState();
    return(
        <div className="create-podcast-description-game">
            <p>Here is the podcasts data:</p>
            <pre>{JSON.stringify(PodcastsData, null, 2)}</pre>
            <button onClick={() => 
                setResult(createPodcastDescription(PodcastsData))}>
                Create Podcast Descriptions
            </button>
            <div style={{marginTop:"20px"}}>
                <pre>{JSON.stringify(result, null, 2)}</pre>
            </div>
        </div>
    )
}