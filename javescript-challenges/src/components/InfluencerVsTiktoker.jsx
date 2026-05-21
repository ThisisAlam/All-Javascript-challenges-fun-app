import React from "react";
import { influencerPosts as influencerData, tiktokPosts as tiktokData } from "./data";

export default function InfluencerVsTiktoker() {
    function compareEngagement(influencerData, tiktokData) {
        const influencerEngagement = influencerData.reduce((acc, obj)=>{
            return acc += obj.likes;
         }, 0);
        const tiktokEngagement = tiktokData.reduce((acc, obj)=>{
            return acc += obj.likes;
         }, 0);

        if ( influencerEngagement > tiktokEngagement) {
            return <>
                <p>The influencer has more engagement than the TikToker.</p>
                <ul>
                    <li>The influencer's total likes: {influencerEngagement}</li>
                    <li>The TikToker's total likes: {tiktokEngagement}</li>
                </ul>
            </>
        } else if (tiktokEngagement > influencerEngagement) {
            return <>
                <p>The TikToker has more engagement than the influencer.</p>
                <ul>
                    <li>The TikToker's total likes: {tiktokEngagement}</li>
                    <li>The influencer's total likes: {influencerEngagement}</li>
                </ul>
            </>;
        } else {
            return <>
                <p>The influencer and the TikToker have the same engagement.</p>
                <ul>
                    <li>The influencer's total likes: {influencerEngagement}</li>
                    <li>The TikToker's total likes: {tiktokEngagement}</li>
                </ul>
            </>;
        }
    }
    const [result, setResult] = React.useState([]);
    return(
        <div className="influencer-vs-tiktoker-game">
            <p>Here is the influencer and TikToker data:</p>
            <pre>{JSON.stringify(influencerData, null, 2)}</pre>
            <p>Here is the TikToker data:</p>
            <pre>{JSON.stringify(tiktokData, null, 2)}</pre>
            <button onClick={() => 
                setResult(compareEngagement(influencerData, tiktokData))}>
                Compare Engagement
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}