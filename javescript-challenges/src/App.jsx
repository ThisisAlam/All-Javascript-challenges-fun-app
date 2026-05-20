import PanicFunction from "./components/PanicFunction";
import WishperFunction from "./components/WishperFunction";
import "./App.css";

export default function App() {

  
  return (
    <div className="App">
      <header>
        <h1 style={{margin:"0"}}>JavaScript Challenges</h1>
        <small>Click on the challenges to play with them.</small>
      </header>
      <main>
        <br />
        <hr />
        <br />

        {/* //function to "Panicify a string" */}
        <PanicFunction />

        <br />
        <hr />
        <br />

        {/* //function to "Whisper" */}
        <WishperFunction />

        <br />
        <hr />
        <br />

      </main>
      <footer>
        <p>Created by <a href="https://github.com/ThisisAlam">Fakhar Alam</a></p>
      </footer>
    </div>
  )
}