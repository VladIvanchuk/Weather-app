// Components
import { observer } from 'mobx-react-lite';
import { CurrentWeather } from '../components/CurrentWeather';
import { Forecast } from '../components/Forecast';
import { Filter } from '../components/Filter';
import { useWeather } from '../hooks/useWeather';
import { useStore } from '../hooks/useStore';

export const Weather = observer(() => {
    const { data } = useWeather();
    const { weatherStore } = useStore();
    const { filteredDays, isFiltered } = weatherStore;


    return (
        <main>
            <Filter />
            <CurrentWeather currentForecast = { isFiltered ? filteredDays(data) : data } />
            <Forecast currentForecast = { isFiltered ? filteredDays(data) : data } />
        </main>
    );
});
