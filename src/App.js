import React, { useState} from "react";
import Axios from "axios";
import "./App.css";

function App() {

  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
        setJoke(data.setup + "..." + data.punchline);
      });
  };
  return (
    <div>
      Hello <button onClick={getJoke}>Get getJoke</button>
      {joke}
    </div>
  )
}

export default App;