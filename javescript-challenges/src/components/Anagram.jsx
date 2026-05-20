import React from "react";

export default function Anagram() {
    
    function anagramFunction(string1, string2) {
        const sameLength = string1.length === string2.length;
        const sortedString1 = string1.toLowerCase().split("").sort().join("");
        const sortedString2 = string2.toLowerCase().split("").sort().join("");
        const sameLetters = sortedString1 === sortedString2;
        return <p>{sameLength && sameLetters ? "These words are anagrams!" : "These words are not anagrams."}</p>;
    }

    const [string1, setString1] = React.useState("");
    const [string2, setString2] = React.useState("");
    const [result, setResult] = React.useState("");

    return(
        <div className="anagram-game">
            <p>Enter two strings to check if they are anagrams:</p>
            <input 
                type="text" 
                placeholder="First string" 
                value={string1} 
                onChange={(e) => setString1(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Second string" 
                value={string2} 
                onChange={(e) => setString2(e.target.value)} 
            />
            <button onClick={() => setResult(anagramFunction(string1, string2))}>Check</button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>  
    )
}