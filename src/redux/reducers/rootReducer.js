import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
  clients: clientReducer,
  user: userReducer
});

export default rootReducer;