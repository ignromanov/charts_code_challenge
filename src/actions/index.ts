import { createAction } from '@reduxjs/toolkit';
import { MetricsState } from '../types/metricsState';
import { createRequestTypes } from '../utils';

export const DIFFICULTY_LATEST = createRequestTypes('DIFFICULTY_LATEST');
export const HASH_RATE = createRequestTypes('HASH_RATE');
export const PRICE_USD_CLOSE = createRequestTypes('PRICE_USD_CLOSE');


export const requestDifficultyLatest = createAction(DIFFICULTY_LATEST.REQUEST);
export const requestDifficultyLatestSuccess = createAction<MetricsState['difficultyLatest']['data'] | undefined>(DIFFICULTY_LATEST.SUCCESS);
export const requestDifficultyLatestFailure = createAction<unknown | undefined>(DIFFICULTY_LATEST.FAILURE);

export const requestHashRate = createAction(HASH_RATE.REQUEST);
export const requestHashRateSuccess = createAction<MetricsState['hashRate']['data'] | undefined>(HASH_RATE.SUCCESS);
export const requestHashRateFailure = createAction<unknown | undefined>(HASH_RATE.FAILURE);

export const requestPriceUsdClose = createAction(PRICE_USD_CLOSE.REQUEST);
export const requestPriceUsdCloseSuccess = createAction<MetricsState['priceUSDClose']['data'] | undefined>(PRICE_USD_CLOSE.SUCCESS);
export const requestPriceUsdCloseFailure = createAction<unknown | undefined>(PRICE_USD_CLOSE.FAILURE);
