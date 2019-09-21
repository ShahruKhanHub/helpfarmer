import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import CreateGroup from './components/createGroup';

function App() {
  return (
    <Router className="App">
      <Nav />
      <Route exact path="/"/>
      <Route exact path="/createGroup" component={CreateGroup} />
    </Router>
  );
}

export default App;