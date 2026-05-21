import PanicFunction from "./components/PanicFunction";
import WishperFunction from "./components/WishperFunction";
import RandomCapsFunction from "./components/RandomCapsFunction";
import TitleCaseWord from "./components/TitleCaseWord";
import TitleCaseSentence from "./components/TitleCaseSentence";
import NotFizzBuzz from "./components/NotFizzBuzz";
import Emojify from "./components/Emojify";
import Anagram from "./components/Anagram";
import DecodeAlienMessage from "./components/DecodeAlienMessage";
import Palindrom from "./components/Palindrom";
import RecoverPassword from "./components/RecoverPassword";
import FrequencyOfLetters from "./components/FrequencyOfLetters";
import RemoveDupFromRecipe from "./components/RemoveDupFromRecipe";
import FlattenTheArray from "./components/FlattenTheArray";
import SumTheArray from "./components/SumTheArray";
import CountVoteFromArray from "./components/CountVoteFromArray";
import "./App.css";

export default function App() {

  
  return (
    <div className="App">
      <header>
        <h1 style={{margin:"0"}}>JavaScript Challenges</h1>
        <small>Click on the challenges to play with them.</small>
      </header>
        <hr />
      <main>
        
        {/* //function to "Panicify a string" */}
        <PanicFunction />
        <hr />
        
        {/* //function to "Whisper" */}
        <WishperFunction />
        <hr />

        {/* //function to "Random Caps" */}
        <RandomCapsFunction />
        <hr />
        
        {/* //function to "Title Case Word" */}
        <TitleCaseWord />
        <hr />
        
        {/* //function to "Title Case Sentence" */}
        <TitleCaseSentence />
        <hr />
        
        {/* //function to "Not FizzBuzz" */}
        <NotFizzBuzz />
        <hr />
        
        {/* //function to "Emojify" */}
        <Emojify />
        <hr />

        {/* //function to "Anagram" */}
        <Anagram />
        <hr />

        {/* //function to "Decode Alien Message" */}
        <DecodeAlienMessage />
        <hr />

        {/* //function to "Palindrom" */}
        <Palindrom />
        <hr />

        {/* //function to "Recover Password" */}
        <RecoverPassword />
        <hr />

        {/* //function to "Frequency of Letters" */}
        <FrequencyOfLetters />
        <hr />

        {/* //function to "Remove Duplicates from Recipe" */}
        <RemoveDupFromRecipe /> 
        <hr />

        {/* //function to "Flatten the Array" */}
        <FlattenTheArray />
        <hr />
        {/* //function to "Sum the Array" */}
        <SumTheArray />
        <hr />
        
        {/* //function to "Count Votes from Array" */}
        <CountVoteFromArray />
      </main>
      <hr />
      <footer>
        <h2>Created by <a href="https://github.com/ThisisAlam">Fakhar Alam</a></h2>
      </footer>
    </div>
  )
}