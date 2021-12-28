import React from "react";
import s from "../../common/common-styles/theme-options/theme-options.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";

const themes = ['default', 'dark', 'light', 'red', 'light-green'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch()

    const onChangeOption = (value: ThemeType) => {
        dispatch(changeThemeAC(value))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperRadio name='radio'
                            value={theme}
                            options={themes}
                            onChangeOption={onChangeOption}/>
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
