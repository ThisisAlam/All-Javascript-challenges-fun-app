import React from "react";

export default function FrequencyOfLetters() {
    
    function countFrequencyOfLetters(string) {
        
        const frequency = {};
        
        for (let i = 0; i < string.length; i++) {
            const letter = string[i].toLowerCase();
            
            if (frequency[letter]) {
                frequency[letter]++
            } else {
                frequency[letter] = 1
            }
        }

        return <pre>{JSON.stringify(frequency, null, 2)}</pre>;
        
    }


    const [value, setValue] = React.useState("");
    const [result, setResult] = React.useState("");

    return(
        <div className="frequency-of-letters-game">
            <p>Enter a string to count the frequency of its letters:</p>
            <input type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
            <button onClick={() => setResult(countFrequencyOfLetters(value))}>Count</button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}