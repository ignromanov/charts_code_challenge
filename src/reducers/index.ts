import { combineReducers } from '@reduxjs/toolkit';
import metricsReducer from './metrics';

const reducer =
	combineReducers({
		Metrics: metricsReducer,
	});

export default reducer;
