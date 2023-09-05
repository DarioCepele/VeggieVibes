'use client';
import React, { useState } from 'react';
import { SearchBar } from '@components/SearchBar';
import { SearchResultsList } from '@components/SearchResultsList';


export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div className='flex h-screen'>
      <div className='bg-[#33CA7F] w-1/3 flex flex-col items-center justify-center'>
        <h1 className='text-7xl mb-10 text-[#FFFCF7] font-playfair drop-shadow-lg'>VeggieVibes</h1>
        <p className='mb-12 font-semibold text-2xl text-[#202A25] drop-shadow-xl'>Discover Delicious Vegetarian Delights!</p>
        <SearchBar setResults={setResults} />
      </div>
      <div className='bg-[#FFFCF7] w-4/6 p-12'>
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  )
}
