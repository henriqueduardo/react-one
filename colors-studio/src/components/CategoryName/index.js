import React from 'react'

const CategoryName = (props) => {
  return (
    <>
        <div className={props.className}>
            <p>{props.name}</p>
        </div>
    </>
  )
}

export default CategoryName;