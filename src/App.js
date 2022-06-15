import { useEffect, useState } from 'react';
import { api } from './api';
import './App.scss';
import Converter from './components/Converter/Converter';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { formatReverseRate } from './utils/functions';

export const App = () => {
    const [headerRate, setHeaderRate] = useState({ USD: 0, EUR: 0 });
    const [rates, setRates] = useState(Object);
    const [isLoading, setIsLoading] = useState(false);

    const getHeaderRate = rates => {
        const USD = formatReverseRate(rates['USD'] / rates['UAH']);
        const EUR = formatReverseRate(rates['EUR'] / rates['UAH']);
        
        return {
            USD,
            EUR,
        };
    };

    useEffect(() => {
        setIsLoading(true);
        api.getAllRates().then(data => {
            setHeaderRate(getHeaderRate(data));
            setRates(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <Loader />;

    return (
        <div className='wrapper'>
            <Header currencyRate={headerRate} />
            <Converter rates={rates} />
        </div>
    );
};

export default App;
