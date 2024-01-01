import React from 'react'
import { Link } from 'react-router-dom'

function BannerHead({title, subTitle}) {
  return (
    <div className='flex items-center w-full h-[60vh] justify-center bg-gray-200'>
      <div className='text-center'>
        <h2 className='text-[28px] font-bold uppercase pb-3'>{title}</h2>
        <h4 className='text-[16px] font-normal'><Link to='/' className='text-blue-600'>Home </Link>/ {subTitle}</h4>
      </div>
    </div>
  )
}

export default BannerHead