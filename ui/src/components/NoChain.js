import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CreateChain from './CreateChainForm';

class NoChain extends Component {
    render () {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-4">Not Chains Yet...</h1>
                <p className="lead">Asset chains are blockchains that have all the benefits of a distributed ledger and built in features such as trading, privacy, security, smart contracts, and scalability.</p>
                <hr className="my-4" />
                <p>Getting started is easy.  Generate your own blockchain in just a few seconds.</p>
                <p className="lead">
                    <Link to="/create-chain" className="btn btn-primary btn-lg">Create Chain</Link>
                </p>

                <main>
                    <Route exact path="/create-chain" component={CreateChain} />
                </main>
                
            </div>
        )
    }
}

export default NoChain;