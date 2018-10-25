import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import HomePage from './components/home/HomePage';
import MovieTrivia from '../src/components/movietrivia/MovieTrivia';
import ActorForm from './components/actorform/ActorForm';

const actors = [
    {
        name: 'Angelina Jolie',
        imageUrl: 'images/actors/angelinajolie.jpg',
        movies: ['Salt', 'Maleficient', 'Wanted', 'Mr. & Mrs. Smith', 'The Tourist']
    },
    {
        name: 'Client Eastwood',
        imageUrl: 'images/actors/clienteastwood.jpg',
        movies: ['Million Dollar Baby', 'Escape from Alcatraz', 'For a Few Dollars More', 'Unforgiven', 'Gran Torino']
    },
    {
        name: 'Daniel Day-Lewis',
        imageUrl: 'images/actors/danieldaylewis.jpg',
        movies: ['Lincoln', 'There Will Be Blood', 'Gangs of New York', 'My Left Foot', 'In The Name of the Father']
    },
    {
        name: 'Meryl Streep',
        image: 'images/actors/merylstreep.jpg',
        movies: ['Kramer vs. Kramer', 'The Iron Lady', 'The Hours', 'Out of Africa', 'Julie & Julia']
    },
    {
        name: 'Sandra Bullock',
        image: 'images/actors/sandrabullock.jpg',
        movies: ['Gravity', 'The Proposal', 'The Blind Side', 'Premonition', 'The Heat']
    },
    {
        name: 'Tom Hanks',
        image: 'images/actors/tomhanks.jpg',
        movies: ['Forrest Gump', 'The Green Mile', 'Saving Private Ryan', 'Cast Away', 'Captain Phillips']
    },
    {
        name: 'Will Smith',
        image: 'images/actors/willsmith.jpg',
        movies: ['The Pursuit of Happyness', 'Bright', 'Men in Black', 'Focus', 'Seven Pounds']
    }
];

function render() {
    ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path = "/" component = {HomePage} />
        <Route exact path = "/game" component = {MovieTrivia} />
        <Route exact path= "/add" component = {ActorForm} />
      </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));
  }
  render();


serviceWorker.unregister();