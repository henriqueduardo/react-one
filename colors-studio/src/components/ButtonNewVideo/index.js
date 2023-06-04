import React from 'react';

const ButtonNewVideo = (props) => {
  return (
    <>
    <button className={props.className}>
        {props.text}
    </button>
    </>
  )
}

export default ButtonNewVideo;