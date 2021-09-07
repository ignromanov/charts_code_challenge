import React, { FC } from 'react';
import { Card, Alert } from 'antd';

const MainPage: FC = () => {
  
  return (
    <Card title="Main page">
      <Alert type="info" message="Please select a metric you would like to display" />
    </Card>
  );
};

export default MainPage;
