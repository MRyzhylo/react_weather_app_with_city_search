import { combineReducers } from 'redux';

import { weatherInfo } from './weatherReducer';

const reducers = combineReducers({
    weatherInfo: weatherInfo,
});

export default reducers;