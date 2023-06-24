import style from './style.module.scss'

export default function PageHeader ({title, icon}) {
    return (
        <div className={style.container}>
            <p className='pageTitle'><span>{icon}</span>{title}</p>
        </div>
    )
}