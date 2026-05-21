import React from "react";

export default function CountVoteFromArray() {
    const foodVoteObject = {
        "🍕 pizza": 3, 
        "🌮 tacos": 10, 
        "🥗 salads": 7,
        "🥗 chicken": 15,
        "🍝 pasta": 5
    }
    const [totalVotes, setTotalVotes] = React.useState();
    function countVotesFromArray(object) {
        let winner = "";
        let highest = 0;
        for (let key in object) {
            if (object[key] > highest) {
                highest = object[key];
                winner = key;
            }
        }
        return <p>{winner} has the most votes with {highest} votes.</p>;
    }
    return(
        <div className="count-vote-from-array-game">
            <p>Here is the food vote object:</p>
            <ul>
                {Object.keys(foodVoteObject).map(key => (
                    <li key={key}>{key}: {foodVoteObject[key]}</li>
                ))}
            </ul>
            <button onClick={() => 
                setTotalVotes(countVotesFromArray(foodVoteObject))}>
                Count Votes from the Food Vote Object
            </button>
            <div style={{marginTop:"20px"}}>
                {totalVotes}
            </div>
        </div>
    )
}