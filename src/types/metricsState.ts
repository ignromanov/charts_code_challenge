export interface MetricsData {
	t: number,
	v: number,
}

export type MetricsSeriesData<MetricType extends MetricsData> = [MetricType['v'], MetricType['t']]

export interface DifficultyLatest extends MetricsData {}

export interface HashRate extends MetricsData {}

export interface PriceUSDClose extends MetricsData {}

export interface MetricsState {
	difficultyLatest: {
		isLoading: boolean,
		data: Array<DifficultyLatest> | null,
	};
	hashRate: {
		isLoading: boolean,
		data: Array<HashRate> | null,
	};
	priceUSDClose: {
		isLoading: boolean,
		data: Array<PriceUSDClose> | null,
	};
}

export const defaultMetricsState: MetricsState = {
	difficultyLatest: {
		isLoading: false,
		data: [],
	},
	hashRate: {
		isLoading: false,
		data: [],
	},
	priceUSDClose: {
		isLoading: false,
		data: [],
	},
};
