import { createStore, combineReducers, applyMiddleware } from 'redux'
import locationsReducer from './reducers/locationsReducer'
import googleUrlReducer from './reducers/googleUrlReducer'
import startendReducer from './reducers/startendReducer'
import notificationReducer from './reducers/notificationReducer'
import turfAddressesReducer from './reducers/turfAddressesReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  locations: locationsReducer,
  googleUrl: googleUrlReducer,
  startend: startendReducer,
  notification: notificationReducer,
  addresses: turfAddressesReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
