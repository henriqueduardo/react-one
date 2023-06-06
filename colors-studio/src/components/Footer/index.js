import React from 'react';
import "./style.css";
import colors from "../../img/colors.png";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai"
import { FaSpotify, FaYoutube } from "react-icons/fa";
import { RiSpotifyFill } from "react-icons/ri"

const Footer = () => {
  return (
    <>
        <footer className='bg-primary-2 footer-bg text-white'>
          <img src={colors} alt='colors logo' className='object-contain mx-auto w-5/12'/>

            <span className="text-sm font-bold block uppercase text-center">colors showcases exceptional talent from all around the globe, focused on the most distinctive new artists and original sounds</span>

            <ul className='flex flex-row justify-center gap-2 pb-16 pt-4'>
              <li>
                <a href='youtube.com' target='_blank'>
                  <FaYoutube className='text-3xl hover:text-orange-500'/>
                </a>
              </li>
              <li>
                <a href='youtube.com' target='_blank'>
                  <RiSpotifyFill className='text-3xl hover:text-orange-500'/>
                </a>
              </li>
              <li>
                <a href='youtube.com' target='_blank'>
                  <AiFillInstagram className='text-3xl hover:text-orange-500'/>
                </a>
              </li>
              <li>
                <a href='youtube.com' target='_blank'>
                  <AiFillGithub className='text-3xl hover:text-orange-500'/>
                </a>
              </li>
            </ul>
        </footer>
    </>
  )
}

export default Footer;