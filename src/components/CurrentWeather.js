import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { useStore } from '../hooks/useStore';
import { useGetWeekDay } from '../hooks/useWeekDay';
import { useGetMonth } from '../hooks/useMonth';

export const CurrentWeather = observer((props) => {
    const { weatherStore } = useStore();
    const { selectedDay } = weatherStore;

    const data = new Date(selectedDay?.day);
    const weekDay = useGetWeekDay(data.getDay());
    const month = useGetMonth(data.getMonth());
    const day = data.getDate();

    if (props.currentForecast.length === 0) {
        return null;
    }

    return (
        <>
            <div className = 'head'>
                <div className = { classNames('icon',
                    { sunny: selectedDay?.type === 'sunny' },
                    { cloudy: selectedDay?.type === 'cloudy' },
                    { rainy: selectedDay?.type === 'rainy' }) }></div>
                <div className = 'current-date'>
                    <p>{ weekDay }</p>
                    <span>{ day } { month }</span>
                </div>
            </div>
            <div className = 'current-weather'>
                <p className = 'temperature'>{ selectedDay?.temperature }</p>
                <p className = 'meta'>
                    <span className = 'rainy'>%{ selectedDay?.humidity }</span>
                    <span className = 'humidity'>%{ selectedDay?.rain_probability }</span>
                </p>
            </div>
        </>
    );
});
