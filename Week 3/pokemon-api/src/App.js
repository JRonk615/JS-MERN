import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const base_url = "https://pokeapi.co/api/v2/"
  const [state, setState] = useState()


  useEffect(() => {
    fetch(base_url + "pokemon?limit=807")
      .then((results) => {
        console.log(results)
        return results.json()
      })
      .then((pokemon) => {
        console.log(pokemon)
        setState(pokemon.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);


  return (
    <div className="App">
      {
        state?.map((item ,idx) => (
          <div key = {idx}> 
            <h2> {item.name} </h2>
            <p> {item.height}</p>
          </div>
        ))
      }

    </div>
  );
}

export default App;
