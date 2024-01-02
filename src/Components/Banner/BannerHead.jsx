import React from 'react'
import { Link } from 'react-router-dom';
import './banner.css';

function BannerHead({title, subTitle}) {
  return (
    <div className='flex items-center w-full h-[70vh] justify-center text-white bg-image'>
      <div className='text-center'>
        <h2 className='text-[28px] font-bold uppercase pb-3'>{title}</h2>
        <h4 className='text-[16px] font-normal'><Link to='/' className='text-primary'>Home </Link>/ {subTitle}</h4>
      </div>
    </div>
  )
}

export default BannerHead