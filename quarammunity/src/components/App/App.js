import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import LoggedInHeader from '../LoggedInHeader/LoggedInHeader';
import Welcome from '../Welcome/Welcome';
import CommBoard from '../CommBoard/CommBoard';
import NeedsShow from '../NeedsShow/NeedsShow';
import AddNeed from '../AddNeed/AddNeed';

const App = () => {
  return (
    <main>
      <Route exact path='/'>
        <Header />
        <Welcome />
      </Route>
      <Route path='/communityboard'>
        <LoggedInHeader />
        <CommBoard />
      </Route>
      <Route path='/needsshow'>
        <LoggedInHeader />
        <NeedsShow />
      </Route>
      <Route path='/addneed'>
        <LoggedInHeader />
        <AddNeed />
      </Route>
    </main>
  );
};

export default App;
