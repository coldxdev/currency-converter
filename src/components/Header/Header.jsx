import s from './Header.module.scss';

const Header = ({ currencyRate }) => {
    return (
        <div className={s.header}>
            <div className={`${s.wrapper} container`}>
                <div className={s.currency}>
                    USD: <span className={s.bold}>{currencyRate.USD} ₴</span>
                </div>
                <div className={s.currency}>
                    EUR: <span className={s.bold}>{currencyRate.EUR} ₴</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
