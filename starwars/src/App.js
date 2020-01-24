import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import StarWars from './components/StarWars';

const App = () => {
  const [people, setPeople] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {

    axios.get('https://swapi.co/api/people/')
    .then(res => {
      // console.log(people);
      setPeople(res.data.results);
      
    }).catch(err => {
      console.log(err)
    });

  }, [])
 console.log(people);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map(el => {
      return(<StarWars name={el.name} 
                      height={el.height} 
                      mass={el.mass} 
                      hair_color={el.hair_color} 
                      skin_color={el.skin_color} 
                      eye_color={el.eye_color}
                      birth_year={el.birth_year}
                      gender={el.gender}
            />
            )
      })}
    </div>
  );
}

export default App;
