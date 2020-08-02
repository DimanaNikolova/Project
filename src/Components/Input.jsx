import React from 'react'

const Input = ({label, id, value, onChange,type,placeholder}) => {
    return (
        <div className="form-control">
            <label htmlFor={id}>
                {label}:
            </label>
            <input placeholder={placeholder} id={id} value={value} type={type} onChange={onChange} />
        </div>
    )
}

export default Input