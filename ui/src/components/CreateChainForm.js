import React, { Component } from "react";
import { connect } from "react-redux";
import { createChain } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    createChain: chain => dispatch(createChain(chain))
  };
};
/*
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}
*/
class CreateChainForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      supply: '',
      reward: '',
      endBlock: '',
      halvingBlock: '',
      decreaseRewardsPercent: '',
      address: '',
      addressRewardPercent: '',
      makeRewardsFieldsReadonly: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let state = {[event.target.name]: event.target.value};
    if (event.target.name === "reward" && event.target.value && event.target.value.length > 0) {
      state = { ...state, halvingBlock: '', decreaseRewardsPercent: '', makeRewardsFieldsReadonly: false  };
    } else {
      state = { ...state, makeRewardsFieldsReadonly: true  };
    }
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    const chain = {
      name: this.state.name,
      supply: this.state.supply,
      reward: this.state.reward,
      endBlock: this.state.endBlock,
      halvingBlock: this.state.halvingBlock,
      decreaseRewardsPercent: this.state.decreaseRewardsPercent,
      address: this.state.address,
      addressRewardPercent: this.state.addressRewardPercent
    };
    this.props.createChain(chain);
    this.setState({ chain });
  }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <h1 className="display-4">Create Chain</h1>
                </div>
                <div className="my-md-3 py-md-3">
                  <div className="row">
                    <div className="col">
                      <h3>Coins</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">Coin Name / Ticker Symbol</label>
                        <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange} required/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="supply">Total Supply</label>
                        <input type="number" className="form-control" id="supply" name="supply" value={this.state.supply} onChange={this.handleChange} required/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-md-3 py-md-3">
                  <div className="row">
                    <div className="col">
                      <h3>Rewards <small className="text-muted text-italic">(optional)</small></h3>
                      <p>These fields allow you to customize rewards settings.</p>
                    </div>
                  </div> 
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="mining-reward">Mining reward in Satoshis</label>
                        <input type="number" className="form-control" id="mining-reward" name="reward" value={this.state.reward} onChange={this.handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="end-rewards">Height of block when rewards will end</label>
                        <input type="number" className="form-control" id="end-rewards" name="endBlock" value={this.state.endBlock} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="halving">Number of blocks until rewards halved</label>
                        <input type="number" className="form-control" id="halving" name="halvingBlock" value={this.state.halvingBlock} onChange={this.handleChange} readOnly={this.state.makeRewardsFieldsReadonly}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="decrease-rewards">Rewards percent decrease with each halving</label>
                        <input type="number" className="form-control" id="decrease-rewards" name="decreaseRewardsPercent" value={this.state.decreaseRewardsPercent} onChange={this.handleChange} readOnly={this.state.makeRewardsFieldsReadonly}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row my-md-3 py-md-3">
                  <div className="col">
                    <h3>Public Key Address <small className="text-muted text-italic">(optional)</small></h3>
                    <p>Setting where to send a percentage of the coins when mined.</p>
                    <div className="form-group">
                      <label htmlFor="mining-reward">Public Key Address (33 byte hex string)</label>
                      <input type="text" className="form-control" id="mining-reward" name="address" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address-rewards">Percent added to rewards to be sent to Public Key Address</label>
                      <input type="number" className="form-control" id="address-rewards" name="addressRewardPercent" value={this.state.addressRewardPercent} onChange={this.handleChange} />
                    </div>
                  </div>
                </div>
                <div className="row my-md-3">
                  <div className="col">
                    <button type="submit" className="btn btn-primary btn-lg w-100">Create Chain</button>
                  </div>
                </div>
              </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(CreateChainForm);

export default Form;