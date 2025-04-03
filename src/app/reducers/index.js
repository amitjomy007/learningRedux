
import { combineReducers } from 'redux';
import counterVavaReducer from './counter';
import loggedAanonnuNokkedaReducer from './isLogged';

const combinedPolayadiReducer = combineReducers({
  counterVava: counterVavaReducer,
  loggedAanonnuNokkeda: loggedAanonnuNokkedaReducer,
});

export default combinedPolayadiReducer;


