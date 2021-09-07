import React, { FC, useEffect, useMemo } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { useSelector } from 'react-redux';
import {
	getIsPriceUSDCloseLoading,
	getPriceUSDCloseSeriesData,
	getIsHashRateLoading,
	getHashRateSeriesData,
} from '../../selectors/metrics';
import { requestPriceUsdClose, requestHashRate } from '../../actions';
import { AppHighchartsProps } from '../AppHighcharts/types';
import {
	PriceUSDCloseSeriesOptions,
	PriceUSDCloseYAxisOptions,
	HashRateSeriesOptions,
	HashRateYAxisOptions,
} from '../../constants/highcharts';
import { Card, Spin, Result } from 'antd';
import AppHighcharts from '../AppHighcharts';

const HashRate: FC = () => {
	const dispatch = useAppDispatch();
	const isHashRateLoading = useSelector(getIsHashRateLoading);
	const isPriceUSDCloseLoading = useSelector(getIsPriceUSDCloseLoading);
	const hashRateSeriesData = useSelector(getHashRateSeriesData);
	const priceUSDCloseSeriesData = useSelector(getPriceUSDCloseSeriesData);
	const isSomethingWentWrong = !isHashRateLoading && !isPriceUSDCloseLoading && (hashRateSeriesData === null || priceUSDCloseSeriesData === null);
	
	useEffect(() => {
		dispatch(requestHashRate());
		dispatch(requestPriceUsdClose());
	}, [dispatch]);
	
	const series = useMemo<AppHighchartsProps['series']>(() => [{
			...PriceUSDCloseSeriesOptions,
			data: priceUSDCloseSeriesData || [],
		}, {
			...HashRateSeriesOptions,
			data: hashRateSeriesData || [],
		}],
		[hashRateSeriesData, priceUSDCloseSeriesData],
	);
	
	const yAxis = useMemo<AppHighchartsProps['yAxis']>(() => [PriceUSDCloseYAxisOptions, HashRateYAxisOptions], []);
	
	return (
		<Card title="Hash rate">
			<Spin spinning={isHashRateLoading || isPriceUSDCloseLoading} tip="Loading..." size="large">
				{!isSomethingWentWrong &&
         <AppHighcharts
           titleText="Hash rate vs Price chart"
           series={series}
           yAxis={yAxis}
         />}
				{isSomethingWentWrong &&
         <Result
           status="500"
           title="500"
           subTitle="Sorry, something went wrong."
         />}
			</Spin>
		</Card>
	);
};

export default HashRate;
