import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import CommBoard from '../CommBoard/CommBoard';

const App = () => {
  return (
    <main>
      <Route exact path='/'>
        <Header />
        <Welcome />
      </Route>
      <Route path='/communityboard'>
        <Header />
        <CommBoard />
      </Route>
    </main>
  );
};

export default App;
