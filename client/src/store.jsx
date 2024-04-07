import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { recipeDetailsReducer, recipesReducer } from './reducers/recipeReducer';

const reducer = combineReducers({
  recipes: recipesReducer,
  recipeDetails: recipeDetailsReducer
});

const middleware = [thunk];
let initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;