import React from 'react';
import HomePage from '../home/HomePage';
import '../../../src/bootstrap.min.css'; 


function MovieTrivia({onContinue}) {
  return (
    <div className="container-fluid">
      <HomePage onContinue={onContinue}/>
    </div>
  );
}

export default MovieTrivia;