import React, { FC, useMemo } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { AppHighchartsProps } from './types';

const AppHighcharts: FC<AppHighchartsProps> = (props) => {
	const { titleText, series, yAxis } = props;
	
	const highchartsOptions = useMemo<Highcharts.Options>(() => ({
		title: {
			text: titleText,
		},
		rangeSelector: {
			selected: 10,
		},
		yAxis,
		series,
		chart: {
			height: 600,
		},
	}), [titleText, series, yAxis]);
	
	return (
		<HighchartsReact
			highcharts={Highcharts}
			constructorType={'stockChart'}
			options={highchartsOptions}
		/>
	);
};

export default AppHighcharts;
