import Highcharts from 'highcharts/highstock';

export interface AppHighchartsProps {
	titleText: string;
	series: Highcharts.SeriesLineOptions[];
	yAxis: Highcharts.YAxisOptions[];
}
