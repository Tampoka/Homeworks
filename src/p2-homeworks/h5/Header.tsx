import React, {useState} from 'react'
import {PATH} from './AppRoutes';
import s from './Header.module.css'
import style from '../../common/common-styles/GlowBtn.module.css'
import styles from '../../common/common-styles/theme-options/theme-options.module.css'
import CustomLink from "./CustomLink";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

function Header() {
    const [showNav, setShowNav] = useState(true)
    const toggleShowNav = () => setShowNav(prev=>!showNav)
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)

    const navClass = ` ${s.navContainer}   ${showNav ? s.visible : ''}`
    return (
        <div className={`${s.header} ${styles[theme]}`}>
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
