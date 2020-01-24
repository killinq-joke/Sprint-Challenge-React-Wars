import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import StarWars from './components/StarWars';
import styled from 'styled-components';

const Button = styled.a`
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #ed3330;
padding: 20px 100px;
margin: 10px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;

&:hover{
  background: #434343;
letter-spacing: 1px;
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}
`;

const App = () => {
  const [people, setPeople] = useState([]);
  const [next, setNext] = useState([]);
  const [previous, setPrevious] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {

    axios.get('https://swapi.co/api/people/')
    .then(res => {
      // console.log(res.data.next);
      setPeople(res.data.results);
      setNext(res.data.next)
    }).catch(err => {
      console.log(err)
    });

    
    

  }, [])

  function nextClick() {
    axios.get(`${next}`)
    .then(res => {
      // console.log(res);
      setPeople(res.data.results);
      setNext(res.data.next);
      setPrevious(res.data.previous);
    }).catch(err => {
      console.log(err)
    })
  }

  function previousClick() {
    axios.get(`${previous}`)
    .then(res => {
      setPeople(res.data.results);
      setNext(res.data.next);
      setPrevious(res.data.previous);
    }).catch(err => {
      console.log(err)
    })
  }
//  console.log(people);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Button href="#" onClick={previousClick}>Previous</Button>
      <Button href="# " onClick={nextClick}>Next</Button>
      
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

      <Button onClick={previousClick}>Previous</Button>
      <Button onClick={nextClick}>Next</Button>
    </div>
  );
}

export default App;
