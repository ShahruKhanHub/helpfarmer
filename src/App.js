import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Home from './components/Home';
import CreateGroup from './components/createGroup';
import Groups from './components/Groups';

function App() {
  return (
    <Router className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/createGroup" component={CreateGroup} />
      <Route exact path="/groups" component={Groups} />
    </Router>
  );
}

export default App;