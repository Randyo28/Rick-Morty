import React from 'react';
import styled from 'styled-components';
import {Link, useRouteMatch } from 'react-router-dom';

const CharacterDiv = styled.div`
color:white;
padding: 1rem;
margin-left: 1rem;

a{
    text-decoration:none;
    color: white;
}
`
const Image = styled.img`
border-radius: 10%;
`

const Characters = (props) => {

    const {id, name, image}= props.character;

    const {url} = useRouteMatch()

    return (
        <CharacterDiv>
            <Link to={`${url}/${id}`}>
            <h1>{name}</h1>
            </Link>
            <Link to={`${url}/${id}`}>
            <Image src={image} alt='character'/>
            </Link>
        </CharacterDiv>
    );
};

export default Characters;