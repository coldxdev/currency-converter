import axios from 'axios';
import { API_KEY, API_URL } from '../utils/constants';

export const api = {
    getAllRates: () => {
        return axios
            .get(`${API_URL}/latest`, {
                headers: {
                    apikey: API_KEY,
                },
            })
            .then(({ data }) => data.rates);
    },
};
