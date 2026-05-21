import React from "react";
import { allCandiesArray as candiesData } from "./data";
export default function SavoryCandies() {
    function filterSavoryCandiesPrice(candiesData) {
        const savoryCandies = candiesData.reduce((acc, candy) => {
            if(candy.type === "savory") {
                return acc + candy.price;
            } else {
                return acc;
            }
        }, 0);
        return <p>The total price of savory candies is: ${savoryCandies.toFixed(2)}</p>;
    }
    const [result, setResult] = React.useState([]);
    
    
    return(
        <div className="savory-candies-game">
            <p>Here is the candies data:</p>
            <pre>{JSON.stringify(candiesData, null, 2)}</pre>
            <button onClick={() => 
                setResult(filterSavoryCandiesPrice(candiesData))}>
                Filter Savory Candies Price
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}