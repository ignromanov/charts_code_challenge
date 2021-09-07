import Highcharts from 'highcharts';

export const PriceUSDCloseSeriesOptions: Highcharts.SeriesLineOptions = {
	name: 'Price',
	type: 'line',
	yAxis: 1,
	tooltip: {
		valueSuffix: '$',
	},
};

export const PriceUSDCloseYAxisOptions: Highcharts.YAxisOptions = {
	gridLineWidth: 0,
	labels: {
		format: '{value}$',
	},
	title: {
		text: 'Price USD (close)',
	},
};

export const DifficultySeriesOptions: Highcharts.SeriesLineOptions = {
	name: 'Difficulty',
	type: 'line',
	yAxis: 0,
};

export const DifficultyYAxisOptions: Highcharts.YAxisOptions = {
	labels: {
		format: '{value} rate',
	},
	title: {
		text: 'Difficulty',
	},
	opposite: false,
};

export const HashRateSeriesOptions: Highcharts.SeriesLineOptions = {
	name: 'Hash rate',
	type: 'line',
	yAxis: 0,
};

export const HashRateYAxisOptions: Highcharts.YAxisOptions = {
	labels: {
		format: '{value} rate',
	},
	title: {
		text: 'Hash rate',
	},
	opposite: false,
};
