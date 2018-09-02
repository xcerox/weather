import { createStore, applyMiddleware } from 'redux';
import reducers from 'Reducers';
import reduxPromise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;