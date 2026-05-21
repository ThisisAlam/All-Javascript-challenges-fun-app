import React from "react";
import { allCandiesArray as candiesData } from "./data";
export default function FilterSweetCandies() {
    function filterSweetCandies(candiesData) {
        const sweetCandies = candiesData.filter(candy => {
            return candy.type === "sweet";
        });
        return <pre>{JSON.stringify(sweetCandies, null, 2)}</pre>;
    }
    const [result, setResult] = React.useState([]);
    return(
        <div className="filter-sweet-candies-game">
            <p>Here is the candies data:</p>
            <pre>{JSON.stringify(candiesData, null, 2)}</pre>
            <button onClick={() => 
                setResult(filterSweetCandies(candiesData))}>
                Filter Sweet Candies
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>

    )
}