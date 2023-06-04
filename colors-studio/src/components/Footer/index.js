import React from 'react';
import "./style.css";
import colors from "../../img/colors.png"

const Footer = () => {
  return (
    <>
        <footer className='bg-primary-2 footer-bg text-white'>
          <img src={colors} alt='colors logo' className='object-contain mx-auto w-5/12'/>
            <span className="text-xl font-bold block uppercase text-center pb-16 no-underline hover:underline"><a href="https://www.youtube.com/@COLORSxSTUDIOS" target='_blank'>a colors show</a></span>
        </footer>
    </>
  )
}

export default Footer;