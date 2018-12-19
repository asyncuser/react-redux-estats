import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Player from './components/Person/ProfileDetails/Profile'
import ProMatches from "./components/ProMatches/ProMatches";
import ProPlayers from "./components/proPlayers/ProPlayers";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/matches' component={ProMatches}/>
                    <Route path='/players' component={ProPlayers}/>
                    <Route path='/player/:id' component={Player}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
