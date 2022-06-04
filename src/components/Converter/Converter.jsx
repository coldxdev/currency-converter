import { useEffect, useState } from 'react';
import { formatRate } from '../../utils/functions';
import ConverterRow from '../ConverterRow/ConverterRow';
import s from './Converter.module.scss';

const Converter = ({ rates }) => {
    const [amountFrom, setAmountFrom] = useState(1);
    const [amountTo, setAmountTo] = useState(1);
    const [currencyFrom, setCurrencyFrom] = useState('USD');
    const [currencyTo, setCurrencyTo] = useState('UAH');

    useEffect(() => {
        const calculatedRate = (rates[currencyTo] / rates[currencyFrom]) * amountFrom;

        setAmountTo(formatRate(calculatedRate));
    }, []);

    const onAmountChangeFrom = value => {
        const calculatedRate = (rates[currencyTo] / rates[currencyFrom]) * value;

        setAmountFrom(value);
        setAmountTo(formatRate(calculatedRate));
    };

    const onAmountChangeTo = value => {
        const calculatedRate = (rates[currencyFrom] / rates[currencyTo]) * value;

        setAmountFrom(formatRate(calculatedRate));
        setAmountTo(value);
    };

    const onCurrencyChangeFrom = value => {
        const calculatedRate = (rates[currencyTo] / rates[value]) * amountFrom;

        setAmountTo(formatRate(calculatedRate));
        setCurrencyFrom(value);
    };

    const onCurrencyChangeTo = value => {
        const calculatedRate = (rates[value] / rates[currencyFrom]) * amountTo;

        setAmountFrom(formatRate(calculatedRate));
        setCurrencyTo(value);
    };

    return (
        <div className={s.converter}>
            <div className={`container`}>
                <h3 className={s.title}>Конвертер валют</h3>
                <div className={s.rows}>
                    <ConverterRow
                        amount={amountFrom}
                        currency={currencyFrom}
                        onAmountChange={onAmountChangeFrom}
                        onCurrencyChange={onCurrencyChangeFrom}
                        allCurrencies={Object.keys(rates)}
                    />
                    <ConverterRow
                        amount={amountTo}
                        currency={currencyTo}
                        onAmountChange={onAmountChangeTo}
                        onCurrencyChange={onCurrencyChangeTo}
                        allCurrencies={Object.keys(rates)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Converter;
