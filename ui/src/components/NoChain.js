import React, { Component } from 'react';

class NoChain extends Component {
    render () {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-4">Not Chains Yet...</h1>
                <p className="lead">Asset chains are blockchains that have all the benefits of a distributed ledger and built in features such as trading, privacy, security, smart contracts, and scalability.</p>
                <hr className="my-4" />
                <p>Getting started is easy.  Generate your own blockchain in just a few seconds.</p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="/" role="button">Create Chain</a>
                </p>
            </div>
        )
    }
}

export default NoChain;