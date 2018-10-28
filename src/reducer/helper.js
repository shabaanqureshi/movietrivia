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
  
  
  function getData(actors) {
    const movies = allMovies(actors);
    const fiveRandomMovies = shuffle(movies).slice(0,6);
    const answer = sample(fiveRandomMovies);
    return {
        movies: fiveRandomMovies,
        actor: actors.find(actor =>  actor.movies.some((title => title === answer)))
    }
  }

  export default getData;