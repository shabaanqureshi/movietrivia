import React from 'react';
import {Link} from 'react-router-dom'
import '../../../src/bootstrap.min.css'; 
import '../../styles/HomePage.css';

function Header({onContinue}) {
    return (
        <div className = "jumbotron">
            <h1 class = "display-4">Welcome to Movie Trivia</h1>
            <p class="lead">
            To play the game, the user must select the correct movie out of five other movies that an actor/actress starred in. 
            </p>
            <p class="lead">
            If a wrong answer is selected, the computer's score goes up. If a correct answer is selected, user's score goes up.
            </p>
            <p class = "lead">
            The first to accumulate eleven points is the winner.
            </p>
            <hr class="my-4"></hr>
            <Continue onContinue={onContinue}/> 
        </div>
    )
};

function Footer() {
    return (<div id="footer" className="row">
      <div className="col-12">
          <p className="text-muted credit">
            All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are open source
          </p>
      </div>
    </div>);
  }

  function Continue({ onContinue }) {
    return (
        <div className = "row continue">
            <div>
              <Link to="/game">
                <button className="btn btn-primary btn-lg float-left" onClick={onContinue}>Click Here To Play</button>
              </Link>
            </div>
            <hr class="my-4"></hr>
            <div>
              <Link to="/add">
                <button className="btn btn-danger btn-lg float-left" onClick={onContinue}>Click Here To Add Actor/Actress</button>
              </Link>
            </div>
       </div> 
    );
  }

  function HomePage({onContinue}) {
    return (
      <div className="container-fluid">
        <Header />
        <Footer />
      </div>
    );
  }

export default HomePage;