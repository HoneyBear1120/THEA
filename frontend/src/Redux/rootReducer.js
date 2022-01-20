import {combineReducers} from 'redux';
import theaReducer from './reducer';
import {collectionReducer} from './collectionReducer';


const rootReducer=combineReducers({
    user:theaReducer,
    userCollections:collectionReducer,
})



export default rootReducer;