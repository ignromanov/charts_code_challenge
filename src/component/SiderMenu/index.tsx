import React, { FC } from 'react';
import { Menu } from 'antd';
import { Routes } from '../../constants';
import { Link, useLocation } from 'react-router-dom';

const SiderMenu: FC = () => {
	const location = useLocation<Routes>();
	
	return (
		<Menu theme="dark" selectedKeys={[location.pathname]}>
			<Menu.Item key={Routes.MainPage}><Link to={Routes.MainPage}>Main page</Link></Menu.Item>
			<Menu.Item key={Routes.Difficulty}><Link to={Routes.Difficulty}>Difficulty</Link></Menu.Item>
			<Menu.Item key={Routes.HashRate}><Link to={Routes.HashRate}>Hash Rate</Link></Menu.Item>
		</Menu>
	);
};

export default SiderMenu;
