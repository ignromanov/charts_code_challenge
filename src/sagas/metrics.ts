import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	DIFFICULTY_LATEST,
	PRICE_USD_CLOSE,
	HASH_RATE,
	requestDifficultyLatestSuccess,
	requestDifficultyLatestFailure,
	requestPriceUsdCloseSuccess,
	requestPriceUsdCloseFailure,
	requestHashRateSuccess,
	requestHashRateFailure,
	requestDifficultyLatest,
	requestPriceUsdClose,
	requestHashRate,
} from '../actions';
import apiClient from '../apiClient';
import { AxiosResponse } from 'axios';
import { MetricsState } from '../types/metricsState';

function* fetchDifficultyLatest({ payload: currency }: ReturnType<typeof requestDifficultyLatest>) {
	try {
		// todo: need to save currency in a store and check if it was changed
		// const currentData = getDifficultyData(yield select());
		// if (isMetricsDataFresh(currentData)) {
		// 	yield put(requestDifficultyLatestSuccess());
		// 	return;
		// }
		
		const { data }: AxiosResponse<MetricsState['difficultyLatest']['data']> = yield call(apiClient, `/metrics/mining/difficulty_latest?a=${currency}&i=24h`);
		yield put(requestDifficultyLatestSuccess(data));
	} catch (e) {
		yield put(requestDifficultyLatestFailure(e));
	}
}

function* fetchHashRate({ payload: currency }: ReturnType<typeof requestHashRate>) {
	try {
		// const currentData = getHashRateData(yield select());
		// if (isMetricsDataFresh(currentData)) {
		// 	yield put(requestHashRateSuccess());
		// 	return;
		// }
		
		const { data }: AxiosResponse<MetricsState['hashRate']['data']> = yield call(apiClient, `/metrics/mining/hash_rate_mean?a=${currency}&i=24h`);
		yield put(requestHashRateSuccess(data));
	} catch (e) {
		yield put(requestHashRateFailure(e));
	}
}

function* fetchPriceUsdClose({ payload: currency }: ReturnType<typeof requestPriceUsdClose>) {
	try {
		// const currentData = getPriceUSDCloseData(yield select());
		// if (isMetricsDataFresh(currentData)) {
		// 	yield put(requestPriceUsdCloseSuccess());
		// 	return;
		// }
		
		const { data }: AxiosResponse<MetricsState['priceUSDClose']['data']> = yield call(apiClient, `/metrics/market/price_usd_close?a=${currency}&i=24h`);
		yield put(requestPriceUsdCloseSuccess(data));
	} catch (e) {
		yield put(requestPriceUsdCloseFailure(e));
	}
}

export default function* metricsSagas() {
	yield all([
		takeLatest(DIFFICULTY_LATEST.REQUEST, fetchDifficultyLatest),
		takeLatest(HASH_RATE.REQUEST, fetchHashRate),
		takeLatest(PRICE_USD_CLOSE.REQUEST, fetchPriceUsdClose),
	]);
}
