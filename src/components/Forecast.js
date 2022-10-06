import { useEffect } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStore } from '../hooks/useStore';
import { useGetWeekDay } from '../hooks/useWeekDay';

export const Forecast = observer((props) => {
    const { currentForecast } = props;
    const { weatherStore } = useStore();
    const {
        selectedDayId, selectedDay, setSelectedDayId, setSelectedDay,
    } = weatherStore;


    useEffect(() => {
        if (!selectedDayId) {
            setSelectedDayId(currentForecast[ 0 ]?.id);
        }
        if (!selectedDay) {
            setSelectedDay(currentForecast[ 0 ]);
        }
    });

    const dayJSX = currentForecast.map((days) => {
        const {
            day, temperature, type, id,
        } = days;
        const data = new Date(day).getDay();

        const handleClick = () => {
            setSelectedDayId(id);
            setSelectedDay(days);
        };

        return (
            <div
                onClick = { handleClick }
                key = { id }
                className = { classNames('day',
                    { sunny: type === 'sunny' },
                    { cloudy: type === 'cloudy' },
                    { rainy: type === 'rainy' },
                    { selected: selectedDayId === id }) }>
                <p>{ useGetWeekDay(data) }</p>
                <span>{ temperature }</span>
            </div>
        );
    });

    if (currentForecast.length === 0) {
        return (
            <div className = 'forecast'>
                <p className = 'message'>По заданным критериям нет доступных дней!</p>
            </div>
        );
    }

    return (
        <div className = 'forecast'>
            { dayJSX  }
        </div>
    );
});
