import React from "react";
import { shoppingCart as shoppingCartData } from "./data";
export default function SortProductsData() {
    function sortProductsData(shoppingCartData) {
        const sortedData = [...shoppingCartData].sort((a, b) => a.price - b.price);
        return <pre>{JSON.stringify(sortedData, null, 2)}</pre>;
    }
    const [result, setResult] = React.useState([]);
    return(
        <div className="sort-products-data-game">
            <p>Here is the shopping cart data:</p>
            <pre>{JSON.stringify(shoppingCartData, null, 2)}</pre>
            <button onClick={() => 
                setResult(sortProductsData(shoppingCartData))}>
                Sort Products by Price
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}