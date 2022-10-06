import { makeAutoObservable } from 'mobx';
import { WeatherStore } from './weatherStore';


export class RootStore {
    weatherStore = null;

    constructor() {
        makeAutoObservable(this);
        this.weatherStore = new WeatherStore(this);
    }
}
