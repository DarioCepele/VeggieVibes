import React, { useState } from 'react';
import Link from 'next/link';
import { SearchResult } from "./SearchResult";


export const SearchResultsList = ({ results }) => {

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2">
      {results.map((result) => (
        <div key={result.id}>
          <Link href={`/dashboard/${result.id}`}>
            <SearchResult
              imageUrl={result.image}
              title={result.title}
              onClick={() => setSelectedRecipeId(result.id)}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};