import React from 'react'

const Slider = () => {
  return (
    <>
        <section className='bg-primary-2'>
           <div className='flex flex-row gap-8 container relative h-32 w-full'>
                <img src='https://i.ytimg.com/vi/GzMegedJ0hw/maxresdefault.jpg' alt='Thumbnail' className='h-52 w-96 object-cover rounded mb-1 border-4 border-zinc-900 relative bottom-32'/>
                <img src='https://i.ytimg.com/vi/GzMegedJ0hw/maxresdefault.jpg' alt='Thumbnail' className='h-52 w-96 object-cover rounded mb-1 border-4 border-zinc-900 relative bottom-32'/>
                <img src='https://i.ytimg.com/vi/GzMegedJ0hw/maxresdefault.jpg' alt='Thumbnail' className='h-52 w-96 object-cover rounded mb-1 border-4 border-zinc-900 relative bottom-32'/>
           </div> 
        </section>
    </>
  )
}

export default Slider;