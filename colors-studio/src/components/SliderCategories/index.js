import React, { useState } from 'react'
import CategoryName from '../CategoryName';

const SliderCategories = ({ name, videos }) => {

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

  const filteredVideos = videos.filter((video) => video.categoryVideo === name);

  return (
    <section className='bg-primary-2'>
      <div className='flex flex-col container'>
        <CategoryName className='rounded text-white font-normal text-4xl mb-10 py-3 px-6 uppercase bg-primary w-max' name={name} />

        <div className='flex flex-row gap-8  overflow-x-scroll scroll-none'
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}>

        {filteredVideos.map((video) => (
          <div>
            <div key={video.id}>
              <a href={video.link} target='_blank'>
                <img src={video.image} alt={video.description} className='h-52 w-auto fit object-cover rounded mb-1 border-imgs' />
                </a>
            </div>
          </div>
        ))}
        
        </div>
      </div>
    </section>
  );
};

export default SliderCategories;