import React from 'react';

const TextareaDescription = (props) => {
  return (
    <>
            <div className='flex flex-col'>
                        <label className='text-white text-2xl font-light mb-3'>{props.label}</label>
                        <textarea type={props.type} 
                        name={props.name} 
                        value={props.value} 
                        onChange={props.onChange} 
                        placeholder={props.placeholder} 
                        className='text-white py-5 px-3 text-lg bg-input rounded border-none outline-none shadow h-40' 
                        required/>
            </div>
    </>
  )
}

export default TextareaDescription;