import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';



function App() {

  const [pics, setPics] = useState();
  const [altText, setAltText] = useState();
  const [info, setInfo] = useState();

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=0Cy7DjwTZ5Df5h9WiTizcFFsJx3B1vIHxwezah4M')
  .then(resp => {
    console.log(resp.data);
    setPics(resp.data.url);
    setAltText(resp.data.title);
    setInfo(resp.data.explanation);
  })
  .catch(err => console.error(err))

},)

  return (
    <div className="App">
      
      <div className='Header'>
        <h1>Nasa Pic</h1>
      </div>
      
      <div className='card'>

      <div className='imgContainer'>
      <img src={pics} alt={altText}/>
      </div>

      <div className='info'>
        <h2>
          {altText}
        </h2>
        <p>
          {info}
        </p>
      </div>


      </div>
      
      
      
    </div>
  );
}

export default App;
