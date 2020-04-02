import React from 'react';
import ReactDOM from 'react-dom';
import Screen1 from './Screen1';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Screen1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});