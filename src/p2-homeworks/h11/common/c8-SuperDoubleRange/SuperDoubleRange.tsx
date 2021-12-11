import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    value?: number | number[]
    onChangeRange: (values: [number, number]) => void
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({value, onChangeRange, ...restProps}
                                                               // onChangeRange, value,
                                                               // min, max, step, disable, ...
) => {
    // сделать самому, можно подключать библиотеки

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

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue as any)
    };
    return (
        <Box sx={{width: 300, padding: "10px 0px"}}>
            DoubleRange
            <Slider
                value={value}
                step={10}
                onChange={handleChange}
                valueLabelDisplay="on"
                marks={marks}
                color="primary"
            />
        </Box>
    )
}

export default SuperDoubleRange
