import React from "react";
import { onSaleCandiesArray as saleCandiesData } from "./data";
export default function CandiesOnSale() {
    function reduceTotalPrice(saleCandiesData) {
        const totalPrice = saleCandiesData.reduce((total, candy) =>{
            
            if(candy.onSale) {
                return total + candy.price;
            } else {
                return total;
            }
        }, 0);
    
        return <p>Total price of candies on sale: ${totalPrice.toFixed(2)}</p>;
    }
    
    const [result, setResult] = React.useState([]);

    return(
        <div className="candies-on-sale-game">
            <p>Here is the candies data:</p>
            <pre>{JSON.stringify(saleCandiesData, null, 2)}</pre>
            <button onClick={() => 
                setResult(reduceTotalPrice(saleCandiesData))}>
                Calculate Total Price of Candies on Sale
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}