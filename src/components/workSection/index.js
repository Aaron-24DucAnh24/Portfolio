import clsx from 'clsx'

import style from './style.module.scss'

export default function WorkSection({img, position, organization, period, completed})  {
    const periodStyle =  clsx({
        [style.period]: true,
        [style.green]: completed,
    })

    return (
        <div className={clsx('grid' ,style.container)}>
            <div className={clsx('row', style.row)}>
                <img src={img} className='col xl-3 l-3 m-0 s-0' alt=''></img>
                <div className={clsx('col xl-9 l-9 m-12 s-12', style.detailContainer)}>
                    <p className={style.position}>{position}</p>
                    <p className={style.organization}>{organization}</p>
                    <p className={periodStyle}>{period}</p>
                </div>
            </div>
        </div>
    )
}