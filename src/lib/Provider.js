import { createContext } from 'react';
import { RootStore } from './mobx';

const rootStore = new RootStore();

export const Context = createContext(rootStore);

export const Provider = (props) => {
    return (
        <Context.Provider value =  { rootStore }>
            { props.children }
        </Context.Provider>
    );
};

