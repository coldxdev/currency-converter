import { useEffect, useState } from 'react';
import { api } from './api';
import './App.scss';
import Converter from './components/Converter/Converter';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

export const App = () => {
    const [headerRate, setHeaderRate] = useState({ USD: 0, EUR: 0 });
    const [rates, setRates] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.getHeaderRate().then(currencyRate => setHeaderRate(currencyRate));
        api.getAllRates().then(data => {
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
