import React from "react";
export default function WishperFunction() {
    function whisperFunction(string) {
        if (string.endsWith("!")) {
            return <p>shh...🤫🤫🤫 {string.slice(0, -1).toLowerCase()}</p>;
        }else{
            return <p>shh...🤫🤫🤫 {string.toLowerCase()}</p>;
        }
    }
    const [whisperValue, setWhisperValue] = React.useState("");
    const [whisperResult, setWhisperResult] = React.useState("");
    return (
        <div className="whisper-game">
            <p>Enter a string to whisper it:</p>
            <input type="text" 
                id="whisper-id"
                value={whisperValue} 
                onChange={(e) => setWhisperValue(e.target.value)} />
            <button 
                onClick={() => setWhisperResult(whisperFunction(whisperValue))}
                >Whisper</button>
            <div style={{marginTop:"20px"}}>
                {whisperResult}
            </div>
        </div>
    )
}