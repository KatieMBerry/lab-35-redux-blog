import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools());
// console.log('getState', store.getState());

export default store;
