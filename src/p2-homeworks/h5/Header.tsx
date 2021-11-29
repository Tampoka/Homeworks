import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {PATH} from './AppRoutes';
import s from './Header.module.css'
import style from '../../Btn.module.css'

function Header() {
    const [showNav, setShowNav]=useState(false)
    const toggleShowNav=()=>setShowNav(!showNav)
    const navClass=s.navContainer+' '+(showNav?s.visible:'')
    return (
        <div className={s.header}>
            <div className={navClass}>
                <Link className={style.glowBtn} to='/'>Pre-Junior</Link>
                <Link className={style.glowBtn} to={PATH.JUNIOR}>Junior</Link>
                <Link className={style.glowBtn} to={PATH.JUNIOR_PLUS}>Junior+</Link>
                <div>
                    <button onClick={toggleShowNav}>?</button>
                </div>
            </div>
        </div>
    )
}

export default Header
