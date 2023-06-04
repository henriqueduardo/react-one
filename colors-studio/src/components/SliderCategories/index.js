import React from 'react'
import CategoryName from '../CategoryName';

const SliderCategories = (props) => {
  return (
        <section className='bg-primary-2'>

            <div className='flex flex-col container'>

                <CategoryName className="rounded text-white font-normal text-4xl mb-10 py-3 px-6 uppercase bg-primary w-max" name={props.name}/>

                <div className='flex flex-row gap-8 h-auto w-full'>
                        <img src='https://core.colorsxstudios.com/wp-content/uploads/2022/02/Background_blue2-800x886.jpg' alt='Thumbnail' className='h-52 w-96 object-cover rounded mb-1 border-4 border-zinc-900'/>
                </div>
            </div>

        </section>
  )
}

export default SliderCategories;