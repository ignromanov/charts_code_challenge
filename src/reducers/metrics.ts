import { createReducer } from '@reduxjs/toolkit';
import {
	requestDifficultyLatestSuccess,
	requestDifficultyLatest,
	requestDifficultyLatestFailure,
	requestHashRate,
	requestHashRateFailure,
	requestPriceUsdClose,
	requestPriceUsdCloseFailure,
	requestHashRateSuccess,
	requestPriceUsdCloseSuccess,
} from '../actions';
import { defaultMetricsState } from '../types/metricsState';

const metricsReducer = createReducer(defaultMetricsState, (builder) => {
	// todo: for now it looks like that good to combine 3 same types of reducers into one, but later they will maybe have a different behaviours
	builder.addCase(requestDifficultyLatest, (state) => {
		state.difficultyLatest.isLoading = true;
	});
	builder.addCase(requestDifficultyLatestFailure, (state) => {
		state.difficultyLatest = { isLoading: false, data: null };
	});
	builder.addCase(requestDifficultyLatestSuccess, (state, action) => {
		if (action.payload) {
			state.difficultyLatest = { isLoading: false, data: action.payload };
			return;
		}
		state.difficultyLatest.isLoading = false;
	});
	
	builder.addCase(requestHashRate, (state) => {
		state.hashRate.isLoading = true;
	});
	builder.addCase(requestHashRateFailure, (state) => {
		state.hashRate = { isLoading: false, data: null };
	});
	builder.addCase(requestHashRateSuccess, (state, action) => {
		if (action.payload) {
			state.hashRate = { isLoading: false, data: action.payload };
			return;
		}
		state.hashRate.isLoading = false;
	});
	
	builder.addCase(requestPriceUsdClose, (state) => {
		state.priceUSDClose.isLoading = true;
	});
	builder.addCase(requestPriceUsdCloseFailure, (state) => {
		state.priceUSDClose = { isLoading: false, data: null };
	});
	builder.addCase(requestPriceUsdCloseSuccess, (state, action) => {
		if (action.payload) {
			state.priceUSDClose = { isLoading: false, data: action.payload };
			return;
		}
		state.priceUSDClose.isLoading = false;
	});
});

export default metricsReducer;
