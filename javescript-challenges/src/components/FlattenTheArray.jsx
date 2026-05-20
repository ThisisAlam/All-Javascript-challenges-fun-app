import React from "react";

export default function FlattenTheArray() {
    const kittyScores = [
        [39, 99, 76], 89, 98, [87, 56, 90], 
        [96, 95], 40, 78, 50, [63]
    ];

    const kittyPrizes = [
        ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
        ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
    ];

    function flattenArray(array) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                result = result.concat(flattenArray(array[i]));
            } else {
                result.push(array[i]);
            }
        }
        return result;
    }
    const [flattenedScores, setFlattenedScores] = React.useState([]);
    const [flattenedPrizes, setFlattenedPrizes] = React.useState([]);

    return(
        <div className="flatten-the-array-game">
            
            <p> This is the kitty scores nested array:</p>
            <ul>
                {kittyScores.map((score, index) => (
                    <li key={index}>{Array.isArray(score) ? `[${score.join(", ")}]` : score}</li>
                ))}
            </ul>
            <button onClick={() => setFlattenedScores(flattenArray(kittyScores))}>
                Flatten kitty scores Array
            </button>
            <div style={{margin: "10px 0"}}>
                    {flattenedScores.join(", ")}
            </div>
            
            <p>This is the kitty prizes nested array:</p>
            <ul>
                {kittyPrizes.map((prize, index) => (
                    <li key={index}>{Array.isArray(prize) ? `[${prize.join(", ")}]` : prize}</li>
                ))}
            </ul>
            <button onClick={() => setFlattenedPrizes(flattenArray(kittyPrizes))}>
                Flatten kitty prizes Array
            </button>
            <div style={{margin: "10px 0"}}>
                    {flattenedPrizes.join(", ")}
            </div>
        
        </div>
    )

}