import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from 'react-router-redux'
import createChainReducer from './create-chain-reducer';

const rootReducer = combineReducers({
    createChainReducer,
    form: formReducer,
    routing: routerReducer
});

export default rootReducer;