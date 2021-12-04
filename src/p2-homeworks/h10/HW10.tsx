import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitStateType, loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const {isLoading} = useSelector<AppStoreType, InitStateType>(state => state.isLoading)

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        setTimeout(()=>dispatch(loadingAC(false)),2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
