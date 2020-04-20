import { combineReducers } from 'redux';
import tasks from './todo';
import filters from './footerFilter';

const rootReducer = combineReducers({ tasks, filters });

export default rootReducer;
