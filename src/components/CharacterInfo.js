import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams , useHistory} from 'react-router-dom';
import styled from 'styled-components';


//* Start of Styled components
const ContainerDiv = styled.div`
    background-image: url('https://c4.wallpaperflare.com/wallpaper/588/5/300/rick-and-morty-toilets-hd-wallpaper-preview.jpg');
    background-size: cover;
    background-position: center;
    height: 100%;
    display:flex;
    flex-flow: column nowrap;
    align-items: center;
`

const Button = styled.button`
    width:10%;
    margin: 1rem auto;
    padding:1rem;
    border-radius: 5%;
    font-size:1rem;
`
const InfoDiv = styled.div`
    background: rgba(0,0,0,0.6);
    color:white;
    padding: 1rem;
    display:inline-block;
    padding: 5rem;
    margin: 2rem;
    border-radius: 15%;
`
const Image = styled.img`
    border-radius: 10%;
    `
//* End of Styled components

const CharacterInfo = () => {

const {id} = useParams();

const history = useHistory();

const goBack = () => {
    history.push(`/character`)
}


 const [details, setDetails] = useState({})

 //*Using api with a dynamic id param
 useEffect(() => {
     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
     .then(res => {
         setDetails(res.data)
        console.log(res.data)
     })
     .catch(err => {
         console.log(err)
     })
 }, [id])

        //*deconstruct details info to not have dry
        const {image, name, gender, species, status} = details

    return (
        <ContainerDiv>
        <Button onClick={goBack}>Go Back</Button>
        <InfoDiv>
            <Image src={image} alt={name}/>
            <h1>{name}</h1>
            <h1>Gender: {gender}</h1>
            <h1>Species: {species}</h1>
            <h1>Status: {status}</h1>
        </InfoDiv>
        </ContainerDiv>
    );
};

export default CharacterInfo;