import React from 'react'
import './GoogleHome.css'
import mic from '../Images/mic.svg';
import lens from '../Images/lens.png';
import search from '../Images/search.svg';
import Navbar from '../Navbar/Navbar'
import youtube from '../Images/youtube.png';
import twitter from '../Images/twitter.png';
import whatsapp from '../Images/whatsapp.png';
import facebook from '../Images/facebook.png';
import apple from '../Images/apple.png';
import gmail from '../Images/gmail.png';
import reddit from '../Images/reddit.png';

interface ShortcutProps {
  image: any,
  title: string
}
function Shortcut({ image, title }: ShortcutProps) {
  return (
    <div className="col">
      <img src={image} alt={title} height={"20px"} />
      <h6>{title}</h6>
    </div>
  )
}
export default function GoogleHome() {
  return (
    <div className='container'>
      <Navbar />
      <h1 className='google'>Google</h1>
      <div className="search-block">
        <div className="search-icon">
          <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" /></svg>
        </div>
        <input type="text" placeholder='Search Google or type a URL' className="search-bar" />
        <img src={mic} alt="Mic" />
        <img src={lens} alt="Lens" />
      </div>
      <div className="body">
        <div className="shortcuts">
          <div className="row">
            <Shortcut image={apple} title="Apple" />
            <Shortcut image={twitter} title="Twitter" />
            <Shortcut image={apple} title="Apple" />
            <Shortcut image={twitter} title="Twitter" />
            <Shortcut image={apple} title="Apple" />
          </div>
          <div className="row">
            <Shortcut image={reddit} title="Reddit" />
            <Shortcut image={gmail} title="Gmail" />
            <Shortcut image={reddit} title="Reddit" />
            <Shortcut image={gmail} title="Gmail" />
            <Shortcut image={reddit} title="Reddit" />
          </div>
        </div>
      </div>
    </div>
  )
}
