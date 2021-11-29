import React from 'react'
import {Link} from 'react-router-dom'
import {PATH} from './AppRoutes';
import s from './Header.module.css'
import style from '../../Btn.module.css'

function Header() {
    return (
        <div className={s.navContainer}>
            <><Link className={style.glowBtn} to='/'>Pre-Junior</Link>
                <Link className={style.glowBtn} to={PATH.JUNIOR}>Junior</Link>
                <Link className={style.glowBtn} to={PATH.JUNIOR_PLUS}>Junior+</Link></>
            <button>?</button>
        </div>
    )
}

export default Header
