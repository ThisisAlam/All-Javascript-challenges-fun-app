import React from "react";

export default function AnagramOfArray() {
    const anagramArray = [
        "moz biblical torchbearers",  
        "it's razorbill beachcomber", 
        "och mcrobbie trailblazers", 
        "bib chorizo cellarmaster", 
        "thor scribble carbimazole", 
        "zilla borscht abercrombie", 
        "brazil scorcher batmobile", 
        "dame shelburne characterizing", 
        "uber englishman characterized", 
        "agnes rhumbline characterized", 
        "rehab scrutinized charlemagne", 
        "dreams zurich interchangeable", 
        "bam hamster technocratic", 
        "mechatronic masterbatch", 
        "bam ratchet mechatronics"
    ];
    const anagram = "Bob Ziroll Scrimba Teacher"
    function findAnagramPairs(anagram, array) {
        const sortedAnagram = anagram
        .toLowerCase()
        .replaceAll(" ", "")
        .split("")
        .sort()
        .join("");
        const anagramPairs = array.filter(item => {
            const sortedItem = item
            .toLowerCase()
            .replaceAll(" ", "")
            .split("")
            .sort()
            .join("");
            return sortedItem === sortedAnagram;
        });
        return <>
            <p>Anagram pairs for "{anagram}":</p>
            <ul>{anagramPairs.map((pair, index) => 
                <li key={index}>{pair}</li>)}
            </ul>
        </>
    }
    
    const [result, setResult] = React.useState("");
    return(
        <div className="anagram-of-array-game">
            <p>Here is the anagram array:</p>
            <pre>{JSON.stringify(anagramArray, null, 2)}</pre>
            <button onClick={() => 
                setResult(findAnagramPairs(anagram, anagramArray))}>
                Find Anagram Pairs
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}
// function sortString(string){
//     return string
//     .toLowerCase()
//     .replaceAll(" ", "")
//     .split("")
//     .sort()
//     .join("");
// }