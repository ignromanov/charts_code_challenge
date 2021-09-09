import { Currencies } from '../../../constants';

export interface CurrencySelectorProps {
	currency: Currencies;
	setCurrency: (newCurrency: Currencies) => void;
}
