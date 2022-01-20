import React from "react";


const InputBox = ({readOnly,disable, onChange,name,type,id,className,value,placeholder, ...props}) => {
    return (
        <input name={name} readOnly={readOnly}  onChange={onChange} disabled={disable}   value={value}  type={type} id={id} className={className} placeholder={placeholder} {...props}
          autoComplete ="off"
        />
    )
}

export default InputBox