import React, { useEffect, useState } from 'react';
import "./style.css";
import CategoryName from '../../components/CategoryName';
import Slider from '../../components/Slider';
import SliderCategories from '../../components/SliderCategories';

const Home = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://json-colors.vercel.app/videos')
        .then((response) => response.json())
        .then((data) => setVideos(data))
        .catch((error) => console.error(error));

    }, []);

  return (
    <>
        <main className='main-bg text-white'>
            <div className='container'>
                <div className='mt-40 mb-40 flex flex-row items-center gap-12 main-box'>
                    
                    <div>
                        <CategoryName className="rounded text-white font-normal text-4xl mb-10 py-3 px-6 uppercase bg-primary w-max" name="drill"/>
                        <h1 className='text-5xl font-semibold text-white mb-3 text-gradient py-2'>Kwengface</h1>
                        <p className='text-xl font-light w-9/12'>South London MC Kwengface <strong className='highlight-gradient'><a href="https://www.instagram.com/kwengface/" target='_blank' className='no-underline'>@kwengface2897</a></strong> shines a light on the UK drill scene with a fiery performance of his latest single ‘Freedom’.</p>
                    </div>

                    <div className='main-video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZMKQ-yX1aNU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='video border-imgs thumb-img'></iframe>
                    </div>

                </div>
            </div>
        </main>

        <Slider name="Drill" videos={videos}/>

        <SliderCategories name="Boombap" videos={videos}/>

        <SliderCategories name="R&B" videos={videos}/>

        <SliderCategories name="Jazz" videos={videos}/>

        <SliderCategories name="Favoritos" videos={videos}/>
    </>
  )
}

export default Home;