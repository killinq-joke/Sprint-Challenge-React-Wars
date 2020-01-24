import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
background: white;
width: 33%;
padding: 10px;
margin: 10px auto;
`;

function StarWars(props) {
    // console.log(props);
    return(
        <Div>
            <h1>{props.name}</h1>
            <h3>Height: {props.height}</h3>
            <h3>Mass: {props.mass}</h3>
            <h3>Hair color: {props.hair_color}</h3>
            <h3>Skin color: {props.skin_color}</h3>
            <h3>Eye color: {props.eye_color}</h3>
            <h3>Birth: {props.birth_year}</h3>
            <h3>Gender: {props.gender}</h3>
        </Div>
    )
}

export default StarWars;