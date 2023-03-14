import s from "./Welcome.module.scss"
import cloud from "../../assets/icons/cloud.svg"

export const Forth = () => <div class={s.card}>
    <svg>
        <use xlinkHref='#cloud'></use>
    </svg>
    <h2>云备份<br />再也不怕数据丢失</h2>
</div>

Forth.displayName = 'Forth'