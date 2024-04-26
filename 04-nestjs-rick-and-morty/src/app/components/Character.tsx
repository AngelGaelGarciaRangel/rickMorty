import React from 'react';
interface CharacterType{
  id: number,
  name: string,
  status: string,
  species: string,
  location: string,
  image: string,
}
const Character: React.FC<{character: CharacterType, isFavorite: boolean}> = ({character, isFavorite}) => {
  return (
    <div className=" bg-customDarkGray max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={character.image} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{character.name}</div>
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