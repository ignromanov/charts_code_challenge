import axios from 'axios';
import { apiKey } from './config';

const apiClient = axios.create({
	baseURL: 'https://api.glassnode.com/v1/',
	headers: {
		'X-Api-Key': apiKey
	}
})

export default apiClient;
