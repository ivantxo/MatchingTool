import {combineReducers} from 'redux';
import LocalData from './reducer-ladbrokes-unmatched-data';
import RemoteData from './reducer-sportscast-unmatched-data';

const allReducers = combineReducers({
  localData: LocalData,
  remoteData: RemoteData,
});

export default allReducers
