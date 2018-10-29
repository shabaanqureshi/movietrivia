import * as types from './actionTypes';

export function answerSelected(answer) {
  return { type: types.ANSWER_SELECTED, answer};
}

export function continueGame() {
    return {type: types.CREATE_COURSE_SUCCESS};
  }

