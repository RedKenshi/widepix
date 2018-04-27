// Permet de combiner les reducers pour quelque chose
// de mangeable par le state
// http://redux.js.org/docs/api/combineReducers.html
import { combineReducers } from 'redux';

import counter from './counter';

const app = combineReducers({
  counter,
});

export default app;
