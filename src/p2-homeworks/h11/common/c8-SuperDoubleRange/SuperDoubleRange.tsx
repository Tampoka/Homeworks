import React, {Dispatch, SetStateAction} from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    value?: number | number[]
    // getAriaLabel: () => void
    valueLabelDisplay: string
    setRange:Dispatch<SetStateAction<number | number[]>>
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({value,valueLabelDisplay,setRange,...restProps}
        // onChangeRange, value,
        // min, max, step, disable, ...
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event:Event, newValue:number | number[]) => {
        setRange(newValue as any);
    };
    return (
        <Box sx={{width: 300}}>
            DoubleRange
            <Slider
                getAriaLabel={() => 'DoubleRange'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
             />
        </Box>
    )
}

export default SuperDoubleRange
