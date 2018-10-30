import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../styles/MovieTrivia.css';
import '../../../src/bootstrap.min.css'; 


function ScoreDisplay() {
  return (
    <h1 className = "score"> SCORE </h1> 
  )
}

function ScoreBoard({userScore, computerScore}){
  return (
    <React.Fragment>
  <ScoreDisplay /> 
  <div class="container">
  <div class="row board">
    <div class="col">Computer</div>
    <div class="col">User</div>
    <div class="w-100"></div>
    <div class="col">{computerScore}</div>
    <div class="col">{userScore}</div>
  </div>
  </div>
  </React.Fragment>);
}

function BackToHome() {
  return (
    <Link to = "/">
      <button type="button" class="btn btn-dark">Back To Home</button>
    </Link>
  )
}

/*
List the title of the movie
*/
function Movie({name, onClick}) {
  return (
    <div className = "list" onClick = {() => {onClick(name);}}>
    <h4>{name}</h4> 
    </div>
  );
}

/*
Provides mapping from the result of the user's answer to color
*/
function TextToInk(ink) {
  const mapping = {
    'none': '',
    'correct': 'green',
    'wrong': 'red'
  };
  return mapping[ink];
}

/*
Renders the actor's image and the list of movies
*/
function Data({actor, movies, ink, onAnswerSelected}) {
  return (
  <div className="row data">
    <div className = "col-5 offset-1">
      <img src={actor.image} className = "actorimage" alt="Actor"/>
    </div>
    <div className = "col-5" style={{color: TextToInk(ink)}}>
      {movies.map(name => <Movie name  = {name} key = {name} onClick = {onAnswerSelected} /> )};
    </div>
  </div>);
}
Data.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    movies: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
  ink: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

/*
Displays a Continue button when the user has selected the correct answer
*/
function Continue({ show, onContinue}) {
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

function mapStateToProps(state) {
  return {
    data: state.data,
    ink: state.ink,
    computerScore: state.computerScore,
    userScore: state.userScore
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: answer => 
    {
      dispatch({ type: 'ANSWER_SELECTED', answer});
    },
    onContinue: () => 
    {
      dispatch({ type: 'CONTINUE'});
    }
  }
}

function MovieTrivia({data, ink, onAnswerSelected, onContinue, userScore, computerScore}) {
  return (
    <div className="container-fluid">
    <ScoreBoard userScore = {userScore} computerScore = {computerScore} />
    <Data {...data} ink = {ink} onAnswerSelected = {onAnswerSelected}/>
    <Continue show = {ink === 'correct'} onContinue = {onContinue}/>
    <BackToHome />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieTrivia);