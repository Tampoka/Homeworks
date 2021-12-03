import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)
    const [showClock, setShowClock] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            // const id: number = window.setInterval(() => {
            setDate(new Date())// setDate
        }, 1000)
        setTimerId(id)
        setTimeout(() => setShowClock(true), 1000)
    }

    const onMouseEnter = () => {
        setShow(true)// show
    }
    const onMouseLeave = () => {
        setShow(false)// close
    }

    const stringTime = date?.toLocaleTimeString() || <div className={s.timer}></div>// fix with date // adding empty div(stroke) in case there is no date, for page not to shrink or
    const stringDate = date?.toLocaleDateString() || <br/> // fix with date

    return (
        <div className={s.clock}>
            <div className={s.timer + ' ' + s.animated}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {!showClock ? "Time is :" : stringTime}
            </div>

            {show ? (
                    <div className={s.date}>
                        {stringDate}
                    </div>
                )
                : (<br/>)}

            <div className={s.buttons}><SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
