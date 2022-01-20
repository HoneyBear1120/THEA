import { createStore, applyMiddleware } from 'redux';// import create store module.
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
// import cakeReducer from './Cakes/cakeReducer';   // importing the reducer.


 // the redux dev tools


import theaReducer from './reducer'; // root reducer for combining multiple reducers.


const store=createStore(rootReducer,composeWithDevTools( applyMiddleware(logger))) // creating a store with the reducer in it, logger middleware has been applied to it.


export default store; // exporting the store.