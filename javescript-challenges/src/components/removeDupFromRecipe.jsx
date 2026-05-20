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
        const ingredientsArray = string.split(", ");
        const uniqueIngredients = [...new Set(ingredientsArray)];
        return <p>{uniqueIngredients.join(", ")}</p>;
    }

    const [result, setResult] = React.useState("");
    
    return(
        <div className="remove-dup-from-recipe-game">
            <p>This is the scrambled egg recipe:</p>
            <ul>
                {eggScrambleRecipe.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <button onClick={() => 
                setResult(removeDuplicatesFromRecipe(eggScrambleRecipe.join(", ")))}
            >Remove Duplicates from the Scrambled Recipe</button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
    
}