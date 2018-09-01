import { createStore, applyMiddleware } from 'redux';
import reducers from 'Reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;