import React, { useState } from 'react'
import { Input } from 'antd'
const InputCustom = ({ labelContent, placeholder, iconPrefix,name,onChange,value,error,handleBlur,touched,reaOnly,onClick }) => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <label htmlFor="" className='font-medium mb-2'>{labelContent}</label>
                <Input onClick={onClick} readOnly={reaOnly?reaOnly:false} onBlur={handleBlur} value={value} onChange={onChange} name={name}  size="large" placeholder={placeholder} prefix={iconPrefix} />
                {error && touched && <p className='text-sm text-red-500 mt-2'>{error}</p>}
            </div>
        </div>
    )
}

export default InputCustom