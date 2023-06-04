import React from 'react';
import "./style.css";
import CategoryName from '../../components/CategoryName';
import Slider from '../../components/Slider';
import SliderCategories from '../../components/SliderCategories';

const Home = () => {
  return (
    <>
        <main className='main-bg text-white'>
            <div className='container'>
                <div className='mt-40 mb-40 flex flex-row items-center gap-12'>
                    
                    <div>
                        <CategoryName className="rounded text-white font-normal text-4xl mb-10 py-3 px-6 uppercase bg-primary w-max" name="drill"/>
                        <h1 className='text-5xl font-semibold text-white mb-3'>Kwengface</h1>
                        <p className='text-xl font-light w-9/12'>South London MC Kwengface <strong className='highlight'><a href="https://www.instagram.com/kwengface/" target='_blank' className='strong-link'>@kwengface2897</a></strong> shines a light on the UK drill scene with a fiery performance of his latest single ‘Freedom’.</p>
                    </div>

                    <div className='main-video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZMKQ-yX1aNU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='video'></iframe>
                    </div>

                </div>
            </div>
        </main>

        <Slider/>

        <SliderCategories name="boombap"/>

        <SliderCategories name="R&b"/>

        <SliderCategories name="jazz"/>
    </>
  )
}

export default Home;