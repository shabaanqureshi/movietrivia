import React from 'react';
import ReactDOM from 'react-dom';
import MovieTrivia from './MovieTrivia';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieTrivia />, div);
  ReactDOM.unmountComponentAtNode(div);
});
