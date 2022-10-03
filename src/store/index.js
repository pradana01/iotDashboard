import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import reducer from "./reducers"
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default configureStore({
  reducer,
}, composeEnhancers(applyMiddleware(thunk)))
