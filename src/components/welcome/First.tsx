import s from './Welcome.module.scss';
import pig from '../../assets/icons/pig.svg'

export const First = () => {
    return <div class={s.card}>
        <img src={pig} />
        <h2>会挣钱<br />还要会省钱</h2>
    </div>
}

First.displayName = 'First'