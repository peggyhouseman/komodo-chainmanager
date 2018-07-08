import { CREATE_CHAIN } from "../constants/action-types";

const initialState = {
    chains: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_CHAIN:
        console.log(action);
        return { ...state, chains: [...state.chains, action.payload] };
      default:
        return state;
    }
};

export default rootReducer;