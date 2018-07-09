import { CREATE_CHAIN } from "../constants/action-types";

const initialState = {
  chains: []
};

const getNumber = (val) => {
  return (val && !isNaN(val)) ? parseInt(val) : 0
}

const createChainReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_CHAIN:
        var chain = action.payload;
        // TODO refactor into separate class
        // TODO error handling - ui error handling
        // TODO move url into env/config
        var data = {
          Name: chain.name,
          Supply: getNumber(chain.supply),
          Reward: getNumber(chain.reward),
          EndBlock: getNumber(chain.endBlock),
          HalvingBlock: getNumber(chain.halvingBlock),
          DecreaseRewardsPercent: getNumber(chain.decreaseRewardsPercent),
          PublicKeyAddress: chain.address,
          PubicKeyAddressRewardPercent: getNumber(chain.addressRewardPercent)
        };

        var payload = {
          a: 1,
          b: 2
        };
        
        var d = new FormData();
        d.append( "json", JSON.stringify( data ) );
      

        fetch('http://127.0.0.1:3001/chain', { 
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => { console.log(response); response.json();}) // parses response to JSON
        .catch(error => console.error(`Fetch Error =\n`, error));
        return { ...state, chains: [...state.chains, action.payload] };
      default:
        return state;
    }
};

export default createChainReducer;