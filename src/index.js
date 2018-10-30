import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './index.css';
import HomePage from './components/home/HomePage';
import MovieTrivia from '../src/components/movietrivia/MovieTrivia';
import ActorForm from './components/actorform/ActorForm';
import reducer from '../src/reducer/reducers';

export const actors = [
    {
        name: 'Angelina Jolie',
        image: 'images/actors/angelinajolie.jpg',
        movies: ['Salt', 'Maleficient', 'Wanted', 'Mr. & Mrs. Smith', 'The Tourist']
    },
    {
        name: 'Client Eastwood',
        image: 'images/actors/clienteastwood.jpg',
        movies: ['Million Dollar Baby', 'Escape from Alcatraz', 'For a Few Dollars More', 'Unforgiven', 'Gran Torino']
    },
    {
        name: 'Daniel Day-Lewis',
        image: 'images/actors/danieldaylewis.jpg',
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

let store = Redux.createStore(reducer);

  ReactDOM.render(
      <BrowserRouter>
      <ReactRedux.Provider store = {store} >
      <React.Fragment>
      <Route exact path = "/" component = {HomePage} />
      <Route path = "/game" component = {MovieTrivia} />
      <Route path = "/add" component = {ActorForm} />
      </React.Fragment>
      </ReactRedux.Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

