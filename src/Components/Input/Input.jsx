import React from 'react'

function Input(props) {
    const { placeholder } = props;
  return (
    <div className='inputContainer'>
        <label htmlFor="">{placeholder}</label>
        <input {...props}className='inp' placeholder={placeholder} />
    </div>
  )
}

export default Input