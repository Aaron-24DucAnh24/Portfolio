import style from './style.module.scss'

export default function SkillBox({imgSrc, name}) {
    return (
        <div className={style.container}>
            <img src={imgSrc} alt={name}></img>
            <p className={style.name}>{name}</p>
        </div>
    )
} 