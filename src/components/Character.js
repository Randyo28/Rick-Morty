import React from 'react';
import Characters from './Characters';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display:flex;
    flex-flow: row wrap;
    background: #2d2d2d;
`

const Character = (props) => {

    const {characters} = props;

    return (
        <ContainerDiv>
            {characters.map(character => {
                return (
                    <Characters key={character.id} character={character}/>
                )
            })}
        </ContainerDiv>
    );
};

export default Character;