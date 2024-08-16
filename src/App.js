import React from 'react';

import HomePage from '../src/pages/home-page/index';
import './App.scss';
import Divider from './components/divider';


function App() {
  return (
    <div className="App">
      <HomePage />

      <Divider />
    </div>
  );
}

export default App;
