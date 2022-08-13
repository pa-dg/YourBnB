import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const configureStore = (preLoadedState={}) => {
  return createStore(RootReducer, preLoadedState, applyMiddleware(thunk))
}

export default configureStore;