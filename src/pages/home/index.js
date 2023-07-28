import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import clsx from 'clsx'

import style from './style.module.scss'
import HomeButton from '../../components/button'
import BackgroundLayer from '../../components/backgroundLayer'
import avatar1 from '../../assets/img/avatar.png'
import avatar2 from '../../assets/img/avatar2.png'

export default function HomePage() {

    const avatarRef1 = useRef()
    const avatarRef2 = useRef()
    const dynamicText = useRef()

    const handleContact = () => {
        window.scroll({
            top: document.body.offsetHeight,
            behavior: 'smooth'
        })
    }

    const handleResume = () => {
        window.open(
            'https://drive.google.com/file/d/1ePDR3mBKt4xz0TmWYDrPvk1Hw4xGoBO6/view?usp=sharing',
            '_blank',
            'noreferrer'
        )
    }

    useEffect(()=> {
        const interval = setInterval(()=> {
            if(avatarRef2.current.className === style.hidden) {
                avatarRef2.current.className = style.visible
                avatarRef1.current.className = style.hidden
            } else {
                avatarRef1.current.className = style.visible
                avatarRef2.current.className = style.hidden
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    useEffect(()=>{
        const typed = new Typed(dynamicText.current, {
            strings: [
                `<i class="${style.orange}">Backend Development</i>`, 
                `<i class="${style.green}">Frontend Development</i>`, 
                `<i class="${style.yellow}">Mobile Development</i>`,],
            typeSpeed: 50,
            loop: true,
            backSpeed: 50
        })

        return () => typed.destroy()
    }, [])

    return (
        <BackgroundLayer name='home'>
            <div className={clsx('grid wide', style.grid)}>
                <div className={clsx('row', style.row)}>
                    <div className={clsx('col xl-6 l-6 m-12 s-12', style.firstCol)}>
                        <p className={style.bigIntro}>Hi there,<br/>I'm <i>Đức Anh Bùi</i></p>
                        <p className={style.flexIntro}>I am into <span ref={dynamicText}></span></p>
                        <p className={style.detail}>
                            I'm a Fullstack Web developer. 
                            <br/>I love coding, bringing ideas to life and creating useful products.
                        </p>
                        <div className={style.buttonContainer}>
                            <HomeButton content={'Contact me'} onclick={handleContact}/>
                            <HomeButton content={'See my resume'} onclick={handleResume}/>
                        </div>
                    </div>

                    <div className={clsx('col xl-6 l-6 m-0 s-0', style.secondCol)}>
                        <img 
                            className={style.visible} 
                            ref={avatarRef1} src={avatar1} 
                            alt='avatar.png' />
                        <img 
                            className={style.hidden} 
                            ref={avatarRef2} src={avatar2} 
                            alt='avatar.png' />
                    </div>
                </div>
            </div>`
        </BackgroundLayer>
    )
}