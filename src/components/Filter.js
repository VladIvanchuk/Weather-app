import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { useStore } from '../hooks/useStore';

export const Filter = observer(() => {
    const { weatherStore } = useStore();
    const {
        type, setType, setMaxTemperature, setMinTemperature, applyFilter, resetFilter,
        isFiltered, setSelectedDayId, setSelectedDay, isFormBlocked,
    } = weatherStore;

    const form = useForm({
        mode: 'onSubmit',
    });

    const onSubmit = form.handleSubmit(() => {
        applyFilter(form.getValues());
        setSelectedDayId(null);
        setSelectedDay(null);
        if (isFiltered) {
            resetFilter();
            form.reset();
            setSelectedDayId(null);
            setSelectedDay(null);
        }
    });


    return (
        <form onSubmit = { onSubmit } className = 'filter'>
            <span
                onClick = { isFiltered ? null : () => setType('cloudy') }
                { ...form.setValue('type', type) }
                className = { classNames('checkbox', { selected: type === 'cloudy' }) }>Облачно</span>
            <span
                onClick = { isFiltered ? null : () => setType('sunny') }
                { ...form.setValue('type', type) }
                className = { classNames('checkbox', { selected: type === 'sunny' }) }>Солнечно</span>
            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'>
                        Минимальная температура
                </label>
                <input
                    { ...form.register('MinTemperature', {
                        onChange: (customEv) => setMinTemperature(customEv.target.value),
                    }) }
                    disabled = { isFiltered }
                    id = 'min-temperature'
                    type = 'number' />
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'max-temperature'>
                        Максимальная температура
                </label>
                <input
                    { ...form.register('MaxTemperature', {
                        onChange: (customEv) => setMaxTemperature(customEv.target.value),
                    }) }
                    disabled = { isFiltered }
                    id = 'max-temperature'
                    type = 'number' />
            </p>
            <button disabled = { isFormBlocked } >{ isFiltered ? 'Сбросить' : 'Отфильтровать' }</button>
        </form>
    );
});
