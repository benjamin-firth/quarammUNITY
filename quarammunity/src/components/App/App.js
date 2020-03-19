import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import CommBoard from '../CommBoard/CommBoard';

const App = () => {
  return (
    <main>
      <Header />
      {/* <Welcome /> */}
      <CommBoard />
    </main>
  );
};

export default App;
