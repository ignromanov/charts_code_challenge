import { all, call, put, select, takeLatest } from 'redux-saga/effects';
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
} from '../actions';
import apiClient from '../apiClient';
import { AxiosResponse } from 'axios';
import { MetricsState } from '../types/metricsState';
import { getDifficultyData, getPriceUSDCloseData, getHashRateData } from '../selectors/metrics';
import { isMetricsDataFresh } from '../utils';

function* fetchDifficultyLatest() {
	try {
		const currentData = getDifficultyData(yield select());
		if (isMetricsDataFresh(currentData)) {
			yield put(requestDifficultyLatestSuccess());
			return;
		}
		
		const { data }: AxiosResponse<MetricsState['difficultyLatest']['data']> = yield call(apiClient, '/metrics/mining/difficulty_latest?a=BTC&i=24h');
		yield put(requestDifficultyLatestSuccess(data));
	} catch (e) {
		yield put(requestDifficultyLatestFailure(e));
	}
}

function* fetchHashRate() {
	try {
		const currentData = getHashRateData(yield select());
		if (isMetricsDataFresh(currentData)) {
			yield put(requestHashRateSuccess());
			return;
		}
		
		const { data }: AxiosResponse<MetricsState['hashRate']['data']> = yield call(apiClient, '/metrics/mining/hash_rate_mean?a=BTC&i=24h');
		yield put(requestHashRateSuccess(data));
	} catch (e) {
		yield put(requestHashRateFailure(e));
	}
}

function* fetchPriceUsdClose() {
	try {
		const currentData = getPriceUSDCloseData(yield select());
		if (isMetricsDataFresh(currentData)) {
			yield put(requestPriceUsdCloseSuccess());
			return;
		}
		
		const { data }: AxiosResponse<MetricsState['priceUSDClose']['data']> = yield call(apiClient, '/metrics/market/price_usd_close?a=BTC&i=24h');
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
