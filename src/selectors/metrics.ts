import { createSelector } from '@reduxjs/toolkit';
import { serializeData } from '../utils';
import { RootState } from '../app/types';

export const getIsDifficultyLoading = (state: RootState) => state.Metrics.difficultyLatest.isLoading;
export const getDifficultyData = (state: RootState) => state.Metrics.difficultyLatest.data;
export const getDifficultySeriesData = createSelector([getDifficultyData], (data) => serializeData(data));

export const getIsHashRateLoading = (state: RootState) => state.Metrics.hashRate.isLoading;
export const getHashRateData = (state: RootState) => state.Metrics.hashRate.data;
export const getHashRateSeriesData = createSelector([getHashRateData], (data) => serializeData(data));

export const getIsPriceUSDCloseLoading = (state: RootState) => state.Metrics.priceUSDClose.isLoading;
export const getPriceUSDCloseData = (state: RootState) => state.Metrics.priceUSDClose.data;
export const getPriceUSDCloseSeriesData = createSelector([getPriceUSDCloseData], (data) => serializeData(data));
