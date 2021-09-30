import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from '../pages';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      <React exact path="/about" component={About}></React>
    </div>
  );
}

export default App;
