// Core
import axios from 'axios';

import { WEATHER_API_URL } from './config';

export const api = Object.freeze({
    async getWeather() {
        const { data } =  await axios.get(`${WEATHER_API_URL}`);

        return data.data.splice(0, 7);
    },
});
