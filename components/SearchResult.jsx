import React from 'react'
import Image from 'next/image'

const imageStyle = {
  borderRadius: '3%',
}

export const SearchResult = ({imageUrl, title}) => {
    return (
      <div className='w-auto h-[420px] border-2 rounded-2xl'>
      <div className='p-2'>
        <Image 
          unoptimized
          src={imageUrl}
          alt='image'
          width={380}
          height={0}
          property='responsive'
          style={imageStyle}
        />
      </div>
      <div className='flex justify-center items-center h-2/6 p-12'>
        <p>{title}</p>
      </div>
    </div>
    );
  };