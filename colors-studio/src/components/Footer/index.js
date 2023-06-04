import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <>
        <footer className='bg-primary-2 footer-bg text-white'>
            <span className='text-4xl font-bold uppercase text-center pt-5 block'>colors * studios</span>
            <span className="text-xl font-bold block uppercase text-center pb-16 no-underline hover:underline"><a href="https://www.youtube.com/@COLORSxSTUDIOS" target='_blank'>a colors show</a></span>
        </footer>
    </>
  )
}

export default Footer;