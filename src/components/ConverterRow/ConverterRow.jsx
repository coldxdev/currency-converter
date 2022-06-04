import s from './ConverterRow.module.scss';

const ConverterRow = ({ onAmountChange, onCurrencyChange, amount, currency, allCurrencies }) => {
    const selectElems = allCurrencies.map(c => (
        <option key={c} value={c}>
            {c}
        </option>
    ));

    return (
        <div className={s.card}>
            <select 
                className={s.select} 
                onChange={e => onCurrencyChange(e.target.value)} 
                value={currency}
            >
                {selectElems}
            </select>
            <input 
                className={s.input} 
                value={amount} 
                onInput={e => onAmountChange(e.target.value)} 
                type='number' />
        </div>
    );
};

export default ConverterRow;
