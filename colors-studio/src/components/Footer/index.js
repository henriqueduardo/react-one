import React from 'react';
import "./style.css";
import colors from "../../img/colors.png";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai"

const Footer = () => {
  return (
    <>
        <footer className='bg-primary-2 footer-bg text-white'>
          <img src={colors} alt='colors logo' className='object-contain mx-auto w-5/12'/>

            <span className="text-sm font-bold block uppercase text-center">colors showcases exceptional talent from all around the globe, focused on the most distinctive new artists and original sounds</span>

            <ul className='flex flex-row justify-center gap-2 pb-16 pt-4'>
              <li>
                <a href='youtube.com' target='_blank'>
                  <AiFillYoutube className='text-3xl'/>
                </a>
              </li>
              <li>
                <a href='youtube.com' target='_blank'>
                  <AiFillInstagram className='text-3xl'/>
                </a>
              </li>
              <li>
                <a href='youtube.com' target='_blank'>
                  <AiFillGithub className='text-3xl'/>
                </a>
              </li>
            </ul>
        </footer>
    </>
  )
}

export default Footer;