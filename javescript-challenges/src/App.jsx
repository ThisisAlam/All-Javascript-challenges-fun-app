import PanicFunction from "./components/PanicFunction";
import WishperFunction from "./components/WishperFunction";
import RandomCapsFunction from "./components/RandomCapsFunction";
import TitleCaseWord from "./components/TitleCaseWord";
import TitleCaseSentence from "./components/TitleCaseSentence";
import NotFizzBuzz from "./components/NotFizzBuzz";
import "./App.css";

export default function App() {

  
  return (
    <div className="App">
      <header>
        <h1 style={{margin:"0"}}>JavaScript Challenges</h1>
        <small>Click on the challenges to play with them.</small>
      </header>
      <main>
        
        <hr />
        
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

      </main>
      <footer>
        <p>Created by <a href="https://github.com/ThisisAlam">Fakhar Alam</a></p>
      </footer>
    </div>
  )
}