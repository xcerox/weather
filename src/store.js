import { createStore, applyMiddleware } from 'redux';
import reducers from 'Reducers';
import ReduxThunk  from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;