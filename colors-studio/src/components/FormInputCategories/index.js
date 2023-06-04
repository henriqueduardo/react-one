import React from 'react'

const InputSelect = (props) => {
  return (
    <>
        <div className='flex flex-col'>

            <label className='text-white text-2xl font-light mb-3'>{props.label}</label>

            <select id="category" value={props.value} onChange={props.onChange} name="category" className='text-white py-5 px-3 text-lg bg-input rounded border-none outline-none shadow'>
                        <option>Boombap</option>
                        <option>R&B</option>
                        <option>Jazz</option>
            </select>

        </div>
    </>
  )
}

export default InputSelect;