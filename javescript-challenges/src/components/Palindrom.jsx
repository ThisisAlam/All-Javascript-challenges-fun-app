import React from "react";

export default function Palindrom() {
    function palindromFunction(string) {
        const reversedString = string.split("").reverse().join("");
        return <p>{string.toLowerCase() === reversedString.toLowerCase() 
            ? "This string is a palindrome!" 
            : "This string is not a palindrome."
        }</p>;
    }
    const [value, setValue] = React.useState("");
    const [result, setResult] = React.useState("");
    return(
        <div className="palindrom-game">
            <p>Enter a string to check if it's a palindrome:</p>
            <input type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
            <button onClick={() => 
                setResult(palindromFunction(value))}
                >Check</button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}