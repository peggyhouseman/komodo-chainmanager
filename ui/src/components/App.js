import React, { Component } from 'react';
import Nav from './Nav'
import NoChain from  './NoChain'
import CreateChainForm from './CreateChainForm'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <main className="container py-md-3">
              <NoChain/>
              <CreateChainForm/>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
