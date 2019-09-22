import React, { Component } from "react";
import Farmunity from "./contracts/Farmunity.json";
import Web3 from "web3";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Home from './components/Home';
import CreateGroup from './components/createGroup';
import Groups from './components/Groups';
import Group from './components/Group';

import "./App.css";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
        <Router className="App">
          <Nav />
            <p>Your account: {this.state.account}</p>
          <Route exact path="/" component={Home} />
          <Route exact path="/createGroup" component={CreateGroup} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/groups/a" component={Group} />
        </Router>
    );
  }
}

export default App;
