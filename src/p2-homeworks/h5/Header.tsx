import React, {useState} from 'react'
import {PATH} from './AppRoutes';
import s from './Header.module.css'
import style from '../../common/common-styles/GlowBtn.module.css'
import CustomLink from "./CustomLink";

function Header() {
    const [showNav, setShowNav] = useState(false)
    const toggleShowNav = () => setShowNav(!showNav)

    const navClass = s.navContainer + ' ' + (showNav ? s.visible : '')
    return (
        <div className={s.header}>
            <div className={navClass}>
                <CustomLink className={style.glowBtn} to='/'>Pre-Junior</CustomLink>
                <CustomLink className={style.glowBtn} to={PATH.JUNIOR}>Junior</CustomLink>
                <CustomLink className={style.glowBtn} to={PATH.JUNIOR_PLUS}>Junior+</CustomLink>
                <div>
                    <button onClick={toggleShowNav}><i className="fas fa-mouse"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Header
