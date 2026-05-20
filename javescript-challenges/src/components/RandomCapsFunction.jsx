import React from 'react';
export default function RandomCapsFunction() {
    
    function randomCapsFunction(string) {
        
        const capString = string.split('')
            .map(char => 
                Math.random() < 0.5 
                ? char.toLowerCase() 
                : char.toUpperCase()
            ).join('');

        return <p>{capString}</p>;
    }
    
    const [randomCapsValue, setRandomCapsValue] = React.useState("");
    
    const [randomCapsResult, setRandomCapsResult] = React.useState("");
    
    return(
        <div className="random-caps-game">
            <p>Enter a string to randomize its capitalization:</p>
            <input type="text" 
                id="random-caps-id"
                value={randomCapsValue} 
                onChange={(e) => setRandomCapsValue(e.target.value)} />
            <button 
                onClick={() => {
                    setRandomCapsResult(randomCapsFunction(randomCapsValue));
                }}
            >
                Randomize Caps
            </button>
            <div style={{marginTop:"20px"}}>
                {randomCapsResult}
            </div>
        </div>
    )
}
            
 