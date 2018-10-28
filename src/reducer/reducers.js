import * as types from '../actions/actionTypes';
import {actors} from '../index';
import getData from './helper';

function defaultState() {
  return {
      actors,
      data: getData(actors),
      ink: ''
  }
}

export default function reducer(state = defaultState(), action) {
  switch (action.type) {
    case types.ANSWER_SELECTED:
      const isCorrect = state.data.actor.movies.some(movie => movie === action.answer);
      return Object.assign({}, state, {
          ink: isCorrect ? 'correct' : 'wrong'
      });

    case types.CONTINUE:
    return Object.assign({}, state, {
      ink: '', 
      data: getData(state.actors)
  });
    case types.ADD_ACTOR:
    return Object.assign({}, state, {
      actors: state.actors.concat([action.actor])
    });
    default:
      return state;
  }
}

