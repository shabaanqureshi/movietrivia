import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/MovieTrivia.css';
import '../../../src/bootstrap.min.css'; 

function ScoreDisplay() {
  return (
    <h1 className = "score"> SCORE </h1> 
  )
}

function ScoreBoard() {
  return (
  <div class="container">
  <div class="row board">
    <div class="col">Computer</div>
    <div class="col">You</div>
    <div class="w-100"></div>
    <div class="col">Computer</div>
    <div class="col">You</div>
  </div>
  </div>)
  ;
}

function Movie({name, onClick}) {
  return (
    <div className = "list" onClick = {() => {onClick(name);}}>
    <h4>{name}</h4> 
    </div>
  );
}

function TextToInk(ink) {
  const mapping = {
    'none': '',
    'correct': 'green',
    'wrong': 'red'
  };
  return mapping[ink];
}

function Data({actor, movies, ink, onAnswerSelected}) {
  return (
  <div className="row data">
    <div className = "col-5 offset-1">
      <img src={actor.imageUrl} className = "actorimage" alt="Actor"/>
    </div>
    <div className = "col-5" style={{color: TextToInk(ink)}}>
      {movies.map(name => <Movie name  = {name} key = {name} onClick = {onAnswerSelected} /> )};
    </div>
  </div>);
}
Data.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    movies: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
  ink: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

function Continue({ show, onContinue }) {
  return (
    <div className="row continue">
    { show 
      ? <div className="col-11">
          <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
        </div>
      : null }
    </div>
  );
}

function MovieTrivia({data, ink, onAnswerSelected, onContinue}) {
  return (
    <div className="container-fluid">
    <ScoreDisplay />
    <ScoreBoard />
    <Data {...data} ink = {ink} onAnswerSelected = {onAnswerSelected}/>
    <Continue show = {ink === 'correct'} onContinue = {onContinue} />
    </div>
  );
}

export default MovieTrivia;