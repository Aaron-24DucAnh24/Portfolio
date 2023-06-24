import style from './style.module.scss'

export default function HomeButton({onclick, content}) {
    return (
        <div className={style.container} onClick={()=>onclick()}>
            <p className={style.text}>{content}</p>
        </div>
    )
}