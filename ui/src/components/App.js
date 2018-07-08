import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import NoChain from './NoChain';
import CreateChain from './CreateChainForm';

class App extends Component {

  render() {

    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <main className="container py-md-3">
              <Main />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

const Main = () => (
  <Switch>
      <Route path='/create-chain' component={CreateChain}></Route>
      <Route path='/' component={NoChain}></Route>
  </Switch>
);

export default App;