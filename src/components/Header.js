import React from 'react'
import { HiShoppingCart } from "react-icons/hi";
import {HiMenu} from 'react-icons/hi';



 function Header(){
     const style = {fontSize:'23px'}
    return (
      <div className='flex flex-row items-center justify-between bg-white ' >
        <div className='flex-none mr-3'>
          <img className='h-16 w-25 cursor-pointer' src={'images/adidas-logo-1.png'} alt='test'/>
         </div>
       
       <div className='w-4/5 hidden md:block '>
       <nav className='pl-10 flex gap-8 font-semibold cursor-pointer font-poppins'>
          <a href='#' className='hover:text-primary '>Best Selling</a>
          <a href='#' className='hover:text-primary'>Mens</a>
          <a href='#' className='hover:text-primary'>Womens</a>
          <a href='#' className='hover:text-primary'>Kids</a>
        </nav>
       </div>
        <div className='hidden md:block'>
        <div className='flex flex-row items-center text-xs '>
        <div className='bg-secondary p-2 mr-2 rounded-full'><HiShoppingCart style={style}/></div>
        <div className='w-14 pl-1 cursor-pointer text-xs'>
        <p className='font-semibold'>My Cart</p>
          <span className='font-thin'> 3 items</span>
         </div>
         <div className='px-3'>
         <span className='border-l-2 p-1  border-accent '></span>
         </div>
         </div>
        </div>

        <div className=''>
        <button type="button" className='border p-1 px-4 w-52 font-semibold mr-5 border-primary rounded-md  text-primary font-poppins'>Login / Register</button>
           <div className='bg-secondary p-2 rounded-full md:hidden align-middle inline-block '><HiMenu style={style}/></div>
        </div>
          
      </div>
      )
  }


export default Header
