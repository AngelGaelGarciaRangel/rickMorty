'use client'
import React, { useEffect } from 'react';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
interface CharacterType{
  id: number,
  name: string,
  status: string,
  species: string,
  location: string,
  image: string,
}
const Character: React.FC<{character: CharacterType, isFavorite: boolean}> = ({character, isFavorite}) => {
  const [isFav, setIsFav] = useState<boolean>(isFavorite);
  const handleFavClick = () => {
    {isFav ? (setIsFav(false)) : (setIsFav(true))};
  }
  return (
    <div className=" bg-customDarkGray max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={character.image} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{character.name} {isFav ? (
                        <HeartSolidIcon onClick={handleFavClick} className="h-6 w-6 text-red-500" />
                    ) : (
                        <HeartOutlineIcon onClick={handleFavClick} className="h-6 w-6 text-gray-400" />
                    )}</div>
      <p className="text-white text-base">
        <span className='font-bold'>Status: </span> {character.status}
      </p>
      <p className="text-white text-base">
        <span className='font-bold'>Specie: </span>  {character.status}
      </p>
      <p className="text-white text-base">
        <span className='font-bold'>Location: </span> {character.location}
      </p>
    </div>
  </div>
  );
}

export {Character};