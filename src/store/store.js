import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './user/reducer'
// const rootReducer = combineReducers({
// })

let store = createStore(
  // rootReducer,
  userReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    // Needed to use Redux DevTools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store
