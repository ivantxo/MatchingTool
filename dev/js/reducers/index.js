import {combineReducers} from 'redux';
import LadbrokesData from './reducer-ladbrokes-unmatched-data';

const allReducers = combineReducers({
  ladbrokesData: LadbrokesData
});

export default allReducers
