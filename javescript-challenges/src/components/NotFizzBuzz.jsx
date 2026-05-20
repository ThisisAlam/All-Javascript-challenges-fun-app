import React from "react";
export default function NotFizzBuzz() {
    function notFizzBuzzFunction(...number) {
        return <ul>{
            number.map(num=>{
                if(num % 3 === 0){
                    return <li>{"Player with id (" + num + ") gets a :"} "Vacation!"</li>;
                }
                else if(num % 5 === 0){
                    return <li>{"Player with id (" + num + ") gets a :"} "$100,000 bonus!"</li>;
                }
                else if(num % 3 === 0 && num % 5 === 0){
                    return <li>{"Player with id (" + num + ") gets a :"} "JACKPOT! 1 Million and a Yacht!"</li>;
                } 
                else{
                    return <li>{"Player with id (" + num + ") gets a :"} "Better luck next time! 🙁"</li>;
                }
            })
        }</ul>
    }
    const [value, setValue] = React.useState("");
    const [result, setResult] = React.useState("");
    
    return(
        <div className="not-fizz-buzz-game">
            <p>Enter player numbers to see their rewards:</p>
            <input type="text" 
                placeholder="Enter player numbers separated by commas"
                value={value}   
                onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => 
                setResult(notFizzBuzzFunction(
                    ...value.split(',').map(num=>parseInt(num.trim()))
                ))}>Check Rewards</button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}