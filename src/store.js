import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {productsReducer} from './reducers/productReducers';

const initialState = {};
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
    products: productsReducer,
}),
initialState,
composeEnhacer(applyMiddleware(thunk))
);
export default store;