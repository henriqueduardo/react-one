import React, { useState } from 'react';
import "./style.css";

const Slider = () => {

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.pageX - event.currentTarget.offsetLeft);
        setScrollLeft(event.currentTarget.scrollLeft);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        event.preventDefault();
        const x = event.pageX - event.currentTarget.offsetLeft;
        const walk = (x - startX) * 3;
        event.currentTarget.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

  return (
    <>
        <section className='slider-bg relative z-10'>
           <div className='flex flex-row gap-8 container w-full scroll-none overflow-y-scroll relative bottom-32'
           onMouseDown={handleMouseDown}
           onMouseMove={handleMouseMove}
           onMouseUp={handleMouseUp}
           onMouseLeave={handleMouseUp}>
                <a href="https://youtu.be/YWrMaXfiHEo" target='_blank'>
                  <img src='https://i.ytimg.com/vi/YWrMaXfiHEo/maxresdefault.jpg' alt='Thumbnail' className='h-52 w-auto object-cover rounded mb-1 border-4 border-imgs'/>
                </a>
                <a href="https://youtu.be/GzMegedJ0hw" target='_blank'>
                  <img src='https://i.ytimg.com/vi/GzMegedJ0hw/maxresdefault.jpg' alt='Thumbnail' className='h-52 w-auto object-cover rounded mb-1 border-4 border-imgs'/>
                </a>
                <a href="https://youtu.be/Nt8gaY0FofE" target='_blank'>
                  <img src='https://i.ytimg.com/vi/Nt8gaY0FofE/maxresdefault.jpg' alt='Thumbnail' className='h-52 w-auto object-cover rounded mb-1 border-4 border-imgs'/>
                </a>
                <a href="https://youtu.be/DPrUf1P9BWI" target='_blank'>
                  <img src='https://i.ytimg.com/vi/DPrUf1P9BWI/maxresdefault.jpg' alt='Thumbnail' className='h-52 w-auto object-cover rounded mb-1 border-4 border-imgs'/>
                </a>
                
           </div> 
        </section>
    </>
  )
}

export default Slider;