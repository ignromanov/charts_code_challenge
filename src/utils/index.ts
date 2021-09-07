import { MetricsData, MetricsSeriesData } from '../types/metricsState';
import { CreateRequestTypes } from '../actions/types';

export function createRequestTypes<ActionType extends string>(type: ActionType): CreateRequestTypes<ActionType> {
	const FAILURE = `${type}_FAILURE` as const;
	const REQUEST = `${type}_REQUEST` as const;
	const SUCCESS = `${type}_SUCCESS` as const;
	
	return {
		FAILURE,
		REQUEST,
		SUCCESS,
	};
}

export const serializeData = <MetricType extends MetricsData>(
	data: Array<MetricType> | null,
	valueMultiplier: number = 1,
	timeMultiplier: number = 1000,
): Array<MetricsSeriesData<MetricType>> | null =>
	data !== null ? data.map(({ v, t }) => [t * timeMultiplier, v * valueMultiplier]) : null;

export const isMetricsDataFresh = (data: Array<MetricsData> | null) => {
	if (!data?.length) return false;
	const yesterday = (new Date().setUTCHours(0, 0, 0, 0) - 86400000) / 1000;
	return data[data.length - 1].t >= yesterday;
};
