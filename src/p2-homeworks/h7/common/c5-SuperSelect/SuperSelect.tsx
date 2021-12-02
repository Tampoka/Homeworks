import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: JSX.Element[] = options ? options.map((o, index) => {
        return (
            <option
                className={s.option}
                key={index}
                value={o}>
                {o}
            </option>)
    }) : []// map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)

        onChange && onChange(e)
        // onChange, onChangeOption
    }

    return (
        <div className={s.selectContainer}>
            <label className={s.selectLabel}>--Choose from--</label>
            <select onChange={onChangeCallback}
                    {...restProps}
                className={s.select}
            >
                {mappedOptions}
            </select></div>
    )
}

export default SuperSelect
