import React from "react";

export default function RecoverPassword() {
    
    function removeDuplicatesFromPassword(string) {
        let result = "";
        let finalPassword = "";
        for(let i = 0; i < string.length; i++) {
            if(!result.includes(string[i])){
                result += string[i];
            } else {
                result += "*";
            }
        }   
        finalPassword = result.replaceAll("*", "");
        return <p>{result}<br />{finalPassword}</p>;
    }

    const [value, setValue] = React.useState("");
    const [result, setResult] = React.useState("");
    return(
        <div className="recover-password-game">
            
            <p>Enter a password to recover it:</p>

            <input type="text"
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
            
            <button onClick={() => 
                setResult(removeDuplicatesFromPassword(value))}
            >Recover
            </button>
            
            <div style={{marginTop:"20px"}}>
                {result}
            </div>

        </div>
    )
}