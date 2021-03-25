import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About';
import Character from './components/Character';
import axios from 'axios'
import CharacterInfo from './components/CharacterInfo';

function App() {

  const [characters, setCharacters] = React.useState([])

  
  React.useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(res => {
      setCharacters(res.data.results)
      console.log(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={Home}>
      </Route>
        <Switch>
          <Route exact path='/about' component={About}>
          </Route> 
          <Route exact path='/character'>
            <Character characters={characters}/>
          </Route> 
          <Route path='/character/:id' component={CharacterInfo}></Route>
        </Switch>
    </div>
  );
}

export default App;
