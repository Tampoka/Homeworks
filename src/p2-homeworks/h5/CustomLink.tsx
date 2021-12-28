import React from 'react';
import {Link, LinkProps, useMatch, useResolvedPath} from 'react-router-dom';
import s from './CustomLink.module.css'
import style from '../../GlowBtn.module.css'

const CustomLink = ({children, to, ...props}: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});

    return (
        <div>
            <Link to={to}
                  {...props}
                  className={style.glowBtn + ' ' + (match ? s.active : '')}>
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;