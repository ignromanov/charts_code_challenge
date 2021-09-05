import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainPage from '../component/MainPage';
import { Routes } from '../constants';
import Difficulty from '../component/Difficulty';
import HashRate from '../component/HashRate';

const Routing: FC = () => {
  return (
    <>
      <Route component={MainPage} path={Routes.MainPage} exact />
      <Route component={Difficulty} path={Routes.Difficulty} exact />
      <Route component={HashRate} path={Routes.HashRate} exact />
      <Redirect to={Routes.MainPage} />
    </>
  );
};

export default Routing;
