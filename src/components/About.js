import React from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`
    background-image: url('https://static.onecms.io/wp-content/uploads/sites/6/2019/11/rick-and-morty-season-4-2000.jpg');
    background-size: cover;
    background-position: center;
     height: 90vh;

     h1{
         display:inline-block;
         color:white;
     }
`


const About = () => {
    return (
        <AboutDiv>
             <h1>About</h1>
        </AboutDiv>
    );
};

export default About;