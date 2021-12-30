import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Box, Slider} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    value: number
    onChangeRange?: (newValue: number) => void
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className, value,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    /*    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e) // сохраняем старую функциональность

            onChangeRange && onChangeRange(+e.currentTarget.value)
        }*/

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange&&onChangeRange(newValue as any);
    };

    const marks = [
        {
            value: 0,
            label: '0'
        },
        {
            value: 100,
            label: '100'
        },
    ]
    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    // @ts-ignore
    return (
        <Box sx={{width: 300, padding: "10px 0px"}}>
            Range
            <Slider
                getAriaLabel={() => 'Range'}
                value={value}
                step={10}
                marks={marks}
                valueLabelDisplay="on"
                onChange={handleChange}
                className={finalRangeClassName}
            />
        </Box>
    )
}

export default SuperRange
