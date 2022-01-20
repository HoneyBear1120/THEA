import React from "react"
import Select from 'react-select'

const SelectInputBox = ({ name, value, onChange, options, placeholder, styles, className}) => {
    return (
        <Select
            name={name}
            value={value}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            styles={styles}
            className={className}
        />
        )
}

export default SelectInputBox