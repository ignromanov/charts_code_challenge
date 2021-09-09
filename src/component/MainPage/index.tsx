import React, { FC } from 'react';
import { Card, Alert } from 'antd';
import { Routes } from '../../constants';
import { useHistory } from 'react-router-dom';
import './MainPage.scss';

const MainPage: FC = () => {
  const history = useHistory();
  const gotoChartPage = (route: Routes) => () => history.push(route);
  
  return (
    <Card title="Main page">
      <Alert type="info" message="Please select a metric you would like to display" />
      <div className="row-of-charts-links">
        <div className="linked-card">
          <div className="linked-card__box" onClick={gotoChartPage(Routes.Difficulty)} />
          <div className="linked-card__title">Difficulty Chart</div>
        </div>
        <div className="linked-card">
          <div className="linked-card__box" onClick={gotoChartPage(Routes.HashRate)} />
          <div className="linked-card__title">Hash rate Chart</div>
        </div>
      </div>
    </Card>
  );
};

export default MainPage;
