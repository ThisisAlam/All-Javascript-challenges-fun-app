import React from "react";
export default function TitleCaseWord() {
    
    function titleCaseFunction(string) {
        return <p>{string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase()}</p>;
    }
        const [titleCaseValue, setTitleCaseValue] = React.useState("");
        const [titleCaseResult, setTitleCaseResult] = React.useState("");   
    return (
        <div className="title-case-game">    
            <p>Enter a Word to convert it to title case:</p>
            <input 
                type="text" 
                value={titleCaseValue} 
                onChange={(e) => setTitleCaseValue(e.target.value)} 
            />
            <button onClick={() => setTitleCaseResult(titleCaseFunction(titleCaseValue))}>Convert to Title Case</button>    
            <div style={{marginTop:"20px"}}>
                {titleCaseResult}
            </div>
        </div>
    )
}