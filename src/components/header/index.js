import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

import style from './style.module.scss'
import logoHeader from '../../assets/img/header-logo.png'

export default function Header() {

    const [linkClasses, setLinkClasses] = useState({
        home: style.navItem,
        education: style.navItem,
        skills: style.navItem,
        experience: style.navItem
    })

    const handleNavItem = (pathname) => {
        let newLinkClasses = {...linkClasses}
        Object.keys(newLinkClasses).forEach(k=>newLinkClasses[k]=style.navItem)
        newLinkClasses[pathname]=clsx(style.navItem, style.navItem__focused)
        setLinkClasses(newLinkClasses)
        window.scroll({
            top: 0,
            behavior: 'instant'
        })
    }

    const handleTitle = (pathname) => {
        document.title = pathname!=='home'
            ?'Đức Anh Bùi - ' + pathname.toUpperCase()
            :'Đức Anh Bùi'
    }

    const getCurPathname = () => {
        return (window.location.pathname.length <= 12)
            ?'home'
            :window.location.pathname.substring(11)
    }

    const handleScroll = () => {
        window.scroll({
            top: document.body.offsetHeight,
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        handleNavItem(getCurPathname())
    }, [])

    useEffect(()=>{
        handleTitle(getCurPathname())
    }, [linkClasses])

    useEffect(() => {
        window.addEventListener('popstate', e => {
            handleNavItem(getCurPathname())
        })

        return (
            window.removeEventListener('popstate',  e => {
                handleNavItem(getCurPathname())
            })
        )
    }, [])

    return (
        <div className={style.container}>
            <div className='grid wide height-100pc'>
                <div className={clsx('row height-100pc', style.row)}>
                    <a className={clsx('col xl-2 l-3 m-4 s-6', style.logoContainer)} href='/Portfolio'>
                        <img src={logoHeader} width={'65'} className={style.logoImg} alt='logo.png'/>
                        <p className={style.logoText}>Duc Anh Bui</p>
                    </a>

                    <div className={clsx('col xl-6 xl-o-4 l-6 l-o-3 m-1 m-o-7 s-2 s-o-4 height-100pc', style.navContainer)}>
                        <div className={style.navButtonContainer}>
                            <GiHamburgerMenu/>
                        </div>
                        <ul className={style.navBar}>
                            <li><Link onClick={()=>handleNavItem('home')} className={linkClasses.home} to={'/Portfolio'}>Home</Link></li>
                            <li><Link onClick={()=>handleNavItem('education')} className={linkClasses.education} to={'/Portfolio/education'}>Education</Link></li>
                            <li><Link onClick={()=>handleNavItem('skills')} className={linkClasses.skills} to={'/Portfolio/skills'}>Tech stack</Link></li>
                            <li><Link onClick={()=>handleNavItem('experience')} className={linkClasses.experience} to={'/Portfolio/experience'}>Experience</Link></li>
                            <li><span onClick={()=>handleScroll()} className={style.navItem}>Contact</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}