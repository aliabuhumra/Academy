import React , { useState } from 'react'
import './Header.css';

import { NavLink } from 'react-router-dom';


const JoinUs = () => {
  const [click , setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
  return (
    <>
    <div className='px-32 flex flex-col justify-between items-center h-auto bg-background bg-no-repeat bg-left bg-[length:80%_100%] '>
          {/* List */}
            <div className={click ? "flex xl:flex items-center lg:justify-between md:justify-between w-full relative menu" 
            : "flex xl:flex items-center lg:justify-between md:justify-between w-full relative menu open" }
                  >
                <NavLink to="/">
                    <img src="/assets/icons/tg_logo.svg" alt="" 
                       className={click ? "sm:absolute sm:right-10 sm:top-11 md:right-12 md:top-12 logo"
                    : "sm:absolute sm:right-10 sm:top-11 md:right-12 md:top-12  sm:hidden md:hidden lg:block logo" } />
                </NavLink>
                <div 
                className='xl:hidden lg:hidden text-5xl flex  sm:absolute sm:left-10 sm:top-11 md:left-11 md:top-12 z-30 text-gray'
                  onClick={handleClick}   >
                    <i className={click ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
                </div>
                <ul className={click ? "flex xl:flex lg:flex justify-between w-3/4 text-lg md:text-sm listItems sm:hidden md:hidden lg:pl-16 lg:pr-8" 
                : "flex xl:flex justify-between w-3/4 text-lg md:text-lg listItems lg:pl-16 lg:pr-8" }>
                    <li><NavLink to="/"  className='link link-underline link-underline-black hover:cursor-pointer '>الصفحة الرئيسية</NavLink></li>
                    <li><a href="#about-us"  className='link link-underline link-underline-black hover:cursor-pointer'>من نحـن</a></li>
                    <li><a href="#services"  className='link link-underline link-underline-black hover:cursor-pointer'>ماذا نقـدم</a></li>
                   <li><a  href="#features"  className='link link-underline link-underline-black hover:cursor-pointer'>المسـارات</a></li>
                    <li><a href="#ourwok"  className='link link-underline link-underline-black hover:cursor-pointer'>أعمالنـا</a></li>
                    <li><a href="#ourteam"  className='link link-underline link-underline-black hover:cursor-pointer'>فريقنـا</a></li>
                </ul>

             
            </div>
      <div className='p-10 text-center flex justify-between items-center mx-auto h-[75vh]'>

      <h2 className='text-5xl mb-11 font-black'>قريبا ...</h2>
      </div>
      
    </div>
    </>
  )
}

export default JoinUs;


