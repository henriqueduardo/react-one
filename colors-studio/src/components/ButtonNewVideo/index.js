import React from 'react';

const ButtonNewVideo = (props) => {
  return (
    <>
    <button className={props.className} type={props.type}>
        {props.text}
    </button>
    </>
  )
}

export default ButtonNewVideo;