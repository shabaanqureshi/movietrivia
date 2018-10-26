import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
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

/*
Helper function to randomize the ordering of our movies array
*/
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

/*
Helper function to choose a random value
*/
function sample(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

/*
Function to return all the movies from all actors into one array
*/
function allMovies(actors) {
    return actors.reduce((p, c, i) => {
        return p.concat(c.movies);
    }, []);
};

/*
Function to generate the choices of movies and the actor
*/
function getData(actors) {
    const movies = allMovies(actors);
    const fiveRandomMovies = shuffle(movies).slice(0,6);
    const answer = sample(fiveRandomMovies);
    return {
        movies: fiveRandomMovies,
        actor: actors.find(actor =>  actor.movies.some((title => title === answer)))
    }
}

const state = {
    data: getData(actors),
    ink: ''
};

/*
Function to determine which color to color the text depending if the user's answer is correct or wrong
*/
function onAnswerSelected(answer) {
    const choice = state.data.actor.movies.some(movie => movie === answer);
    if (choice) {
        state.ink = 'correct';
    }
    else {
        state.ink = 'wrong';
    }
    render();
  }

function Game() {
    return<MovieTrivia {...state} onAnswerSelected = {onAnswerSelected}/>
}

function render() {
  ReactDOM.render(
      <BrowserRouter>
      <React.Fragment>
      <Route exact path = "/" component = {HomePage} />
      <Route path = "/game" component = {Game} />
      <Route path = "/add" component = {ActorForm} />
      </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));
}
render();
serviceWorker.unregister();