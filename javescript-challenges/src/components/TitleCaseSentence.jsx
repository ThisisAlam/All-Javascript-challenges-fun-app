import React from "react";
export default function TitleCaseSentence() {
    function titleCaseSentenceFunction(string) {
        return <p>{
            string.split(' ').map(word => {
                return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ')
        }</p>;
    }
    const [sentence, setSentence] = React.useState("");
    const [sentenceResult, setSentenceResult] = React.useState("");
    return(
        <div className="title-case-sentence-game">
            <p>Enter a sentence to convert it to title case:</p>
            <input type="text"
                value={sentence}
                onChange={(e)=>setSentence(e.target.value)}/>
            <button onClick={(e)=>setSentenceResult(titleCaseSentenceFunction(sentence))}>Convert to Title Case</button>
            <div style={{marginTop:"20px"}}>
                {sentenceResult}
            </div>
        </div>
    )    
}