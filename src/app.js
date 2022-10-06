// Core
import {
    Navigate, Routes, Route,
} from 'react-router-dom';
// Components
import { Weather } from './pages/Weather';


// Instruments

export const App = () => {
    return (
        <Routes>
            <Route path = '/weather' element = { <Weather /> } />
            <Route path = '*' element = { <Navigate to = '/weather' replace /> } />
        </Routes>
    );
};
