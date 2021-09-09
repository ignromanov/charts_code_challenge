import React, { FC, useCallback } from 'react';
import { Select } from 'antd';
import { Currencies } from '../../constants';
import { Option } from 'antd/es/mentions';
import { CurrencySelectorProps } from './types';

const CurrencySelector: FC<CurrencySelectorProps> = (props) => {
	const { currency, setCurrency } = props;
	
	const currencySelectHandler = useCallback((newCurrency) => {
		setCurrency(newCurrency);
	}, [setCurrency]);
	
	return (
		<Select defaultValue={currency} onChange={currencySelectHandler} style={{ width: 100 }}>
			{Object.values(Currencies).map((currency) => <Option value={currency}>{currency}</Option>)}
		</Select>
	);
};

export default CurrencySelector;
