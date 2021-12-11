import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';



function App() {

  const [pics, setPics] = useState([]);

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=0Cy7DjwTZ5Df5h9WiTizcFFsJx3B1vIHxwezah4M')
  .then(resp => {
    console.log(resp.data);
    setPics(resp.data.url);
    
  })
  .catch(err => console.error(err))

}, [])

  return (
    <div className="App">
      <h1>Nasa Pic</h1>
      <img src={pics}></img>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
