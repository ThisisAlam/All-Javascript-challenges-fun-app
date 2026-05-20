import React from "react";


export default function PanicFunction(){

    //Function to "Panicify a string"
    const panicFunction = (string) =>{
        return <p>{string
            .toUpperCase()
            .split(' ')
            .join(' 😱 ') + "!!!"}</p>;
    }
    const [panicValue, setPanicValue] = React.useState("");
    const [panicResult, setPanicResult] = React.useState("");
    return(
        <div className="panic-game">
            <p>Enter a string to panicify it:</p>
            <input type="text" value={panicValue} onChange={(e) => setPanicValue(e.target.value)} />
            <button onClick={() => setPanicResult(panicFunction(panicValue))}>Panicify</button>
            <div style={{marginTop:"20px"}}>
                {panicResult}
            </div>
        </div>
    )
}