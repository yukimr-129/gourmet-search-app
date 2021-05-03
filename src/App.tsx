import React, { VFC } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './routing/Router';

const App: VFC = () => {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
