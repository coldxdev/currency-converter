import axios from 'axios';
import { API_KEY, API_URL } from '../utils/constants';
import { formatReverseRate } from '../utils/functions';

export const api = {
    buildRequest: (endpoint, params) => {
        const URLParams = new URLSearchParams(params);
        URLParams.set('api_key', API_KEY);
        const stringifiendParams = URLParams.toString();

        return `${API_URL}${endpoint}?${stringifiendParams}`;
    },

    getHeaderRate: () => {
        const params = {
            from: 'UAH',
            to: ['USD', 'EUR'],
        };

        return axios
            .get(api.buildRequest('fetch-multi', params))
            .then(({ data }) => data.results)
            .then(data => Object.fromEntries(Object.entries(data).map(([key, value]) => [key, formatReverseRate(value)])));
    },

    getAllRates: () => {
        return axios
        .get(api.buildRequest('fetch-all', {}))
        .then(({ data }) => data.results);
    },
};
