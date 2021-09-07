import React, { FC, useEffect, useMemo } from 'react';
import { requestDifficultyLatest, requestPriceUsdClose } from '../../actions';
import { useAppDispatch } from '../../app/hooks';
import {
  getIsDifficultyLoading,
  getDifficultySeriesData,
  getPriceUSDCloseSeriesData,
  getIsPriceUSDCloseLoading,
} from '../../selectors/metrics';
import { useSelector } from 'react-redux';
import { Spin, Card, Result } from 'antd';
import AppHighcharts from '../AppHighcharts';
import { AppHighchartsProps } from '../AppHighcharts/types';
import {
  PriceUSDCloseSeriesOptions,
  DifficultySeriesOptions,
  PriceUSDCloseYAxisOptions,
  DifficultyYAxisOptions,
} from '../../constants/highcharts';

const Difficulty: FC = () => {
  const dispatch = useAppDispatch();
  const isDifficultyLoading = useSelector(getIsDifficultyLoading);
  const isPriceUSDCloseLoading = useSelector(getIsPriceUSDCloseLoading);
  const difficultySeriesData = useSelector(getDifficultySeriesData);
  const priceUSDCloseSeriesData = useSelector(getPriceUSDCloseSeriesData);
  const isSomethingWentWrong = !isDifficultyLoading && !isPriceUSDCloseLoading && (difficultySeriesData === null || priceUSDCloseSeriesData === null);
  
  
  useEffect(() => {
    dispatch(requestDifficultyLatest());
    dispatch(requestPriceUsdClose());
  }, [dispatch]);
  
  const series = useMemo<AppHighchartsProps['series']>(() => [{
      ...PriceUSDCloseSeriesOptions,
      data: priceUSDCloseSeriesData || [],
    }, {
      ...DifficultySeriesOptions,
      data: difficultySeriesData || [],
    }],
    [difficultySeriesData, priceUSDCloseSeriesData],
  );
  
  const yAxis = useMemo<AppHighchartsProps['yAxis']>(() => [PriceUSDCloseYAxisOptions, DifficultyYAxisOptions], []);
  
  
  return (
    <Card title="Difficulty">
      <Spin spinning={isDifficultyLoading || isPriceUSDCloseLoading} tip="Loading..." size="large">
        {!isSomethingWentWrong &&
         <AppHighcharts
           titleText="Difficulty vs Price chart"
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

export default Difficulty;
