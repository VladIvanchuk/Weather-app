import {  useQuery } from 'react-query';

import { api } from '../api/api';

export const useWeather = () => {
    const { data } = useQuery('forecast', api.getWeather);

    return {
        data: Array.isArray(data) ? data : [],
    };
};
