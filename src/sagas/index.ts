import { all, fork } from 'redux-saga/effects';
import metricsSagas from './metrics';

export default function* saga() {
	yield all([
		fork(metricsSagas),
	]);
}
