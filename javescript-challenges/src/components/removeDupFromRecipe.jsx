import React from "react";
export default function removeDupFromRecipe() {

    const eggScrambleRecipe = [
            "🥓 bacon",
            "🥓 bacon", 
            "🍳 eggs",
            "🫑 green peppers",
            "🧀 cheese",
            "🌶️ hot sauce",
            "🥓 bacon",
            "🥦 broccoli", 
            "🧀 cheese",
            "🥦 broccoli", 
            "🌶️ hot sauce"
    ];
    
    function removeDuplicatesFromRecipe(string) {
        return <p>{string}</p>
    }

    const [value, setValue] = React.useState("");
    const [result, setResult] = React.useState("");
    
    return(
        <div className="remove-dup-from-recipe-game">
            <p>Enter a recipe to remove duplicates from it:</p>
            <input type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
            <button onClick={() => setResult(removeDuplicatesFromRecipe(value))}>Remove Duplicates</button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
    
}