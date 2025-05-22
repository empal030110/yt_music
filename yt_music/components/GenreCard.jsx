import React from 'react'
import { genereateRandomHex } from '@/lib/utils';

const GenreCard = ({ genre }) => {
    const hex = genereateRandomHex();

  return (
    <div className="flex flex-row h-[48px] w-full cursor-pointer bg-neutral-800 rounded-lg">
        <div className="h-full w-2 rounded-" style={{ backgroundColor: hex}}></div>
        <div className="px-4 flex items-center justify-center">{genre}</div>
    </div>
  )
}

export default GenreCard