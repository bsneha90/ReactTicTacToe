import React from 'react';
import BoardContainer from '../container/BoardContainer';
import Result from './Result';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Result />
      <BoardContainer />
    </div>
  );
}

export default App;
