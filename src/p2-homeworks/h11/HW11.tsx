import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onRangeChange = (newValue: number) => {
        setValue1(newValue)
    }
    const onDoubleRangeChange = (values: [number, number]) => {
        setValue1(values[0]);
        setValue2(values[1]);
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.rangeContainer}>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    value={value1}
                    onChangeRange={onRangeChange}
                />
            </div>

            <div className={s.rangeContainer}>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onDoubleRangeChange}
                    value={[value1, value2]}
                />
                {/*<span>{value2}</span>*/}
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    )
}

export default HW11
