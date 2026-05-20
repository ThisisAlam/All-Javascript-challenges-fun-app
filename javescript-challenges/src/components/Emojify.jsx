import React from "react";
import { dataEmoji as data} from "./dataEmoji";
export default function Emojify() {

    function emojifyFunction(string) {
        return <p>{string.split(" ").map(word => {
            
            const cleanWord = word.replaceAll(":", "").toLowerCase();

            if(word.startsWith(":") && word.endsWith(":")){
                return data[cleanWord];
            } else {
                return word;
            }
            
        }).join(" ")}</p>;
    }

    const [value, setValue] = React.useState("");
    const [result, setResult] = React.useState("");

    return(
        <div className="emojify-game">
            
            <p>Enter a string to emojify it:</p>
            
            <input type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
            
            <button 
                onClick={() => setResult(emojifyFunction(value))}
            >Emojify</button>
            
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        
        </div>
    )
}