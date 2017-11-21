import {combineReducers} from 'redux';
import LadbrokesData from './reducer-ladbrokes-unmatched-data';
import SportsCastData from './reducer-sportscast-unmatched-data';

const allReducers = combineReducers({
  ladbrokesData: LadbrokesData,
  sportsCastData: SportsCastData,
});

export default allReducers
