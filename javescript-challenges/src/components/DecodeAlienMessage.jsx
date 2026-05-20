import React from "react";

export default function DecodeAlienMessage() {

    function decodeMessage(message) {
        return <p>{message.split(" ").map(word => {
            return word.split("").reverse().join("")
        }).join(" ")}</p>;
    }

    const [message, setMessage] = React.useState("");
    const [decodedMessage, setDecodedMessage] = React.useState("");
    
    return(
        <div className="decode-alien-message-game">
            
            <p>Enter an alien message to decode it:</p>

            <input type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
            />
            
            <button onClick={() => 
                setDecodedMessage(decodeMessage(message))}
                >Decode</button>
            
            <div style={{marginTop:"20px"}}>
                {decodedMessage}
            </div>

        </div>

    )
}