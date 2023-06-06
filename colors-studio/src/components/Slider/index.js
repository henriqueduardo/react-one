import React, { useState } from 'react';
import "./style.css";
import { VscColorMode } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

const Slider = ( { name, videos } ) => {

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
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoClick = (video) => {
      setSelectedVideo(video);
    };
  
    const handleCloseModal = () => {
      setSelectedVideo(null);
    };

  return (
    <>
    <section className='slider-bg relative z-10'>
           <div className='flex flex-row gap-8 container w-full scroll-none overflow-y-scroll relative bottom-32'
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {filteredVideos.map((video) => (
            <div key={video.id}>
              <div>
                <img
                  src={video.image}
                  alt={video.description}
                  className='h-52 w-auto fit object-cover rounded mb-1 border-imgs cursor-pointer thumb-img transform hover:scale-95'
                  onClick={() => handleVideoClick(video)}
                />
              </div>
            </div>
          ))}
        </div>
  </section>
    {selectedVideo && (
          <div className='fixed z-10 inset-0 overflow-y-hidden'>
            <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
              <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
                <div className='absolute inset-0 bg-primary opacity-75'></div>
              </div>
              <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
                &#8203;
              </span>
              <div
                className='inline-block align-bottom bg-primary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle xl:max-w-3xl sm:w-full'
                role='dialog'
                aria-modal='true'
                aria-labelledby='modal-headline'
              >
                <div className='bg-primary px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start justify-between'>
                    <div className='mt-3 sm:mt-0 sm:text-left'>
                      <h3 className='text-lg leading-6 font-medium text-white' id='modal-headline'>
                        {selectedVideo.title}
                      </h3>
                      <div className='mt-2'>
                        <p className='text-sm text-neutral-300'>{selectedVideo.description}</p>
                      </div>
                      <div className='mt-2 mb-2'>
                        <p className='text-sm text-neutral-300 flex items-center gap-2 uppercase'>
                          <VscColorMode/>
                          {selectedVideo.categoryVideo}</p>
                      </div>
                    </div>
                  <div className='bg-primary sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-2 font-medium text-white sm:w-auto sm:text-sm hover:bg-orange-600 transition-all'
                    onClick={handleCloseModal}
                  >
                    <IoMdClose/>
                  </button>
                  </div>
                  </div>
                </div>

                <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${selectedVideo.link.split('/').pop()}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='w-full h-video-modal'>
                </iframe>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Slider;